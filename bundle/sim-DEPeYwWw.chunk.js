import{m as e,l as a,n as t,o as n,s,w as r,Z as i,T as l,K as o}from"./preset_utils-Dv9lejVC.chunk.js";import{R as c}from"./suggest_reforges_action-BK2_hU8B.chunk.js";import{a4 as p,a5 as d,a7 as g,G as m,aX as h,aY as f,aZ as u,U as S,aj as I,ac as P,ad as v,ae as O,af as T,ag as A,am as y,b as M,a as k,a_ as w,ah as R,a6 as C,at as G,au as H,a$ as b,ak as F,al as x,S as L,F as B,R as D}from"./detailed_results-LT4I5IXe.chunk.js";const j=e({fieldName:"focusMagicPercentUptime",label:"Focus Magic Percent Uptime",labelTooltip:"Percent of uptime for Focus Magic Buddy",extraCssClasses:["within-raid-sim-hide"]}),W={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:6117}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{spellId:30451}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{auraNumStacks:{auraId:{spellId:36032}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}}]}},castSpell:{spellId:{spellId:12042}}}},{action:{condition:{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:12042}}},{not:{val:{auraIsActive:{auraId:{spellId:2825,tag:-1}}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:12042}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"25s"}}}}]}},castSpell:{spellId:{itemId:58091}}}},{action:{condition:{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:12042}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"95%"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}}]}},castSpell:{spellId:{itemId:36799}}}},{action:{condition:{auraIsActive:{auraId:{spellId:12042}}},castSpell:{spellId:{spellId:55342}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:12042}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"25s"}}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}}]}},channelSpell:{spellId:{spellId:12051},interruptIf:{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{const:{val:"80%"}}}}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:30451}}}}},castSpell:{spellId:{spellId:2136}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpGt",lhs:{math:{op:"OpDiv",lhs:{currentMana:{}},rhs:{const:{val:"3333"}}}},rhs:{remainingTime:{}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}}]}},{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:12051}}},rhs:{const:{val:"25s"}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"92%"}}}},{auraIsActive:{auraId:{spellId:12042}}}]}},castSpell:{spellId:{spellId:30451}}}},{action:{castSpell:{spellId:{spellId:82731}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:79683}}},channelSpell:{spellId:{spellId:7268},interruptIf:{}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraNumStacks:{auraId:{spellId:36032}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"85%"}}}}]}},castSpell:{spellId:{spellId:44425}}}},{action:{castSpell:{spellId:{spellId:30451}}}}]},E={items:[{id:71508,enchant:4207,gems:[68780,52207],reforging:151},{id:71472,gems:[52207],reforging:165},{id:71511,enchant:4200,gems:[52205],reforging:144},{id:71434,enchant:4096,reforging:144},{id:71510,enchant:4102,gems:[52205,52217],reforging:154},{id:71471,enchant:4257,gems:[0],reforging:151},{id:71614,enchant:4107,gems:[52207,0],reforging:144},{id:71613,gems:[52207,52217],reforging:151},{id:71509,enchant:4112,gems:[52207,52207],reforging:144},{id:71447,enchant:4092,gems:[52205],reforging:144},{id:71217,enchant:4080,gems:[52207],reforging:154},{id:71449,enchant:4080,reforging:144},{id:65105},{id:69110},{id:71086,enchant:4097,gems:[52207,52207,52207],reforging:154},{},{id:71575}]},U={items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:144},{id:71213,reforging:145},{id:65043,enchant:4200,gems:[52207],reforging:117},{id:60232,enchant:4096,gems:[52205],reforging:165},{id:71289,enchant:4102,gems:[52207,52217]},{id:65138,enchant:4257,gems:[0],reforging:165},{id:71286,enchant:4068,gems:[52217,0]},{id:65376,randomSuffix:-230,gems:[52208,52207],reforging:165},{id:71288,enchant:4112,gems:[52207,52207],reforging:165},{id:69954,enchant:4104,gems:[52207],reforging:145},{id:65373,randomSuffix:-138,enchant:4080,reforging:165},{id:71210,enchant:4080,reforging:167},{id:65105},{id:65053,reforging:144},{id:70156,enchant:4097,reforging:147},{id:70112,enchant:4091,reforging:144},{id:71151}]},V=a("P1 Preset",{items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:151},{id:69882,randomSuffix:-114},{id:65213,enchant:4200,gems:[52207],reforging:154},{id:60232,enchant:4096,gems:[52205],reforging:151},{id:65212,enchant:4102,gems:[52207,52217],reforging:151},{id:65138,enchant:4257,gems:[0],reforging:151},{id:65209,enchant:4068,gems:[52207,0],reforging:144},{id:65376,randomSuffix:-230,gems:[52208,52207],reforging:151},{id:65211,enchant:4112,gems:[52208,52207],reforging:154},{id:65069,enchant:4104,gems:[52207],reforging:151},{id:65373,randomSuffix:-114,enchant:4080},{id:65123,enchant:4080,reforging:151},{id:65105},{id:65053,reforging:144},{id:68132,randomSuffix:-114,enchant:4097},{id:65133,enchant:4091,reforging:154},{id:59460}]},{talentTree:0}),_=a("Pre-raid ",U,{talentTree:0}),N=a("P3 Preset",E,{talentTree:0}),K=t("Arcane",W,{talentTree:0}),Z=n("Default",p.fromMap({[d.StatIntellect]:1.8,[d.StatSpellPower]:1,[d.StatHitRating]:1.52,[d.StatCritRating]:.65,[d.StatHasteRating]:.7,[d.StatMasteryRating]:.67})),q={name:"Default",data:g.create({talentsString:"303302221230122210121-23-03",glyphs:m.create({prime1:h.GlyphOfArcaneMissiles,prime2:h.GlyphOfArcaneBlast,prime3:h.GlyphOfMageArmor,major1:f.GlyphOfEvocation,major2:f.GlyphOfArcanePower,major3:f.GlyphOfManaShield})})},X=u.create({classOptions:{},focusMagicTarget:S.create()}),Y=I.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),$=P.create({flask:v.FlaskOfTheDraconicMind,food:O.FoodSeafoodFeast,defaultPotion:T.VolcanicPotion,prepopPotion:T.VolcanicPotion,tinkerHands:A.TinkerHandsSynapseSprings}),z=y.create({ebonPlaguebringer:!0,shadowAndFlame:!0}),J={distanceFromTarget:20,profession1:M.Engineering,profession2:M.Enchanting},Q=s(L.SpecArcaneMage,{cssClass:"arcane-mage-sim-ui",cssScheme:k.getCssClass(w),knownIssues:[],epStats:[d.StatIntellect,d.StatSpellPower,d.StatHitRating,d.StatCritRating,d.StatHasteRating,d.StatMasteryRating],epReferenceStat:d.StatSpellPower,displayStats:R.createDisplayStatArray([d.StatHealth,d.StatMana,d.StatStamina,d.StatIntellect,d.StatSpellPower,d.StatMasteryRating],[C.PseudoStatSpellHitPercent,C.PseudoStatSpellCritPercent,C.PseudoStatSpellHastePercent]),defaults:{gear:N.gear,epWeights:Z.epWeights,statCaps:(new p).withPseudoStat(C.PseudoStatSpellHitPercent,17),softCapBreakpoints:[G.fromPseudoStat(C.PseudoStatSpellHastePercent,{breakpoints:[23.14],capType:H.TypeSoftCap,postCapEPs:[.48*b]})],consumes:$,talents:q.data,specOptions:X,other:J,raidBuffs:Y,partyBuffs:F.create({manaTideTotems:1}),individualBuffs:x.create({vampiricTouch:!0}),debuffs:z},playerIconInputs:[],rotationInputs:{inputs:[]},includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[j,r,i,l]},encounterPicker:{showExecuteProportion:!0},presets:{epWeights:[Z],rotations:[K],talents:[q],gear:[V,_,N]},autoRotation:e=>K.rotation.rotation,raidSimPresets:[{spec:L.SpecArcaneMage,talents:q.data,specOptions:X,consumes:$,otherDefaults:J,defaultFactionRaces:{[B.Unknown]:D.RaceUnknown,[B.Alliance]:D.RaceWorgen,[B.Horde]:D.RaceTroll},defaultGear:{[B.Unknown]:{},[B.Alliance]:{1:N.gear,2:_.gear},[B.Horde]:{1:N.gear,2:_.gear}}}]});class ee extends o{constructor(e,a){super(e,a,Q),a.sim.waitForInit().then((()=>{new c(this,{updateSoftCaps:e=>{if(a.getGear().getItemSetCount("Firelord's Vestments")>=4){const a=e.find((e=>e.unitStat.equalsPseudoStat(C.PseudoStatSpellHastePercent)));a&&(a.breakpoints[0]=17.48)}return e}})}))}}export{ee as A};
