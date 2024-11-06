import{l as t,n as e,o as a,s,w as n,T as i,x as r,y as o,z as l,A as c,D as d,H as p,F as g,G as S,K as m}from"./preset_utils-Dv9lejVC.chunk.js";import{a4 as h,a5 as u,a6 as f,a7 as P,b5 as y,b6 as R,b7 as I,bb as O,b9 as A,ba as T,ac as b,ad as w,ae as k,af as G,a as H,ah as v,T as x,ai as B,aj as D,ak as E,al as M,am as C,aq as F,S as j,F as L,R as W}from"./detailed_results-LT4I5IXe.chunk.js";import{A as V,S as q}from"./inputs-CFiTTO4D.chunk.js";const z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:54428}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:84963}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{spellId:31884}}},doAtValue:{const:{val:"0s"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:84963}}},rhs:{const:{val:"4.5"}}}},{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:84963}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{currentHolyPower:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:53600}}}},{action:{condition:{auraIsActive:{auraId:{spellId:85043}}},castSpell:{spellId:{spellId:31935}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{numberTargets:{}},rhs:{const:{val:"2"}}}},castSpell:{spellId:{spellId:35395}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:53595}}}},{action:{castSpell:{spellId:{spellId:31935}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:24275}}}},{action:{castSpell:{spellId:{spellId:20271}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:26573}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{const:{val:"80%"}}}},castSpell:{spellId:{spellId:2812}}}}]},U={items:[{id:65226,enchant:4206,gems:[52293,52219],reforging:126},{id:65025},{id:65228,enchant:4198,gems:[52224],reforging:126},{id:69878,randomSuffix:-128,enchant:4090,reforging:122},{id:65224,enchant:4103,gems:[52221,52231],reforging:129},{id:65143,enchant:3850,gems:[0]},{id:65119,enchant:4107,gems:[52219,0]},{id:65086,gems:[52219,52219],reforging:122},{id:65217,enchant:4270,gems:[52219,52219]},{id:65075,enchant:4094,gems:[52231]},{id:60226,gems:[52219],reforging:144},{id:65070,reforging:126},{id:65109},{id:62471},{id:65036,enchant:4098,reforging:129},{id:65023,enchant:4085},{id:64676,gems:[52219],reforging:122}]},K={items:[{id:65038,enchant:4206,gems:[52293,52224]},{id:60227,gems:[52219]},{id:65228,enchant:4198,gems:[52224],reforging:126},{id:69878,randomSuffix:-128,enchant:4090,reforging:122},{id:65224,enchant:4103,gems:[52221,52231],reforging:129},{id:65143,enchant:3850,gems:[0]},{id:65119,enchant:4107,gems:[52219,0]},{id:65086,gems:[52219,52219],reforging:122},{id:65217,enchant:4270,gems:[52219,52219]},{id:65075,enchant:4094,gems:[52231]},{id:60226,gems:[52219],reforging:144},{id:65372,randomSuffix:-125},{id:58483,gems:[52219]},{id:62471},{id:65036,enchant:4098,reforging:129},{id:65023,enchant:4085},{id:64676,gems:[52219],reforging:122}]},N=t("P1 PreRaid Preset",{items:[{id:59359,enchant:4206,gems:[52293,59480,59477]},{id:57932},{id:56452,enchant:4198,gems:[52231]},{id:62383,enchant:4090},{id:58101,enchant:4103,gems:[52231,52210]},{id:57870,enchant:4086,gems:[52219,0]},{id:56428,enchant:4107,gems:[52210,0]},{id:55059,gems:[52231,52219]},{id:56367,enchant:4270,gems:[52219,52210],reforging:142},{id:62418,enchant:4062,gems:[52219]},{id:62440},{id:56444},{id:56347},{id:62471},{id:56346,enchant:4098},{id:55069,enchant:4085,gems:[52231]},{id:56337,gems:[52231]}]}),_=t("T11 Balanced Preset",U),J=t("T11 CTC Preset",K),Q=e("Default",z),X=a("P1",h.fromMap({[u.StatArmor]:.04,[u.StatBonusArmor]:.04,[u.StatStamina]:1.14,[u.StatMasteryRating]:1,[u.StatStrength]:.5,[u.StatAgility]:0,[u.StatAttackPower]:.15,[u.StatExpertiseRating]:.75,[u.StatHitRating]:.75,[u.StatCritRating]:.2,[u.StatHasteRating]:.3,[u.StatSpellPower]:0,[u.StatDodgeRating]:.6,[u.StatParryRating]:.6},{[f.PseudoStatMainHandDps]:3.33})),Y={name:"Baseline Example",data:P.create({talentsString:"-32023013122121101231-032032",glyphs:{prime1:y.GlyphOfShieldOfTheRighteous,prime2:y.GlyphOfCrusaderStrike,prime3:y.GlyphOfSealOfTruth,major1:R.GlyphOfTheAsceticCrusader,major2:R.GlyphOfLayOnHands,major3:R.GlyphOfHolyWrath,minor1:I.GlyphOfTruth,minor2:I.GlyphOfBlessingOfMight,minor3:I.GlyphOfInsight}})},Z=O.create({classOptions:{aura:A.Retribution,seal:T.Truth}}),$=b.create({flask:w.FlaskOfSteelskin,food:k.FoodLavascaleMinestrone,defaultPotion:G.GolembloodPotion,prepopPotion:G.GolembloodPotion}),tt=s(j.SpecProtectionPaladin,{cssClass:"protection-paladin-sim-ui",cssScheme:H.getCssClass(H.Paladin),knownIssues:[],epStats:[u.StatStamina,u.StatStrength,u.StatAgility,u.StatAttackPower,u.StatHitRating,u.StatCritRating,u.StatExpertiseRating,u.StatHasteRating,u.StatSpellPower,u.StatArmor,u.StatBonusArmor,u.StatDodgeRating,u.StatParryRating,u.StatResilienceRating,u.StatNatureResistance,u.StatShadowResistance,u.StatFrostResistance,u.StatMasteryRating],epPseudoStats:[f.PseudoStatMainHandDps],epReferenceStat:u.StatSpellPower,displayStats:v.createDisplayStatArray([u.StatHealth,u.StatArmor,u.StatBonusArmor,u.StatStamina,u.StatStrength,u.StatAgility,u.StatAttackPower,u.StatExpertiseRating,u.StatSpellPower,u.StatResilienceRating,u.StatNatureResistance,u.StatShadowResistance,u.StatFrostResistance,u.StatMasteryRating],[f.PseudoStatPhysicalHitPercent,f.PseudoStatPhysicalCritPercent,f.PseudoStatMeleeHastePercent,f.PseudoStatSpellHitPercent,f.PseudoStatBlockPercent,f.PseudoStatDodgePercent,f.PseudoStatParryPercent]),modifyDisplayStats:t=>{let e=new h;return x.freezeAllAndDo((()=>{(t=>{const e=t.getSpecOptions().classOptions?.seal;return t.getPrimeGlyps().includes(y.GlyphOfSealOfTruth)&&(e===T.Truth||e===T.Righteousness)})(t)&&(e=e.addStat(u.StatExpertiseRating,10*B))})),{talents:e}},defaults:{gear:N.gear,epWeights:X.epWeights,consumes:$,talents:Y.data,specOptions:Z,raidBuffs:D.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:E.create({}),individualBuffs:M.create({vampiricTouch:!0}),debuffs:C.create({ebonPlaguebringer:!0,shadowAndFlame:!0,bloodFrenzy:!0,mangle:!0,exposeArmor:!0,sunderArmor:!0,vindication:!0,thunderClap:!0}),rotationType:F.TypeSimple,simpleRotation:Q},playerIconInputs:[V(),q()],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[n,i,r,o,l,c,d,p,g,S]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[X],talents:[Y],rotations:[Q],gear:[N,_,J]},autoRotation:t=>Q.rotation.rotation,simpleRotation:t=>Q.rotation.rotation,raidSimPresets:[{spec:j.SpecProtectionPaladin,talents:Y.data,specOptions:Z,consumes:$,defaultFactionRaces:{[L.Unknown]:W.RaceUnknown,[L.Alliance]:W.RaceHuman,[L.Horde]:W.RaceBloodElf},defaultGear:{[L.Unknown]:{},[L.Alliance]:{1:N.gear},[L.Horde]:{1:N.gear}}}]});class et extends m{constructor(t,e){super(t,e,tt)}}export{et as P};
