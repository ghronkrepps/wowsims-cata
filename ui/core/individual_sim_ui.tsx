import { CharacterStats, StatMods, StatWrites } from './components/character_stats';
import { ContentBlock } from './components/content_block';
import { EmbeddedDetailedResults } from './components/detailed_results';
import { EncounterPickerConfig } from './components/encounter_picker';
import * as Exporters from './components/exporters';
import * as IconInputs from './components/icon_inputs';
import * as Importers from './components/importers';
import { BulkTab } from './components/individual_sim_ui/bulk_tab';
import { GearTab } from './components/individual_sim_ui/gear_tab';
import { RotationTab } from './components/individual_sim_ui/rotation_tab';
import { SettingsTab } from './components/individual_sim_ui/settings_tab';
import { TalentsTab } from './components/individual_sim_ui/talents_tab';
import * as InputHelpers from './components/input_helpers';
import { addRaidSimAction, RaidSimResultsManager } from './components/raid_sim_action';
import { SavedDataConfig } from './components/saved_data_manager';
import { addStatWeightsAction } from './components/stat_weights_action';
import * as Tooltips from './constants/tooltips';
import { getSpecLaunchStatus, LaunchStatus, simLaunchStatuses } from './launched_sims';
import { Player, PlayerConfig, registerSpecConfig as registerPlayerConfig } from './player';
import { PlayerSpecs } from './player_specs';
import { PresetGear, PresetRotation } from './preset_utils';
import { StatWeightsResult } from './proto/api';
import { APLRotation, APLRotation_Type as APLRotationType } from './proto/apl';
import {
	Class,
	Consumes,
	Cooldowns,
	Debuffs,
	Encounter as EncounterProto,
	EquipmentSpec,
	Faction,
	Glyphs,
	HandType,
	IndividualBuffs,
	ItemSlot,
	PartyBuffs,
	Profession,
	PseudoStat,
	Race,
	RaidBuffs,
	Spec,
	Stat,
} from './proto/common';
import { IndividualSimSettings, SavedTalents } from './proto/ui';
import { getMetaGemConditionDescription } from './proto_utils/gems';
import { armorTypeNames, professionNames } from './proto_utils/names';
import { Stats } from './proto_utils/stats';
import { getTalentPoints, SpecOptions, SpecRotation } from './proto_utils/utils';
import { SimSettingCategories } from './sim';
import { SimUI, SimWarning } from './sim_ui';
import { MAX_POINTS_PLAYER } from './talents/talents_picker';
import { EventID, TypedEvent } from './typed_event';
import { isExternal } from './utils';

const SAVED_GEAR_STORAGE_KEY = '__savedGear__';
const SAVED_ROTATION_STORAGE_KEY = '__savedRotation__';
const SAVED_SETTINGS_STORAGE_KEY = '__savedSettings__';
const SAVED_TALENTS_STORAGE_KEY = '__savedTalents__';

export type InputConfig<ModObject> =
	| InputHelpers.TypedBooleanPickerConfig<ModObject>
	| InputHelpers.TypedNumberPickerConfig<ModObject>
	| InputHelpers.TypedEnumPickerConfig<ModObject>;

export interface InputSection {
	tooltip?: string;
	inputs: Array<InputConfig<Player<any>>>;
}

export interface OtherDefaults {
	profession1?: Profession;
	profession2?: Profession;
	distanceFromTarget?: number;
	channelClipDelay?: number;
	darkIntentUptime?: number;
	duration?: number;
	durationVariation?: number;
	highHpThreshold?: number;
}

export interface RaidSimPreset<SpecType extends Spec> {
	spec: Spec;
	talents: SavedTalents;
	specOptions: SpecOptions<SpecType>;
	consumes: Consumes;

	defaultName?: string;
	defaultFactionRaces: Record<Faction, Race>;
	defaultGear: Record<Faction, Record<number, EquipmentSpec>>;
	otherDefaults?: OtherDefaults;

	tooltip?: string;
	iconUrl?: string;
}

export interface IndividualSimUIConfig<SpecType extends Spec> extends PlayerConfig<SpecType> {
	// Additional css class to add to the root element.
	cssClass: string;
	// Used to generate schemed components. E.g. 'shaman', 'druid', 'raid'
	cssScheme: string;

	knownIssues?: Array<string>;
	warnings?: Array<(simUI: IndividualSimUI<SpecType>) => SimWarning>;

	epStats: Array<Stat>;
	epPseudoStats?: Array<PseudoStat>;
	epReferenceStat: Stat;
	displayStats: Array<Stat>;
	modifyDisplayStats?: (player: Player<SpecType>) => StatMods;
	overwriteDisplayStats?: (player: Player<SpecType>) => StatWrites;

	defaults: {
		gear: EquipmentSpec;
		epWeights: Stats;
		// Used for Reforge Optimizer
		statCaps?: Stats;
		consumes: Consumes;
		talents: SavedTalents;
		specOptions: SpecOptions<SpecType>;

		raidBuffs: RaidBuffs;
		partyBuffs: PartyBuffs;
		individualBuffs: IndividualBuffs;

		debuffs: Debuffs;

		rotationType?: APLRotationType;
		simpleRotation?: SpecRotation<SpecType>;

		other?: OtherDefaults;
	};

	playerInputs?: InputSection;
	playerIconInputs: Array<IconInputs.IconInputConfig<Player<SpecType>, any>>;
	petConsumeInputs?: Array<IconInputs.IconInputConfig<Player<SpecType>, any>>;
	rotationInputs?: InputSection;
	rotationIconInputs?: Array<IconInputs.IconInputConfig<Player<SpecType>, any>>;
	includeBuffDebuffInputs: Array<any>;
	excludeBuffDebuffInputs: Array<any>;
	otherInputs: InputSection;
	// Currently, many classes don't support item swapping, and only in certain slots.
	// So enable it only where it is supported.
	itemSwapSlots?: Array<ItemSlot>;

	// For when extra sections are needed (e.g. Shaman totems)
	customSections?: Array<(parentElem: HTMLElement, simUI: IndividualSimUI<SpecType>) => ContentBlock>;

	encounterPicker: EncounterPickerConfig;

	presets: {
		gear: Array<PresetGear>;
		talents: Array<SavedDataConfig<Player<SpecType>, SavedTalents>>;
		rotations: Array<PresetRotation>;
	};

	raidSimPresets: Array<RaidSimPreset<SpecType>>;
}

export function registerSpecConfig<SpecType extends Spec>(spec: SpecType, config: IndividualSimUIConfig<SpecType>): IndividualSimUIConfig<SpecType> {
	registerPlayerConfig(spec, config);
	return config;
}

export const itemSwapEnabledSpecs: Array<any> = [];

export interface Settings {
	raidBuffs: RaidBuffs;
	partyBuffs: PartyBuffs;
	individualBuffs: IndividualBuffs;
	consumes: Consumes;
	race: Race;
	professions?: Array<Profession>;
}

// Extended shared UI for all individual player sims.
export abstract class IndividualSimUI<SpecType extends Spec> extends SimUI {
	readonly player: Player<SpecType>;
	readonly individualConfig: IndividualSimUIConfig<SpecType>;

	private raidSimResultsManager: RaidSimResultsManager | null;

	prevEpIterations: number;
	prevEpSimResult: StatWeightsResult | null;
	dpsRefStat?: Stat;
	healRefStat?: Stat;
	tankRefStat?: Stat;

	readonly bt: BulkTab;

	constructor(parentElem: HTMLElement, player: Player<SpecType>, config: IndividualSimUIConfig<SpecType>) {
		super(parentElem, player.sim, {
			cssClass: config.cssClass,
			cssScheme: config.cssScheme,
			spec: player.getPlayerSpec(),
			knownIssues: config.knownIssues,
			simStatus: simLaunchStatuses[player.getSpec()],
		});
		this.rootElem.classList.add('individual-sim-ui');
		this.player = player;
		this.individualConfig = config;
		this.raidSimResultsManager = null;
		this.prevEpIterations = 0;
		this.prevEpSimResult = null;

		if ((config.itemSwapSlots || []).length > 0 && !itemSwapEnabledSpecs.includes(player.getSpec())) {
			itemSwapEnabledSpecs.push(player.getSpec());
		}

		this.addWarning({
			updateOn: this.player.gearChangeEmitter,
			getContent: () => {
				if (!this.player.getGear().hasInactiveMetaGem(this.player.isBlacksmithing())) {
					return '';
				}

				const metaGem = this.player.getGear().getMetaGem()!;
				return `Meta gem disabled (${metaGem.name}): ${getMetaGemConditionDescription(metaGem)}`;
			},
		});
		this.addWarning({
			updateOn: TypedEvent.onAny([this.player.gearChangeEmitter, this.player.professionChangeEmitter]),
			getContent: () => {
				const failedProfReqs = this.player.getGear().getFailedProfessionRequirements(this.player.getProfessions());
				if (failedProfReqs.length == 0) {
					return '';
				}

				return failedProfReqs.map(fpr => `${fpr.name} requires ${professionNames.get(fpr.requiredProfession)!}, but it is not selected.`);
			},
		});
		this.addWarning({
			updateOn: this.player.gearChangeEmitter,
			getContent: () => {
				const jcGems = this.player.getGear().getJCGems(this.player.isBlacksmithing());
				if (jcGems.length <= 3) {
					return '';
				}

				return `Only 3 Jewelcrafting Gems are allowed, but ${jcGems.length} are equipped.`;
			},
		});
		this.addWarning({
			updateOn: this.player.talentsChangeEmitter,
			getContent: () => {
				const talentPoints = getTalentPoints(this.player.getTalentsString());

				if (talentPoints == 0) {
					// Just return here, so we don't show a warning during page load.
					return '';
				} else if (talentPoints < MAX_POINTS_PLAYER) {
					return 'Unspent talent points.';
				} else if (talentPoints > MAX_POINTS_PLAYER) {
					return 'More than maximum talent points spent.';
				} else {
					return '';
				}
			},
		});
		this.addWarning({
			updateOn: this.player.gearChangeEmitter,
			getContent: () => {
				const playerClass = this.player.getPlayerClass();
				// We always pick the first entry since this is always the preffered armor type
				const armorSpecializationArmorType = playerClass.armorTypes[0];

				if (!armorSpecializationArmorType || playerClass.classID === Class.ClassDruid) {
					return '';
				}

				if (
					[
						ItemSlot.ItemSlotHead,
						ItemSlot.ItemSlotShoulder,
						ItemSlot.ItemSlotChest,
						ItemSlot.ItemSlotWrist,
						ItemSlot.ItemSlotHands,
						ItemSlot.ItemSlotWaist,
						ItemSlot.ItemSlotLegs,
						ItemSlot.ItemSlotFeet,
					].some(itemSlot => this.player.getEquippedItem(itemSlot)?.item.armorType !== armorSpecializationArmorType)
				) {
					return `Equip ${armorTypeNames.get(armorSpecializationArmorType)} gear in each slot for the Armor Specialization (5% primary stat) effect.`;
				} else {
					return '';
				}
			},
		});
		this.addWarning({
			updateOn: TypedEvent.onAny([this.player.gearChangeEmitter, this.player.talentsChangeEmitter]),
			getContent: () => {
				if (
					!this.player.canDualWield2H() &&
					((this.player.getEquippedItem(ItemSlot.ItemSlotMainHand)?.item.handType == HandType.HandTypeTwoHand &&
						this.player.getEquippedItem(ItemSlot.ItemSlotOffHand) != null) ||
						this.player.getEquippedItem(ItemSlot.ItemSlotOffHand)?.item.handType == HandType.HandTypeTwoHand)
				) {
					return "Dual wielding two-handed weapon(s) without Titan's Grip spec.";
				} else {
					return '';
				}
			},
		});
		(config.warnings || []).forEach(warning => this.addWarning(warning(this)));

		if (!this.isWithinRaidSim) {
			// This needs to go before all the UI components so that gear loading is the
			// first callback invoked from waitForInit().
			this.sim.waitForInit().then(() => {
				this.loadSettings();

				if (this.player.getPlayerSpec().isHealingSpec) {
					alert(Tooltips.HEALING_SIM_DISCLAIMER);
				}
			});
		}

		this.addSidebarComponents();
		this.addGearTab();
		this.bt = this.addBulkTab();
		this.addSettingsTab();
		this.addTalentsTab();
		this.addRotationTab();

		if (!this.isWithinRaidSim) {
			this.addDetailedResultsTab();
		}

		this.addTopbarComponents();
	}

	private loadSettings() {
		const initEventID = TypedEvent.nextEventID();
		TypedEvent.freezeAllAndDo(() => {
			this.applyDefaults(initEventID);

			const savedSettings = window.localStorage.getItem(this.getSettingsStorageKey());
			if (savedSettings != null) {
				try {
					const settings = IndividualSimSettings.fromJsonString(savedSettings);
					this.fromProto(initEventID, settings);
				} catch (e) {
					console.warn('Failed to parse saved settings: ' + e);
				}
			}

			// Loading from link needs to happen after loading saved settings, so that partial link imports
			// (e.g. rotation only) include the previous settings for other categories.
			try {
				const urlParseResults = Importers.IndividualLinkImporter.tryParseUrlLocation(window.location);
				if (urlParseResults) {
					this.fromProto(initEventID, urlParseResults.settings, urlParseResults.categories);
				}
			} catch (e) {
				console.warn('Failed to parse link settings: ' + e);
			}
			window.location.hash = '';

			this.player.setName(initEventID, 'Player');

			// This needs to go last so it doesn't re-store things as they are initialized.
			this.changeEmitter.on(_eventID => {
				const jsonStr = IndividualSimSettings.toJsonString(this.toProto());
				window.localStorage.setItem(this.getSettingsStorageKey(), jsonStr);
			});
		});
	}

	private addSidebarComponents() {
		// Disable SIM buttons for Unlaunched sims
		if (!(isExternal() && getSpecLaunchStatus(this.player) === LaunchStatus.Unlaunched)) {
			this.raidSimResultsManager = addRaidSimAction(this);
			addStatWeightsAction(this, this.individualConfig.epStats, this.individualConfig.epPseudoStats, this.individualConfig.epReferenceStat);
		} else {
			this.handleSimUnlaunched();
		}

		new CharacterStats(
			this.rootElem.querySelector('.sim-sidebar-stats') as HTMLElement,
			this.player,
			this.individualConfig.displayStats,
			this.individualConfig.modifyDisplayStats,
			this.individualConfig.overwriteDisplayStats,
		);
	}

	private handleSimUnlaunched() {
		this.rootElem.classList.add('sim-ui--is-unlaunched');
		this.simActionsContainer?.appendChild(
			<div className="sim-ui-unlaunched-container d-flex flex-column align-items-center text-center mt-5">
				<i className="fas fa-ban fa-3x"></i>
				<p className="mt-4">
					This sim is currently unlaunched.
					<br />
					We are working hard to get all sims working. Want to contribute? Make sure to join our{' '}
					<a href="https://discord.gg/p3DgvmnDCS" target="_blank">
						Discord
					</a>
					!
				</p>
			</div>,
		);
	}

	private addGearTab() {
		const gearTab = new GearTab(this.simTabContentsContainer, this);
		gearTab.rootElem.classList.add('active', 'show');
	}

	private addBulkTab(): BulkTab {
		const bulkTab = new BulkTab(this.simTabContentsContainer, this);
		bulkTab.navLink.hidden = !this.sim.getShowExperimental();
		this.sim.showExperimentalChangeEmitter.on(() => {
			bulkTab.navLink.hidden = !this.sim.getShowExperimental();
		});
		return bulkTab;
	}

	private addSettingsTab() {
		new SettingsTab(this.simTabContentsContainer, this);
	}

	private addTalentsTab() {
		new TalentsTab(this.simTabContentsContainer, this);
	}

	private addRotationTab() {
		new RotationTab(this.simTabContentsContainer, this);
	}

	private addDetailedResultsTab() {
		const detailedResults = (<div className="detailed-results"></div>) as HTMLElement;
		this.addTab('Results', 'detailed-results-tab', detailedResults);

		new EmbeddedDetailedResults(detailedResults, this, this.raidSimResultsManager!);
	}

	private addTopbarComponents() {
		this.simHeader.addImportLink('JSON', new Importers.IndividualJsonImporter(this.rootElem, this), true);
		this.simHeader.addImportLink('60U Cata', new Importers.Individual60UImporter(this.rootElem, this), true);
		this.simHeader.addImportLink('WoWHead', new Importers.IndividualWowheadGearPlannerImporter(this.rootElem, this), false);
		this.simHeader.addImportLink('Addon', new Importers.IndividualAddonImporter(this.rootElem, this), true);

		this.simHeader.addExportLink('Link', new Exporters.IndividualLinkExporter(this.rootElem, this), false);
		this.simHeader.addExportLink('JSON', new Exporters.IndividualJsonExporter(this.rootElem, this), true);
		this.simHeader.addExportLink('WoWHead', new Exporters.IndividualWowheadGearPlannerExporter(this.rootElem, this), false);
		this.simHeader.addExportLink('60U Cata EP', new Exporters.Individual60UEPExporter(this.rootElem, this), false);
		this.simHeader.addExportLink('Pawn EP', new Exporters.IndividualPawnEPExporter(this.rootElem, this), false);
		this.simHeader.addExportLink('CLI', new Exporters.IndividualCLIExporter(this.rootElem, this), true);
	}

	applyDefaultRotation(eventID: EventID) {
		TypedEvent.freezeAllAndDo(() => {
			const defaultRotationType = this.individualConfig.defaults.rotationType || APLRotationType.TypeAuto;
			this.player.setAplRotation(
				eventID,
				APLRotation.create({
					type: defaultRotationType,
				}),
			);

			if (!this.individualConfig.defaults.simpleRotation) {
				return;
			}

			const defaultSimpleRotation = this.individualConfig.defaults.simpleRotation || this.player.specTypeFunctions.rotationCreate();
			this.player.setSimpleRotation(eventID, defaultSimpleRotation);
			this.player.setSimpleCooldowns(
				eventID,
				Cooldowns.create({
					hpPercentForDefensives: this.player.playerSpec.isTankSpec ? 0.4 : 0,
				}),
			);
		});
	}

	applyEmptyAplRotation(eventID: EventID) {
		TypedEvent.freezeAllAndDo(() => {
			this.player.setAplRotation(
				eventID,
				APLRotation.create({
					type: APLRotationType.TypeAPL,
				}),
			);
		});
	}

	applyDefaults(eventID: EventID) {
		TypedEvent.freezeAllAndDo(() => {
			const tankSpec = this.player.getPlayerSpec().isTankSpec;
			const healingSpec = this.player.getPlayerSpec().isHealingSpec;

			this.player.applySharedDefaults(eventID);
			this.player.setRace(eventID, this.player.getPlayerClass().races[0]);
			this.player.setGear(eventID, this.sim.db.lookupEquipmentSpec(this.individualConfig.defaults.gear));
			this.player.setConsumes(eventID, this.individualConfig.defaults.consumes);
			this.applyDefaultRotation(eventID);
			this.player.setTalentsString(eventID, this.individualConfig.defaults.talents.talentsString);
			this.player.setGlyphs(eventID, this.individualConfig.defaults.talents.glyphs || Glyphs.create());
			this.player.setSpecOptions(eventID, this.individualConfig.defaults.specOptions);
			this.player.setBuffs(eventID, this.individualConfig.defaults.individualBuffs);
			this.player.getParty()!.setBuffs(eventID, this.individualConfig.defaults.partyBuffs);
			this.player.getRaid()!.setBuffs(eventID, this.individualConfig.defaults.raidBuffs);
			this.player.setEpWeights(eventID, this.individualConfig.defaults.epWeights);
			const defaultRatios = this.player.getDefaultEpRatios(tankSpec, healingSpec);
			this.player.setEpRatios(eventID, defaultRatios);
			if (this.individualConfig.defaults.statCaps) this.player.setStatCaps(eventID, this.individualConfig.defaults.statCaps);
			this.player.setProfession1(eventID, this.individualConfig.defaults.other?.profession1 || Profession.Engineering);
			this.player.setProfession2(eventID, this.individualConfig.defaults.other?.profession2 || Profession.Jewelcrafting);
			this.player.setDistanceFromTarget(eventID, this.individualConfig.defaults.other?.distanceFromTarget || 0);
			this.player.setChannelClipDelay(eventID, this.individualConfig.defaults.other?.channelClipDelay || 0);
			this.player.setDarkIntentUptime(eventID, this.individualConfig.defaults.other?.darkIntentUptime || 100);

			if (this.isWithinRaidSim) {
				this.sim.raid.setTargetDummies(eventID, 0);
			} else {
				this.sim.raid.setTargetDummies(eventID, healingSpec ? 9 : 0);
				this.sim.encounter.applyDefaults(eventID);
				this.sim.encounter.setDuration(eventID, this.individualConfig.defaults.other?.duration || 180);
				this.sim.encounter.setDurationVariation(eventID, this.individualConfig.defaults.other?.durationVariation || 5);
				this.sim.encounter.setExecuteProportion90(eventID, this.individualConfig.defaults.other?.highHpThreshold || 0.9);
				this.sim.raid.setDebuffs(eventID, this.individualConfig.defaults.debuffs);
				this.sim.applyDefaults(eventID, tankSpec, healingSpec);

				if (tankSpec) {
					this.sim.raid.setTanks(eventID, [this.player.makeUnitReference()]);
				} else {
					this.sim.raid.setTanks(eventID, []);
				}
			}
		});
	}

	getSavedGearStorageKey(): string {
		return this.getStorageKey(SAVED_GEAR_STORAGE_KEY);
	}

	getSavedRotationStorageKey(): string {
		return this.getStorageKey(SAVED_ROTATION_STORAGE_KEY);
	}

	getSavedSettingsStorageKey(): string {
		return this.getStorageKey(SAVED_SETTINGS_STORAGE_KEY);
	}

	getSavedTalentsStorageKey(): string {
		return this.getStorageKey(SAVED_TALENTS_STORAGE_KEY);
	}

	// Returns the actual key to use for local storage, based on the given key part and the site context.
	getStorageKey(keyPart: string): string {
		// Local storage is shared by all sites under the same domain, so we need to use
		// different keys for each spec site.
		return PlayerSpecs.getLocalStorageKey(this.player.getPlayerSpec()) + keyPart;
	}

	toProto(exportCategories?: Array<SimSettingCategories>): IndividualSimSettings {
		const exportCategory = (cat: SimSettingCategories) => !exportCategories || exportCategories.length == 0 || exportCategories.includes(cat);

		const proto = IndividualSimSettings.create({
			player: this.player.toProto(true, false, exportCategories),
		});

		if (exportCategory(SimSettingCategories.Miscellaneous)) {
			IndividualSimSettings.mergePartial(proto, {
				tanks: this.sim.raid.getTanks(),
			});
		}
		if (exportCategory(SimSettingCategories.Encounter)) {
			IndividualSimSettings.mergePartial(proto, {
				encounter: this.sim.encounter.toProto(),
			});
		}
		if (exportCategory(SimSettingCategories.External)) {
			IndividualSimSettings.mergePartial(proto, {
				partyBuffs: this.player.getParty()?.getBuffs() || PartyBuffs.create(),
				raidBuffs: this.sim.raid.getBuffs(),
				debuffs: this.sim.raid.getDebuffs(),
				targetDummies: this.sim.raid.getTargetDummies(),
			});
		}
		if (exportCategory(SimSettingCategories.UISettings)) {
			IndividualSimSettings.mergePartial(proto, {
				settings: this.sim.toProto(),
				epWeightsStats: this.player.getEpWeights().toProto(),
				epRatios: this.player.getEpRatios(),
				statCaps: this.player.getStatCaps().toProto(),
				dpsRefStat: this.dpsRefStat,
				healRefStat: this.healRefStat,
				tankRefStat: this.tankRefStat,
			});
		}

		return proto;
	}

	toLink(): string {
		return Exporters.IndividualLinkExporter.createLink(this);
	}

	fromProto(eventID: EventID, settings: IndividualSimSettings, includeCategories?: Array<SimSettingCategories>) {
		const loadCategory = (cat: SimSettingCategories) => !includeCategories || includeCategories.length == 0 || includeCategories.includes(cat);

		const tankSpec = this.player.getPlayerSpec().isTankSpec;
		const healingSpec = this.player.getPlayerSpec().isHealingSpec;

		TypedEvent.freezeAllAndDo(() => {
			if (!settings.player) {
				return;
			}

			this.player.fromProto(eventID, settings.player, includeCategories);

			if (loadCategory(SimSettingCategories.Miscellaneous)) {
				this.sim.raid.setTanks(eventID, settings.tanks || []);
			}
			if (loadCategory(SimSettingCategories.External)) {
				this.sim.raid.setBuffs(eventID, settings.raidBuffs || RaidBuffs.create());
				this.sim.raid.setDebuffs(eventID, settings.debuffs || Debuffs.create());
				const party = this.player.getParty();
				if (party) {
					party.setBuffs(eventID, settings.partyBuffs || PartyBuffs.create());
				}
				this.sim.raid.setTargetDummies(eventID, settings.targetDummies);
			}
			if (loadCategory(SimSettingCategories.Encounter)) {
				this.sim.encounter.fromProto(eventID, settings.encounter || EncounterProto.create());
			}
			if (loadCategory(SimSettingCategories.UISettings)) {
				if (settings.epWeightsStats) {
					this.player.setEpWeights(eventID, Stats.fromProto(settings.epWeightsStats));
				} else {
					this.player.setEpWeights(eventID, this.individualConfig.defaults.epWeights);
				}

				const defaultRatios = this.player.getDefaultEpRatios(tankSpec, healingSpec);
				if (settings.epRatios) {
					const missingRatios = new Array<number>(defaultRatios.length - settings.epRatios.length).fill(0);
					this.player.setEpRatios(eventID, settings.epRatios.concat(missingRatios));
				} else {
					this.player.setEpRatios(eventID, defaultRatios);
				}

				if (settings.statCaps) {
					this.player.setStatCaps(eventID, Stats.fromProto(settings.statCaps));
				}

				if (settings.dpsRefStat) {
					this.dpsRefStat = settings.dpsRefStat;
				}
				if (settings.healRefStat) {
					this.healRefStat = settings.healRefStat;
				}
				if (settings.tankRefStat) {
					this.tankRefStat = settings.tankRefStat;
				}

				if (settings.settings) {
					this.sim.fromProto(eventID, settings.settings);
				} else {
					this.sim.applyDefaults(eventID, tankSpec, healingSpec);
				}
			}
		});
	}
}
