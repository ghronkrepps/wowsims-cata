import{ak as e,m as a,l as t,n as s,o as n,L as i,q as l,s as r,t as o,w as d,T as p,G as c,K as g}from"./preset_utils-Dv9lejVC.chunk.js";import{R as h}from"./suggest_reforges_action-BK2_hU8B.chunk.js";import{g5 as m,a4 as u,a5 as f,a6 as I,a7 as S,G as v,bQ as y,bR as O,bS as T,g6 as P,ac as R,ad as G,ae as A,af as E,ag as w,b as k,ar as b,as as x,a as H,ah as M,ai as C,at as W,au as F,an as B,aj as D,ak as L,al as q,am as j,S as U,F as N,R as V}from"./detailed_results-LT4I5IXe.chunk.js";import{S as K,a as Y}from"./inputs-CyzrA5Vg.chunk.js";const _=e({fieldName:"syncType",label:"Swing Sync Setting",labelTooltip:"Choose your sync option Perfect\n\t\t<ul>\n\t\t\t<li><div>None: No Sync used for mismatched weapon speeds</div></li>\n\t\t\t<li><div>Sync: Makes your weapons always attack at the same time, for match weapon speeds</div></li>\n\t\t</ul>",values:[{name:"None",value:m.WarriorNoSync},{name:"Sync",value:m.WarriorSyncMainhandOffhandSwings}]}),z=a({fieldName:"prepullMastery",label:"Prepull Mastery Rating",labelTooltip:"Mastery rating in the prepull set equipped before entering combat. Only applies if value is greater than 0."}),Q={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:12292}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:6673}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{isExecutePhase:{threshold:"E20"}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"252s"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}}]}},castSpell:{spellId:{spellId:1719}}}},{action:{condition:{or:{vals:[{isExecutePhase:{threshold:"E20"}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"174s"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"30s"}}}}]}},castSpell:{spellId:{spellId:12292}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{itemId:69113}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"75"}}}}]}},castSpell:{spellId:{spellId:1134}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}}},castSpell:{spellId:{spellId:86346}}}},{action:{condition:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}},castSpell:{spellId:{spellId:6544}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{auraNumStacks:{auraId:{spellId:90806}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:90806}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:5308}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:1680,tag:1}}}},{action:{castSpell:{spellId:{spellId:23881}}}},{action:{condition:{auraIsKnown:{auraId:{spellId:99233}}},castSpell:{spellId:{spellId:6673}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},{or:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:12964}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"70"}}}},{isExecutePhase:{threshold:"E20"}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"80"}}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},{auraIsActiveWithReactionTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:86627}}}]}}]}}]}},castSpell:{spellId:{spellId:78}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},{or:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:12964}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},{isExecutePhase:{threshold:"E20"}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"80"}}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},{auraIsActiveWithReactionTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}]}}]}}]}},castSpell:{spellId:{spellId:845}}}},{action:{condition:{auraIsActive:{auraId:{spellId:46916}}},castSpell:{spellId:{spellId:1464}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:5308}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{numberTargets:{}},rhs:{const:{val:"2"}}}},castSpell:{spellId:{spellId:85288,tag:1}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:1680,tag:1}}}},{action:{condition:{and:{}},castSpell:{spellId:{spellId:18499}}}},{action:{condition:{not:{val:{auraIsKnown:{auraId:{spellId:99233}}}}},castSpell:{spellId:{spellId:6673}}}}]},J={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:12292}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:6673}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{isExecutePhase:{threshold:"E20"}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"252s"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}}]}},castSpell:{spellId:{spellId:1719}}}},{action:{condition:{or:{vals:[{isExecutePhase:{threshold:"E20"}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"174s"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"30s"}}}}]}},castSpell:{spellId:{spellId:12292}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{itemId:69113}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"75"}}}}]}},castSpell:{spellId:{spellId:1134}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}}},castSpell:{spellId:{spellId:86346}}}},{action:{condition:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}},castSpell:{spellId:{spellId:6544}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{auraNumStacks:{auraId:{spellId:90806}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:90806}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:5308}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:1680,tag:1}}}},{action:{castSpell:{spellId:{spellId:23881}}}},{action:{condition:{auraIsKnown:{auraId:{spellId:99233}}},castSpell:{spellId:{spellId:6673}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},{or:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:12964}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"70"}}}},{isExecutePhase:{threshold:"E20"}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"80"}}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},{auraIsActiveWithReactionTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:86627}}}]}}]}}]}},castSpell:{spellId:{spellId:78}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},{or:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:12964}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},{isExecutePhase:{threshold:"E20"}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"80"}}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"50"}}}},{auraIsActiveWithReactionTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}]}}]}}]}},castSpell:{spellId:{spellId:845}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:46916}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:1464}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{numberTargets:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:85288,tag:1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:46916}}},castSpell:{spellId:{spellId:1464}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:5308}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:1680,tag:1}}}},{action:{condition:{and:{}},castSpell:{spellId:{spellId:18499}}}},{action:{condition:{not:{val:{auraIsKnown:{auraId:{spellId:99233}}}}},castSpell:{spellId:{spellId:6673}}}}]},X={items:[{id:65266,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120},{id:65268,enchant:4202,gems:[52206],reforging:152},{id:69879,randomSuffix:-120,enchant:4100},{id:65264,enchant:4102,gems:[52206,52213],reforging:151},{id:60228,enchant:4256,gems:[52222,52206],reforging:151},{id:65265,enchant:4106,gems:[52213,52206],reforging:152},{id:65040,gems:[52206,52206],reforging:139},{id:65379,randomSuffix:-173,enchant:4126,gems:[52206,52213]},{id:65075,enchant:4092,gems:[52213],reforging:166},{id:60226,gems:[52222],reforging:165},{id:65382,randomSuffix:-120,reforging:139},{id:59461},{id:65072,reforging:159},{id:68131,randomSuffix:-120,enchant:4099},{id:65047,enchant:4099,reforging:151},{id:60210,enchant:4176,reforging:166}]},Z={items:[{id:65266,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120},{id:65268,enchant:4202,gems:[52206],reforging:152},{id:69879,randomSuffix:-120,enchant:4100},{id:65264,enchant:4102,gems:[52206,52213],reforging:151},{id:60228,enchant:4256,gems:[52222,52206],reforging:151},{id:65265,enchant:4106,gems:[52213,52206],reforging:152},{id:65040,gems:[52206,52206],reforging:139},{id:65379,randomSuffix:-173,enchant:4126,gems:[52206,52213]},{id:65075,enchant:4092,gems:[52213],reforging:166},{id:60226,gems:[52222],reforging:165},{id:65382,randomSuffix:-120,reforging:139},{id:59461},{id:65072,reforging:159},{id:65003,enchant:4099},{id:65003,enchant:4099},{id:60210,enchant:4176,reforging:166}]},$={items:[{id:71430,enchant:4208,gems:[68779,52213],reforging:168},{id:71446,reforging:139},{id:71603,enchant:4202,gems:[52213],reforging:151},{id:71227,enchant:4100,reforging:152},{id:71600,enchant:4102,gems:[52222,52222]},{id:71418,enchant:4256,gems:[52206],reforging:151},{id:71601,enchant:4106,gems:[52222,52206],reforging:166},{id:71250,gems:[52213,52206],reforging:139},{id:71602,enchant:4126,gems:[52206,52206],reforging:158},{id:71404,enchant:4092,gems:[52206],reforging:151},{id:71215,gems:[52206],reforging:139},{id:71433,gems:[52206],reforging:159},{id:69113},{id:69167},{id:71562,enchant:4099,reforging:166},{id:71562,enchant:4099,reforging:166},{id:71593,reforging:137}]},ee={items:[{id:71430,enchant:4208,gems:[68779,52213],reforging:165},{id:71446},{id:71603,enchant:4202,gems:[52213],reforging:153},{id:71227,enchant:4100,reforging:152},{id:71600,enchant:4102,gems:[52222,52222]},{id:71418,enchant:4256,gems:[52206],reforging:151},{id:71601,enchant:4106,gems:[52222,52206],reforging:166},{id:71443,gems:[52206,52206],reforging:166},{id:71602,enchant:4126,gems:[52206,52206],reforging:158},{id:71404,enchant:4092,gems:[52206],reforging:151},{id:71215,gems:[52206],reforging:139},{id:71433,gems:[52206],reforging:159},{id:69113},{id:69167},{id:70723,enchant:4099,gems:[52206,52206],reforging:165},{id:70723,enchant:4099,gems:[52206,52206],reforging:165},{id:71593,reforging:137}]},ae={items:[{id:60325,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120,reforging:140},{id:60327,enchant:4202,gems:[52206],reforging:152},{id:69879,randomSuffix:-120,enchant:4100,reforging:140},{id:71068,enchant:4102,gems:[52222,52222],reforging:140},{id:60228,enchant:4256,gems:[52222,52206],reforging:154},{id:71069,enchant:4106,gems:[52206,52206],reforging:137},{id:65369,randomSuffix:-220,gems:[52206,52206],reforging:139},{id:71071,enchant:4126,gems:[52206,52206],reforging:161},{id:69946,enchant:4094,gems:[52206],reforging:139},{id:71208,reforging:154},{id:60226,gems:[52206]},{id:65072,reforging:159},{id:59461},{id:63679,enchant:4099,reforging:140},{id:63679,enchant:4099,reforging:140},{id:71154,reforging:137}]},te={onLoad:e=>{i([{condition:e=>e.getEquippedItem(b.ItemSlotMainHand)?.item.handType===x.HandTypeTwoHand,message:"Check your gear: You have a two-handed weapon equipped, but the selected option is for one-handed weapons."},{condition:e=>e.getEquippedItem(b.ItemSlotMainHand)?.item.handType===x.HandTypeTwoHand||!e.getTalents().singleMindedFury,message:"Check your talents: You have selected a two-handed spec but don't have [Single-Minded Fury] talented."}],e)}},se={onLoad:e=>{i([{condition:e=>e.getEquippedItem(b.ItemSlotMainHand)?.item.handType===x.HandTypeOneHand,message:"Check your gear: You have a one-handed weapon equipped, but the selected option is for two-handed weapons."},{condition:e=>!e.getTalents().titansGrip,message:"Check your talents: You have selected a one-handed spec but don't have [Titan's Grip] talented."}],e)}},ne=t("Preraid - SMF",{items:[{id:60325,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120},{id:60327,enchant:4202,gems:[52206],reforging:152},{id:69879,randomSuffix:-120,enchant:4100},{id:71068,enchant:4102,gems:[52222,52222]},{id:60228,enchant:4256,gems:[52222,52206],reforging:151},{id:71069,enchant:4106,gems:[52206,52206],reforging:166},{id:65369,randomSuffix:-220,gems:[52206,52206],reforging:139},{id:71071,enchant:4126,gems:[52206,52206],reforging:158},{id:69946,enchant:4094,gems:[52206],reforging:139},{id:71208,reforging:151},{id:60226,gems:[52206],reforging:165},{id:65072,reforging:159},{id:59461},{id:71362,enchant:4099,reforging:166},{id:71362,enchant:4099,reforging:166},{id:71154,reforging:137}]},te),ie=t("Preraid - TG",ae,se),le=t("P1 - SMF",X,te),re=t("P3 - TG",Z,se),oe=t("P3 - SMF",$,te),de=t("P3 - TG",ee,se),pe=s("SMF",Q,te),ce=s("TG",J,se),ge=n("P1 - SMF",u.fromMap({[f.StatStrength]:2.2,[f.StatAgility]:1.14,[f.StatAttackPower]:1,[f.StatExpertiseRating]:1.46,[f.StatHitRating]:2.35,[f.StatCritRating]:1.48,[f.StatHasteRating]:1.05,[f.StatMasteryRating]:.95},{[I.PseudoStatMainHandDps]:3.15,[I.PseudoStatOffHandDps]:1.63}),te),he=n("P1 - TG",u.fromMap({[f.StatStrength]:2.21,[f.StatAgility]:1.23,[f.StatAttackPower]:1,[f.StatExpertiseRating]:1.59,[f.StatHitRating]:2.56,[f.StatCritRating]:1.59,[f.StatHasteRating]:1.15,[f.StatMasteryRating]:1.31},{[I.PseudoStatMainHandDps]:3.77,[I.PseudoStatOffHandDps]:1.6}),se),me=n("P3 - SMF",u.fromMap({[f.StatStrength]:2.2,[f.StatAgility]:1.07,[f.StatAttackPower]:1,[f.StatExpertiseRating]:1.57,[f.StatHitRating]:2.46,[f.StatCritRating]:1.39,[f.StatHasteRating]:1.19,[f.StatMasteryRating]:1.02},{[I.PseudoStatMainHandDps]:3.49,[I.PseudoStatOffHandDps]:1.71}),te),ue=n("P3 - TG",u.fromMap({[f.StatStrength]:2.21,[f.StatAgility]:1.14,[f.StatAttackPower]:1,[f.StatExpertiseRating]:1.71,[f.StatHitRating]:2.66,[f.StatCritRating]:1.48,[f.StatHasteRating]:1.19,[f.StatMasteryRating]:1.17},{[I.PseudoStatMainHandDps]:3.77,[I.PseudoStatOffHandDps]:1.6}),se),fe={name:"SMF",data:S.create({talentsString:"302003-032222031301101223201-2",glyphs:v.create({prime1:y.GlyphOfBloodthirst,prime2:y.GlyphOfRagingBlow,prime3:y.GlyphOfSlam,major1:O.GlyphOfCleaving,major2:O.GlyphOfDeathWish,major3:O.GlyphOfColossusSmash,minor1:T.GlyphOfCommand,minor2:T.GlyphOfBattle,minor3:T.GlyphOfBerserkerRage})}),...te},Ie={name:"TG",data:S.create({talentsString:"302003-03222203130110122321-2",glyphs:v.create({prime1:y.GlyphOfBloodthirst,prime2:y.GlyphOfRagingBlow,prime3:y.GlyphOfSlam,major1:O.GlyphOfCleaving,major2:O.GlyphOfDeathWish,major3:O.GlyphOfColossusSmash,minor1:T.GlyphOfCommand,minor2:T.GlyphOfBattle,minor3:T.GlyphOfBerserkerRage})}),...se},Se=P.create({classOptions:{startingRage:0},syncType:0,prepullMastery:0}),ve=R.create({flask:G.FlaskOfTitanicStrength,food:A.FoodBeerBasedCrocolisk,defaultPotion:E.GolembloodPotion,prepopPotion:E.GolembloodPotion,tinkerHands:w.TinkerHandsSynapseSprings}),ye={profession1:k.Engineering,profession2:k.Blacksmithing,distanceFromTarget:5},Oe=l("P1 - SMF",{gear:le,talents:fe,rotation:pe,epWeights:ge}),Te=l("P1 - TG",{gear:re,talents:Ie,rotation:ce,epWeights:he}),Pe=l("P3 - SMF",{gear:oe,talents:fe,rotation:pe,epWeights:me}),Re=l("P3 - TG",{gear:de,talents:Ie,rotation:ce,epWeights:ue}),Ge=r(U.SpecFuryWarrior,{cssClass:"fury-warrior-sim-ui",cssScheme:H.getCssClass(H.Warrior),knownIssues:[],epStats:[f.StatStrength,f.StatAgility,f.StatAttackPower,f.StatExpertiseRating,f.StatHitRating,f.StatCritRating,f.StatHasteRating,f.StatMasteryRating],epPseudoStats:[I.PseudoStatMainHandDps,I.PseudoStatOffHandDps],epReferenceStat:f.StatAttackPower,displayStats:M.createDisplayStatArray([f.StatHealth,f.StatStamina,f.StatStrength,f.StatAgility,f.StatAttackPower,f.StatExpertiseRating,f.StatMasteryRating],[I.PseudoStatPhysicalHitPercent,I.PseudoStatPhysicalCritPercent,I.PseudoStatMeleeHastePercent]),defaults:{gear:de.gear,epWeights:ue.epWeights,statCaps:(new u).withStat(f.StatExpertiseRating,26*C),softCapBreakpoints:[W.fromPseudoStat(I.PseudoStatPhysicalHitPercent,{breakpoints:[8,27],capType:F.TypeSoftCap,postCapEPs:[1.23*B,0]})],other:ye,consumes:ve,talents:Ie.data,specOptions:Se,raidBuffs:D.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:L.create({}),individualBuffs:q.create({}),debuffs:j.create({bloodFrenzy:!0,mangle:!0,sunderArmor:!0,curseOfElements:!0,ebonPlaguebringer:!0})},playerIconInputs:[],includeBuffDebuffInputs:[o],excludeBuffDebuffInputs:[],otherInputs:{inputs:[_,K(),Y(),d,p,c,z]},encounterPicker:{showExecuteProportion:!0},presets:{epWeights:[ge,he,me,ue],talents:[fe,Ie],rotations:[pe,ce],gear:[ne,ie,le,re,oe,de],builds:[Oe,Te,Pe,Re]},autoRotation:e=>ce.rotation.rotation,raidSimPresets:[{spec:U.SpecFuryWarrior,talents:fe.data,specOptions:Se,consumes:ve,defaultFactionRaces:{[N.Unknown]:V.RaceUnknown,[N.Alliance]:V.RaceWorgen,[N.Horde]:V.RaceTroll},defaultGear:{[N.Unknown]:{},[N.Alliance]:{1:oe.gear,2:de.gear,3:ne.gear,4:ie.gear},[N.Horde]:{1:oe.gear,2:de.gear,3:ne.gear,4:ie.gear}},otherDefaults:ye}]});class Ae extends g{constructor(e,a){super(e,a,Ge),a.sim.waitForInit().then((()=>{new h(this,{getEPDefaults:e=>{const a=e.getGear().getEquippedItems().some((e=>(e?.item.phase||0)>=3));return e.getEquippedItem(b.ItemSlotMainHand)?.item.handType!==x.HandTypeOneHand&&e.getTalents().titansGrip?a?ue.epWeights:he.epWeights:a?me.epWeights:ge.epWeights}})}))}}export{Ae as F};