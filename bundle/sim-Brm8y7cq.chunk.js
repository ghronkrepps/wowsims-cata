import{aa as a,l as e,n as s,o as t,q as l,s as n,t as o,ab as r,Y as i,u as p,ac as d,a3 as c,v as I,ad as u,w as g,T as m,G as h,K as v}from"./preset_utils-Dv9lejVC.chunk.js";import{R as S}from"./suggest_reforges_action-BK2_hU8B.chunk.js";import{a4 as f,a5 as y,a6 as P,a7 as O,G as A,b5 as T,b6 as w,b7 as R,aq as H,bc as G,b9 as E,ba as b,ac as k,ad as K,ae as L,af as M,ag as C,b as q,a as x,ah as D,aj as W,ak as B,al as F,am as j,S as V,F as z,R as _,T as N,ai as U,ar as Y}from"./detailed_results-LT4I5IXe.chunk.js";import{A as J,S as Q}from"./inputs-CFiTTO4D.chunk.js";const X={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:86150}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:31801}}}}},castSpell:{spellId:{spellId:31801}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:57933,tag:-1}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:85696}}},{auraIsActive:{auraId:{spellId:31884}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:85696}}},rhs:{const:{val:"16s"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}}]}}]}},castSpell:{spellId:{itemId:68972}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:85696}}},{auraIsActive:{auraId:{spellId:31884}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:85696}}},rhs:{const:{val:"16s"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}}]}}]}},castSpell:{spellId:{itemId:69113}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:85696}}},rhs:{const:{val:"55s"}}}},{auraIsActive:{auraId:{spellId:85696}}}]}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"2"}}}},{spellIsReady:{spellId:{spellId:85696}}},{not:{val:{auraIsActive:{auraId:{spellId:90174}}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:90174}}},{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"2"}}}}]}}]}},castSpell:{spellId:{spellId:35395}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:53657}}}}},castSpell:{spellId:{spellId:20271}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentMana:{}},rhs:{const:{val:"16000"}}}},castSpell:{spellId:{spellId:28730}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:85696}}},rhs:{const:{val:"34s"}}}},castSpell:{spellId:{spellId:86150}}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{auraIsActive:{auraId:{spellId:90174}}}]}},{cmp:{op:"OpEq",lhs:{gcdTimeToReady:{}},rhs:{const:{val:"0s"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:85696}}},{castSpell:{spellId:{spellId:84963}}}]}}},{action:{condition:{auraIsActive:{auraId:{spellId:85696}}},autocastOtherCooldowns:{}}},{action:{condition:{auraIsActive:{auraId:{spellId:85696}}},castSpell:{spellId:{spellId:31884}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:35395}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:84963}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:84963}}},rhs:{const:{val:"1s"}}}}]}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},{not:{val:{spellCanCast:{spellId:{spellId:85696}}}}},{not:{val:{spellIsReady:{spellId:{spellId:85696}}}}}]}},castSpell:{spellId:{spellId:84963}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"1.25s"}}}},{and:{vals:[{not:{val:{auraIsKnown:{auraId:{spellId:54934}}}}},{auraIsActive:{auraId:{spellId:85696}}}]}}]}}]}},{auraIsActive:{auraId:{spellId:90174}}}]}},castSpell:{spellId:{spellId:85256}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59578}}},castSpell:{spellId:{spellId:879}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"1.25s"}}}}]}},castSpell:{spellId:{spellId:85256}}}},{action:{castSpell:{spellId:{spellId:24275}}}},{action:{castSpell:{spellId:{spellId:20271}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"0.4s"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"0s"}}}}]}},wait:{duration:{const:{val:"0.1s"}}}}},{action:{castSpell:{spellId:{spellId:2812}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentMana:{}},rhs:{const:{val:"16000"}}}},castSpell:{spellId:{spellId:26573}}}}]},Z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:86150}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:31801}}}}},castSpell:{spellId:{spellId:31801}}}},{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{castSpell:{spellId:{spellId:57933,tag:-1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:31884}}},autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{and:{vals:[{or:{vals:[{and:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:85696}}},rhs:{const:{val:"35s"}}}},{or:{vals:[{auraIsKnown:{auraId:{itemId:56285}}},{auraIsKnown:{auraId:{itemId:56345}}},{auraIsKnown:{auraId:{itemId:52351}}},{auraIsKnown:{auraId:{itemId:62464}}},{auraIsKnown:{auraId:{itemId:62469}}},{auraIsKnown:{auraId:{itemId:69002}}},{auraIsKnown:{auraId:{itemId:77116}}},{auraIsKnown:{auraId:{spellId:91836}}},{auraIsKnown:{auraId:{itemId:64689}}},{auraIsKnown:{auraId:{itemId:61034}}},{auraIsKnown:{auraId:{itemId:70519}}},{auraIsKnown:{auraId:{itemId:70400}}},{auraIsKnown:{auraId:{itemId:72450}}},{auraIsKnown:{auraId:{itemId:73496}}}]}}]}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:85696}}},rhs:{const:{val:"55s"}}}}]}},{not:{val:{auraIsActive:{auraId:{spellId:85696}}}}}]}},{auraIsActive:{auraId:{spellId:31884}}}]}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"2"}}}},{spellIsReady:{spellId:{spellId:85696}}},{not:{val:{auraIsActive:{auraId:{spellId:90174}}}}}]}},{and:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"2"}}}},{auraIsActive:{auraId:{spellId:90174}}}]}}]}},castSpell:{spellId:{spellId:35395}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:53657}}}}},{or:{vals:[{and:{vals:[{auraIsKnown:{auraId:{spellId:105767}}},{not:{val:{auraIsActive:{auraId:{spellId:90174}}}}},{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}}]}},{not:{val:{auraIsKnown:{auraId:{spellId:105767}}}}}]}}]}},castSpell:{spellId:{spellId:20271}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentMana:{}},rhs:{const:{val:"16000"}}}},castSpell:{spellId:{spellId:28730}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:85696}}},rhs:{const:{val:"10s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:85696}}},rhs:{remainingTime:{}}}}]}},castSpell:{spellId:{spellId:86150}}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{auraIsActive:{auraId:{spellId:90174}}}]}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:84963}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:84963}}},rhs:{const:{val:"20s"}}}}]}},{gcdIsReady:{}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:85696}}},{castSpell:{spellId:{spellId:84963}}}]}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{auraIsActive:{auraId:{spellId:90174}}}]}},{cmp:{op:"OpGe",lhs:{auraRemainingTime:{auraId:{spellId:84963}}},rhs:{const:{val:"20s"}}}},{gcdIsReady:{}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:85696}}},{castSpell:{spellId:{spellId:31884}}},{autocastOtherCooldowns:{}}]}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:85696}}},{auraIsActive:{auraId:{spellId:84963}}}]}},castSpell:{spellId:{spellId:31884}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:35395}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:84963}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:84963}}},rhs:{const:{val:"1s"}}}}]}},{not:{val:{spellCanCast:{spellId:{spellId:85696}}}}},{not:{val:{spellIsReady:{spellId:{spellId:85696}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:84963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{not:{val:{auraIsActive:{auraId:{spellId:90174}}}}},{not:{val:{auraIsActive:{auraId:{spellId:85696}}}}},{auraIsKnown:{auraId:{spellId:105767}}}]}},castSpell:{spellId:{spellId:20271}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:90174}}},{and:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"1.25s"}}}},{and:{vals:[{not:{val:{auraIsKnown:{auraId:{spellId:54934}}}}},{auraIsActive:{auraId:{spellId:85696}}}]}}]}}]}}]}},castSpell:{spellId:{spellId:85256}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:85696}}}}},{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{auraIsKnown:{auraId:{spellId:105767}}}]}},castSpell:{spellId:{spellId:20271}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59578}}},castSpell:{spellId:{spellId:879}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"1.25s"}}}}]}},castSpell:{spellId:{spellId:85256}}}},{action:{castSpell:{spellId:{spellId:24275}}}},{action:{condition:{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:85696}}},{cmp:{op:"OpLt",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},{auraIsKnown:{auraId:{spellId:105767}}}]}},{not:{val:{auraIsKnown:{auraId:{spellId:105767}}}}}]}},castSpell:{spellId:{spellId:20271}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"0.4s"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:35395}}},rhs:{const:{val:"0s"}}}}]}},wait:{duration:{const:{val:"0.1s"}}}}},{action:{castSpell:{spellId:{spellId:2812}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentMana:{}},rhs:{const:{val:"16000"}}}},castSpell:{spellId:{spellId:26573}}}}]},$={items:[{id:65216,enchant:4208,gems:[68779,52240],reforging:161},{id:65025,reforging:137},{id:65142,enchant:4202,gems:[52206]},{id:69879,randomSuffix:-120,enchant:4118,reforging:140},{id:65214,enchant:4102,gems:[52206,52213],reforging:154},{id:60228,enchant:4256,gems:[52240,0],reforging:154},{id:65215,enchant:4106,gems:[52206,0],reforging:151},{id:65040,gems:[52206,52206],reforging:147},{id:65217,enchant:4126,gems:[52206,52206],reforging:137},{id:65075,enchant:4094,gems:[52206],reforging:158},{id:60226,gems:[52240]},{id:65382,randomSuffix:-118,reforging:151},{id:65072,reforging:161},{id:62469},{id:65003,enchant:4099,reforging:147},{},{id:64674,gems:[52206],reforging:161}]},aa={items:[{id:71514,enchant:4208,gems:[68779,52206],reforging:147},{id:71446,reforging:147},{id:71516,enchant:4202,gems:[52240],reforging:154},{id:69879,randomSuffix:-120,enchant:4118,reforging:140},{id:71469,enchant:4102,gems:[52206,52213],reforging:151},{id:71418,enchant:4256,gems:[0],reforging:154},{id:71513,enchant:4106,gems:[52206,0]},{id:71443,gems:[52206,52206],reforging:158},{id:71515,enchant:4126,gems:[52206,52240]},{id:71404,enchant:4094,gems:[52206],reforging:154},{id:71433,gems:[52206],reforging:154},{id:71215,gems:[52206],reforging:147},{id:69113},{id:65072,reforging:161},{id:70723,enchant:4099,gems:[52206,52206]},{},{id:71587,gems:[52206],reforging:154}]},ea={items:[{id:78693,enchant:4208,gems:[68779,71883],reforging:161},{id:78543,reforging:140},{id:78465,enchant:4202,gems:[71883,71883],reforging:144},{id:78506,enchant:4118,reforging:147},{id:78727,enchant:4102,gems:[71883,71883,71883],reforging:152},{id:78373,enchant:4256,gems:[71883,0],reforging:146},{id:78675,enchant:4106,gems:[71883,0],reforging:154},{id:78416,gems:[71883,71883,71883],reforging:153},{id:78712,enchant:4126,gems:[71883,71883,71856],reforging:144},{id:78389,enchant:4094,gems:[71883,71883],reforging:146},{id:78492,gems:[71883],reforging:152},{id:78432,gems:[71883],reforging:137},{id:77992},{id:77997},{id:78478,enchant:4099},{},{id:78550,gems:[71883],reforging:151}]},sa=e("Pre-raid",{items:[{id:60346,enchant:4208,gems:[68779,52240],reforging:161},{id:65025},{id:60348,enchant:4202,gems:[52206],reforging:154},{id:69879,randomSuffix:-120,enchant:4118,reforging:140},{id:71063,enchant:4102,gems:[52206,52213],reforging:161},{id:60228,enchant:4256,gems:[52240,0],reforging:154},{id:71064,enchant:4106,gems:[52206,0]},{id:65369,randomSuffix:-220,gems:[52206,52206],reforging:147},{id:71066,enchant:4126,gems:[52206,52240],reforging:144},{id:59464,enchant:4092,gems:[52206],reforging:144},{id:71208,reforging:154},{id:60226,gems:[52240]},{id:62464},{id:65072,reforging:161},{id:70224,enchant:4099,reforging:147},{},{id:71147,gems:[52206],reforging:154}]}),ta=e("P2",$),la=e("P3",aa),na=e("P4",ea),oa=s("Default",Z),ra=s("Apparatus",X),ia=t("P2",f.fromMap({[y.StatAttackPower]:1,[y.StatStrength]:2.28,[y.StatCritRating]:1.1,[y.StatHasteRating]:1.05,[y.StatMasteryRating]:1.23,[y.StatHitRating]:2.32,[y.StatExpertiseRating]:1.89},{[P.PseudoStatMainHandDps]:8.15})),pa=t("P3",f.fromMap({[y.StatAttackPower]:1,[y.StatStrength]:2.29,[y.StatCritRating]:1.29,[y.StatHasteRating]:1.14,[y.StatMasteryRating]:1.35,[y.StatHitRating]:2.68,[y.StatExpertiseRating]:2.24},{[P.PseudoStatMainHandDps]:8.45})),da=t("P4",f.fromMap({[y.StatAttackPower]:1,[y.StatStrength]:2.28,[y.StatCritRating]:1.5,[y.StatHasteRating]:1.23,[y.StatMasteryRating]:1.69,[y.StatHitRating]:3.12,[y.StatExpertiseRating]:2.51},{[P.PseudoStatMainHandDps]:8.08})),ca={name:"Default",data:O.create({talentsString:"203002-02-23203213211113002311",glyphs:A.create({prime1:T.GlyphOfSealOfTruth,prime2:T.GlyphOfExorcism,prime3:T.GlyphOfTemplarSVerdict,major1:w.GlyphOfTheAsceticCrusader,major2:w.GlyphOfHammerOfWrath,major3:w.GlyphOfConsecration,minor1:R.GlyphOfRighteousness,minor2:R.GlyphOfTruth,minor3:R.GlyphOfBlessingOfMight})})},Ia=l("P2",{gear:ta,epWeights:ia,talents:ca,rotationType:H.TypeAuto}),ua=l("P3",{gear:la,epWeights:pa,talents:ca,rotationType:H.TypeAuto}),ga=l("P4",{gear:na,epWeights:da,talents:ca,rotationType:H.TypeAuto}),ma=G.create({classOptions:{aura:E.Retribution,seal:b.Truth,snapshotGuardian:!0}}),ha=k.create({flask:K.FlaskOfTitanicStrength,food:L.FoodBeerBasedCrocolisk,defaultPotion:M.GolembloodPotion,prepopPotion:M.GolembloodPotion,tinkerHands:C.TinkerHandsSynapseSprings}),va={profession1:q.Engineering,profession2:q.Tailoring,distanceFromTarget:5,iterationCount:25e3},Sa=a=>{const e=a.getSpecOptions().classOptions?.seal;return a.getPrimeGlyps().includes(T.GlyphOfSealOfTruth)&&(e===b.Truth||e===b.Righteousness)},fa=a=>e=>Sa(a)?e.addStat(y.StatExpertiseRating,10*U):e,ya=a=>{let e=!1,s=!1;const t=a.getGear().getEquippedItems();for(const l of t){const a=l?.item.phase||0;a>3?s=!0:a>2&&(e=!0)}return s?da.epWeights:e?pa.epWeights:ia.epWeights},Pa=n(V.SpecRetributionPaladin,{cssClass:"retribution-paladin-sim-ui",cssScheme:x.getCssClass(x.Paladin),knownIssues:[],epStats:[y.StatStrength,y.StatAttackPower,y.StatHitRating,y.StatCritRating,y.StatHasteRating,y.StatExpertiseRating,y.StatMasteryRating],epPseudoStats:[P.PseudoStatMainHandDps],epReferenceStat:y.StatAttackPower,displayStats:D.createDisplayStatArray([y.StatStrength,y.StatAgility,y.StatIntellect,y.StatAttackPower,y.StatExpertiseRating,y.StatSpellPower,y.StatMana,y.StatHealth,y.StatMasteryRating],[P.PseudoStatPhysicalHitPercent,P.PseudoStatPhysicalCritPercent,P.PseudoStatMeleeHastePercent,P.PseudoStatSpellHastePercent,P.PseudoStatSpellCritPercent,P.PseudoStatSpellHitPercent]),modifyDisplayStats:a=>{let e=new f;return N.freezeAllAndDo((()=>{Sa(a)&&(e=e.addStat(y.StatExpertiseRating,10*U))})),{talents:e}},defaults:{gear:la.gear,epWeights:pa.epWeights,statCaps:(()=>{const a=(new f).withPseudoStat(P.PseudoStatPhysicalHitPercent,8),e=(new f).withStat(y.StatExpertiseRating,26*U);return a.add(e)})(),consumes:ha,talents:ca.data,specOptions:ma,other:va,raidBuffs:W.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:B.create({}),individualBuffs:F.create({communion:!0}),debuffs:j.create({exposeArmor:!0,bloodFrenzy:!0,mangle:!0,ebonPlaguebringer:!0,criticalMass:!0}),rotationType:H.TypeAuto},playerInputs:{inputs:[a({fieldName:"snapshotGuardian",label:"Snapshot T11 Protection 4pc set bonus",labelTooltip:"Enable this to make the first Guardian of Ancient Kings cast during pre-pull snapshot the T11 Protection 4pc set bonus (50% increased duration)."})]},playerIconInputs:[J(),Q()],includeBuffDebuffInputs:[o,r,i,p,d,c],excludeBuffDebuffInputs:[I,u],otherInputs:{inputs:[g,m,h]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[ia,pa,da],rotations:[oa,ra],talents:[ca],gear:[sa,ta,la,na],builds:[Ia,ua,ga]},autoRotation:a=>"Apparatus of Khaz'goroth"===a.getEquippedItem(Y.ItemSlotTrinket1)?.item.name||"Apparatus of Khaz'goroth"===a.getEquippedItem(Y.ItemSlotTrinket2)?.item.name?ra.rotation.rotation:oa.rotation.rotation,raidSimPresets:[{spec:V.SpecRetributionPaladin,talents:ca.data,specOptions:ma,consumes:ha,defaultFactionRaces:{[z.Unknown]:_.RaceUnknown,[z.Alliance]:_.RaceHuman,[z.Horde]:_.RaceBloodElf},defaultGear:{[z.Unknown]:{},[z.Alliance]:{1:ta.gear,2:ta.gear,3:la.gear,4:na.gear},[z.Horde]:{1:ta.gear,2:ta.gear,3:la.gear,4:na.gear}}}]});class Oa extends v{constructor(a,e){super(a,e,Pa),e.sim.waitForInit().then((()=>{new S(this,{updateGearStatsModifier:fa(e),getEPDefaults:ya})}))}}export{Oa as R};
