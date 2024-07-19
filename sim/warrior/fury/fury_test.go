package fury

import (
	_ "github.com/wowsims/cata/sim/common" // imported to get item effects included.

	"testing"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/proto"
)

func init() {
	RegisterFuryWarrior()
}

func TestFury(t *testing.T) {
	core.RunTestSuite(t, t.Name(), core.FullCharacterTestSuiteGenerator(core.CharacterSuiteConfig{
		Class:      proto.Class_ClassWarrior,
		Race:       proto.Race_RaceTroll,
		OtherRaces: []proto.Race{proto.Race_RaceWorgen},

		GearSet: core.GetGearSet("../../../ui/warrior/fury/gear_sets", "p1_fury_smf"),
		OtherGearSets: []core.GearSetCombo{
			core.GetGearSet("../../../ui/warrior/fury/gear_sets", "p1_fury_tg"),
		},
		Talents: SMFTalents,
		OtherTalentSets: []core.TalentsCombo{
			{
				Label:   "Titan's Grip",
				Talents: TGTalents,
				Glyphs:  FuryGlyphs,
			},
		},
		Glyphs:      FuryGlyphs,
		Consumes:    FullConsumes,
		SpecOptions: core.SpecOptionsCombo{Label: "Basic", SpecOptions: PlayerOptionsFury},
		Rotation:    core.GetAplRotation("../../../ui/warrior/fury/apls", "smf"),
		OtherRotations: []core.RotationCombo{
			core.GetAplRotation("../../../ui/warrior/fury/apls", "tg"),
		},

		ItemFilter: ItemFilter,
	}))
}

var ItemFilter = core.ItemFilter{
	ArmorType: proto.ArmorType_ArmorTypePlate,

	WeaponTypes: []proto.WeaponType{
		proto.WeaponType_WeaponTypeAxe,
		proto.WeaponType_WeaponTypeSword,
		proto.WeaponType_WeaponTypeMace,
		proto.WeaponType_WeaponTypeDagger,
		proto.WeaponType_WeaponTypeFist,
	},
}

var SMFTalents = "302003-032222031301101223201-2"
var TGTalents = "302003-03222203130110122321-2"
var FuryGlyphs = &proto.Glyphs{
	Prime1: int32(proto.WarriorPrimeGlyph_GlyphOfBloodthirst),
	Prime2: int32(proto.WarriorPrimeGlyph_GlyphOfRagingBlow),
	Prime3: int32(proto.WarriorPrimeGlyph_GlyphOfSlam),
	Major1: int32(proto.WarriorMajorGlyph_GlyphOfColossusSmash),
	Major2: int32(proto.WarriorMajorGlyph_GlyphOfCleaving),
	Major3: int32(proto.WarriorMajorGlyph_GlyphOfDeathWish),
	Minor1: int32(proto.WarriorMinorGlyph_GlyphOfBerserkerRage),
	Minor2: int32(proto.WarriorMinorGlyph_GlyphOfBattle),
	Minor3: int32(proto.WarriorMinorGlyph_GlyphOfCommand),
}

var PlayerOptionsFury = &proto.Player_FuryWarrior{
	FuryWarrior: &proto.FuryWarrior{
		Options: &proto.FuryWarrior_Options{
			ClassOptions: &proto.WarriorOptions{
				StartingRage: 0,
			},
		},
	},
}

var FullConsumes = &proto.Consumes{
	Flask:         proto.Flask_FlaskOfTitanicStrength,
	DefaultPotion: proto.Potions_GolembloodPotion,
	PrepopPotion:  proto.Potions_GolembloodPotion,
	Food:          proto.Food_FoodBeerBasedCrocolisk,
	TinkerHands:   proto.TinkerHands_TinkerHandsSynapseSprings,
}
