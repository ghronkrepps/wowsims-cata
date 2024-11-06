import{C as e,ah as t,i as a,ai as n,aj as s,ak as i,l as r,n as o,o as l,s as g,R as d,V as c,u as p,v as m,w as f,T as h,G as S,K as u}from"./preset_utils-Dv9lejVC.chunk.js";import{A as y,bA as P,bC as w,M as O,bD as I,bE as T,a4 as b,a5 as v,a6 as A,ao as k,an as E,a7 as C,G as H,bu as W,bv as R,bw as F,bF as D,by as M,bz as G,bB as x,y as B,B as N,z as j,W as L,b as V,ac as z,af as U,ad as _,ae as K,ag as q,aj as J,am as Q,a as X,ah as Y,ai as Z,ak as $,al as ee,ar as te,S as ae,F as ne,R as se}from"./detailed_results-LT4I5IXe.chunk.js";import{R as ie}from"./suggest_reforges_action-BK2_hU8B.chunk.js";import{S as re,a as oe,T as le}from"./inputs-p316ZT5A.chunk.js";const ge=s({fieldName:"imbueOh",values:[{value:I.NoImbue,tooltip:"No Off Hand Enchant"},{actionId:y.fromSpellId(8232),value:I.WindfuryWeapon},{actionId:y.fromSpellId(8024),value:I.FlametongueWeapon},{actionId:y.fromSpellId(8033),value:I.FrostbrandWeapon}]}),de=i({fieldName:"syncType",label:"Sync/Stagger Setting",labelTooltip:"Choose your sync or stagger option Perfect\n\t\t<ul>\n\t\t\t<li><div>Auto: Will auto pick sync options based on your weapons attack speeds</div></li>\n\t\t\t<li><div>None: No Sync or Staggering, used for mismatched weapon speeds</div></li>\n\t\t\t<li><div>Perfect Sync: Makes your weapons always attack at the same time, for match weapon speeds</div></li>\n\t\t\t<li><div>Delayed Offhand: Adds a slight delay to the offhand attacks while staying within the 0.5s flurry ICD window</div></li>\n\t\t</ul>",values:[{name:"Automatic",value:T.Auto},{name:"None",value:T.NoSync},{name:"Perfect Sync",value:T.SyncMainhandOffhandSwings},{name:"Delayed Offhand",value:T.DelayOffhandSwings}]}),ce={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:324}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:51533}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:8050,tag:1}}}}},castSpell:{spellId:{spellId:8050}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:3599}}},rhs:{const:{val:"100ms"}}}}]}},castSpell:{spellId:{spellId:3599}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{castSpell:{spellId:{spellId:78146}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{inputDelay:{}},rhs:{spellCastTime:{spellId:{spellId:403}}}}},rhs:{autoTimeToNext:{}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:51530}}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:403}}}},{action:{castSpell:{spellId:{spellId:73680}}}},{action:{castSpell:{spellId:{spellId:8042}}}},{action:{condition:{and:{vals:[{auraIsKnown:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:99212}}},{cmp:{op:"OpGe",lhs:{dotRemainingTime:{spellId:{spellId:8050}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:51505}}}}]},pe={items:[{id:65251,enchant:4209,gems:[52291,52204]},{id:65107,reforging:151},{id:65253,enchant:4204,gems:[52212]},{id:65035,enchant:4118,reforging:146},{id:65037,enchant:4102,gems:[52212,52220]},{id:65028,enchant:4258,gems:[0],reforging:147},{id:65250,enchant:4107,gems:[52220,0],reforging:146},{id:65132,gems:[52212,52212],reforging:153},{id:65252,enchant:4126,gems:[52212,52212],reforging:154},{id:65063,enchant:4076,gems:[52220],reforging:153},{id:65082,reforging:147},{id:65367,randomSuffix:-136},{id:65140},{id:58181,reforging:140},{id:65024,enchant:4099,reforging:147},{id:65024,enchant:4099,reforging:147},{id:64671,gems:[52212],reforging:147}]},me={items:[{id:65251,enchant:4209,gems:[52291,52204]},{id:65107},{id:65253,enchant:4204,gems:[52212]},{id:65035,enchant:4118,reforging:144},{id:65037,enchant:4102,gems:[52212,52220]},{id:65028,enchant:4258,gems:[0],reforging:147},{id:65250,enchant:4107,gems:[52220,0],reforging:146},{id:65132,gems:[52212,52212],reforging:154},{id:65252,enchant:4126,gems:[52212,52212],reforging:154},{id:65063,enchant:4076,gems:[52220],reforging:153},{id:65082,reforging:147},{id:65367,randomSuffix:-136},{id:65140},{id:58181},{id:65024,enchant:4099,reforging:153},{id:65024,enchant:4099,reforging:147},{id:64671,gems:[52212],reforging:154}]},fe={items:[{id:71549,enchant:4209,gems:[52291,52220],reforging:151},{id:71610,reforging:151},{id:71551,enchant:4204,gems:[52204],reforging:140},{id:71415,enchant:4118,gems:[52212,52212]},{id:71547,enchant:4102,gems:[52212,52204],reforging:158},{id:71561,enchant:4258,gems:[0],reforging:154},{id:71548,enchant:4107,gems:[52220,0]},{id:71255,gems:[52220,52212],reforging:153},{id:71429,enchant:4126,gems:[52212,52220]},{id:71457,enchant:4076,gems:[52212],reforging:147},{id:71216,gems:[52212],reforging:151},{id:71401,reforging:153},{id:69150},{id:69001},{id:71783,enchant:4099,reforging:154},{id:71783,enchant:4099,reforging:154},{id:71567,gems:[52212],reforging:144}]},he={items:[{id:71549,enchant:4209,gems:[52291,52220],reforging:152},{id:71610,reforging:151},{id:71551,enchant:4204,gems:[52204],reforging:161},{id:71415,enchant:4118,gems:[52212,52212]},{id:71547,enchant:4102,gems:[52212,52204],reforging:158},{id:71561,enchant:4258,gems:[0],reforging:154},{id:71548,enchant:4107,gems:[52220,0]},{id:71255,gems:[52220,52212],reforging:151},{id:71429,enchant:4126,gems:[52212,52220]},{id:71457,enchant:4076,gems:[52212],reforging:147},{id:71216,gems:[52212],reforging:151},{id:71401,reforging:151},{id:69150},{id:69001},{id:71454,enchant:4099,reforging:161},{id:71454,enchant:4099,reforging:161},{id:71567,gems:[52212]}]},Se=r("Pre-raid",{items:[{id:60320,enchant:4209,gems:[52291,52204],reforging:139},{id:71129,reforging:147},{id:60322,enchant:4204,gems:[52212]},{id:69884,randomSuffix:-133,enchant:4118,reforging:147},{id:71301,enchant:4102,gems:[52212,52204],reforging:158},{id:71264,enchant:4258,gems:[0],reforging:146},{id:71302,enchant:4107,gems:[52220,0],reforging:139},{id:65368,randomSuffix:-233,gems:[52212,52212],reforging:147},{id:71304,enchant:4126,gems:[52212,52212],reforging:147},{id:69949,enchant:4076,gems:[52212],reforging:144},{id:71209,reforging:146},{id:65367,randomSuffix:-133,reforging:147},{id:65140},{id:58181,reforging:140},{id:65024,enchant:4099,reforging:154},{id:65024,enchant:4099,reforging:154},{id:71146,gems:[52212],reforging:144}]}),ue=r("P1 - Orc",me),ye=r("P1 - Draenei",pe),Pe=r("P3 - Orc",he),we=r("P3 - Draenei",fe),Oe=o("Default",ce),Ie=l("Default",b.fromMap({[v.StatIntellect]:.07,[v.StatAgility]:2.47,[v.StatSpellPower]:0,[v.StatHitRating]:1.49,[v.StatCritRating]:.84,[v.StatHasteRating]:.66,[v.StatAttackPower]:1,[v.StatExpertiseRating]:1.3,[v.StatMasteryRating]:1.21},{[A.PseudoStatMainHandDps]:3.05,[A.PseudoStatOffHandDps]:2.56,[A.PseudoStatSpellHitPercent]:.89*k,[A.PseudoStatPhysicalHitPercent]:.6*E})),Te={name:"Standard",data:C.create({talentsString:"3022003-2333310013003012321",glyphs:H.create({prime1:W.GlyphOfLavaLash,prime2:W.GlyphOfStormstrike,prime3:W.GlyphOfFeralSpirit,major1:R.GlyphOfLightningShield,major2:R.GlyphOfHealingStreamTotem,major3:R.GlyphOfFireNova,minor1:F.GlyphOfWaterWalking,minor2:F.GlyphOfRenewedLife,minor3:F.GlyphOfTheArcticWolf})})},be=D.create({classOptions:{shield:M.LightningShield,call:G.Elements,totems:P.create({elements:x.create({earth:B.StrengthOfEarthTotem,air:N.WrathOfAirTotem,fire:j.SearingTotem,water:L.ManaSpringTotem}),ancestors:x.create({earth:B.StrengthOfEarthTotem,air:N.WrathOfAirTotem,fire:j.SearingTotem,water:L.ManaSpringTotem}),spirits:x.create({earth:B.StrengthOfEarthTotem,air:N.WrathOfAirTotem,fire:j.SearingTotem,water:L.ManaSpringTotem}),earth:B.StrengthOfEarthTotem,air:N.WrathOfAirTotem,fire:j.SearingTotem,water:L.ManaSpringTotem}),imbueMh:I.WindfuryWeapon},imbueOh:I.FlametongueWeapon,syncType:T.Auto}),ve={distanceFromTarget:5,profession1:V.Engineering,profession2:V.Tailoring},Ae=z.create({defaultPotion:U.PotionOfTheTolvir,prepopPotion:U.PotionOfTheTolvir,flask:_.FlaskOfTheWinds,food:K.FoodSeafoodFeast,tinkerHands:q.TinkerHandsSynapseSprings}),ke=J.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),Ee=Q.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!0,demoralizingShout:!0,frostFever:!0}),Ce=g(ae.SpecEnhancementShaman,{cssClass:"enhancement-shaman-sim-ui",cssScheme:X.getCssClass(X.Shaman),knownIssues:[],overwriteDisplayStats:e=>{const t=e.getCurrentStats(),a=(e,t)=>(new b).withStat(v.StatSpellPower,.55*b.fromProto(e).subtract(b.fromProto(t)).getStat(v.StatAttackPower));return{base:a(t.baseStats),gear:a(t.gearStats,t.baseStats),talents:a(t.talentsStats,t.gearStats),buffs:a(t.buffsStats,t.talentsStats),consumes:a(t.consumesStats,t.buffsStats),final:(new b).withStat(v.StatSpellPower,.55*b.fromProto(t.finalStats).getStat(v.StatAttackPower)),stats:[v.StatSpellPower]}},epStats:[v.StatAgility,v.StatIntellect,v.StatAttackPower,v.StatHitRating,v.StatCritRating,v.StatHasteRating,v.StatExpertiseRating,v.StatSpellPower,v.StatMasteryRating],epPseudoStats:[A.PseudoStatMainHandDps,A.PseudoStatOffHandDps,A.PseudoStatPhysicalHitPercent,A.PseudoStatSpellHitPercent],epReferenceStat:v.StatAttackPower,displayStats:Y.createDisplayStatArray([v.StatHealth,v.StatStamina,v.StatStrength,v.StatAgility,v.StatIntellect,v.StatAttackPower,v.StatExpertiseRating,v.StatSpellPower,v.StatMasteryRating],[A.PseudoStatPhysicalHitPercent,A.PseudoStatPhysicalCritPercent,A.PseudoStatMeleeHastePercent,A.PseudoStatSpellHitPercent,A.PseudoStatSpellCritPercent,A.PseudoStatSpellHastePercent]),defaults:{gear:Pe.gear,epWeights:Ie.epWeights,statCaps:(()=>{const e=(new b).withPseudoStat(A.PseudoStatSpellHitPercent,17),t=(new b).withStat(v.StatExpertiseRating,26*Z);return e.add(t)})(),other:ve,consumes:Ae,talents:Te.data,specOptions:be,raidBuffs:ke,partyBuffs:$.create({}),individualBuffs:ee.create({vampiricTouch:!0}),debuffs:Ee},playerIconInputs:[re(),oe(),ge],includeBuffDebuffInputs:[d,c,p],excludeBuffDebuffInputs:[m],otherInputs:{inputs:[de,f,h,S]},itemSwapSlots:[te.ItemSlotMainHand,te.ItemSlotOffHand],customSections:[le,function(s,i){const r=new e(s,"fire-elemental-settings",{header:{title:"Fire Elemental"}}),o=O.newGroupContainer();o.classList.add("fire-elemental-icon-container"),r.bodyElement.appendChild(o);const l=t({getModObject:e=>e,getValue:e=>e.getClassOptions().totems||P.create(),setValue:(e,t,a)=>{const n=t.getClassOptions();n.totems=a,t.setClassOptions(e,n),t.rotationChangeEmitter.emit(e)},changeEmitter:e=>e.specOptionsChangeEmitter},y.fromSpellId(2894),"useFireElemental");return new a(o,i.player,l),new n(r.bodyElement,i.player,{id:"fire-elemental-bonus-spellpower",positive:!0,label:"Bonus spell power",labelTooltip:"Bonus spell power to snapshot Fire Elemental with. Will prioritize dropping Fire Elemental if greater then 0",inline:!0,getValue:e=>e.getClassOptions().totems?.bonusSpellpower||0,setValue:(e,t,a)=>{const n=t.getClassOptions();n.totems&&(n.totems.bonusSpellpower=a),t.setClassOptions(e,n)},changedEvent:e=>e.specOptionsChangeEmitter}),new w(r.bodyElement,i.player,{id:"fire-elemental-use-tier-ten",label:"Use Tier 10 (4pc)",labelTooltip:"Will use Tier 10 (4pc) to snapshot Fire Elemental.",inline:!0,getValue:e=>e.getClassOptions().totems?.enhTierTenBonus||!1,setValue:(e,t,a)=>{const n=t.getClassOptions();n.totems&&(n.totems.enhTierTenBonus=a),t.setClassOptions(e,n)},changedEvent:e=>e.currentStatsEmitter,showWhen:e=>e.getCurrentStats().sets.includes("Frost Witch's Battlegear (4pc)")}),r}],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[Ie],talents:[Te],rotations:[Oe],gear:[Se,ue,ye,Pe,we]},autoRotation:e=>Oe.rotation.rotation,raidSimPresets:[{spec:ae.SpecEnhancementShaman,talents:Te.data,specOptions:be,consumes:Ae,defaultFactionRaces:{[ne.Alliance]:se.RaceDraenei,[ne.Horde]:se.RaceOrc,[ne.Unknown]:se.RaceUnknown},defaultGear:{[ne.Alliance]:{1:we.gear},[ne.Horde]:{1:Pe.gear},[ne.Unknown]:{}},otherDefaults:ve}]});class He extends u{constructor(e,t){super(e,t,Ce),t.sim.waitForInit().then((()=>{new ie(this)}))}}export{He as E};
