import{_ as e,k as a,$ as t,a0 as i,l as n,n as r,o as s,a1 as o,s as l,Y as g,V as d,w as m,Z as c,T as p,G as f,J as h,K as u}from"./preset_utils-Dv9lejVC.chunk.js";import{R as S}from"./suggest_reforges_action-BK2_hU8B.chunk.js";import{aA as y,T as b,aB as w,a4 as T,a5 as R,a6 as P,aC as A,S as k,a7 as v,G as O,aw as W,ax as F,ay as E,aD as B,ac as M,ad as C,ae as x,af as D,ag as G,b as H,a as N,ah as I,ai as $,aq as j,aj as L,ak as U,al as _,am as J,aE as z,aF as K,aG as q,F as V,R as Y}from"./detailed_results-LT4I5IXe.chunk.js";import{s as Z}from"./apl_utils-C_D_vgRV.chunk.js";const Q=e({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]});function X(e){const a=e.getSimpleRotation();return a.manualParams&&a.rotationType==y.SingleTarget}const ee={inputs:[a({fieldName:"rotationType",label:"Type",values:[{name:"Single Target",value:y.SingleTarget},{name:"AOE",value:y.Aoe}]}),t({fieldName:"maintainFaerieFire",label:"Maintain Faerie Fire",labelTooltip:"Maintain Faerie Fire debuff. Overwrites any external Sunder effects specified in settings."}),t({fieldName:"meleeWeave",label:"Enable leave-weaving",labelTooltip:"Weave out of melee range for Stampede procs",showWhen:e=>e.getSimpleRotation().rotationType==y.SingleTarget&&e.getTalents().stampede>0,changeEmitter:e=>b.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),t({fieldName:"bearWeave",label:"Enable bear-weaving",labelTooltip:"Weave into Bear Form while pooling Energy"}),t({fieldName:"snekWeave",label:"Use Albino Snake",labelTooltip:"Reset swing timer at the end of bear-weaves using Albino Snake pet",showWhen:e=>e.getSimpleRotation().bearWeave}),t({fieldName:"allowAoeBerserk",label:"Allow AoE Berserk",labelTooltip:"Allow Berserk usage in AoE rotation",showWhen:e=>e.getSimpleRotation().rotationType==y.Aoe}),t({fieldName:"manualParams",label:"Manual Advanced Parameters",labelTooltip:"Manually specify advanced parameters, otherwise will use preset defaults",showWhen:e=>e.getSimpleRotation().rotationType==y.SingleTarget}),i({fieldName:"minRoarOffset",label:"Roar Offset",labelTooltip:"Targeted offset in Rip/Roar timings",showWhen:X}),i({fieldName:"ripLeeway",label:"Rip Leeway",labelTooltip:"Rip leeway when determining roar clips",showWhen:X}),t({fieldName:"useRake",label:"Use Rake",labelTooltip:"Use rake during rotation",showWhen:X}),t({fieldName:"useBite",label:"Bite during rotation",labelTooltip:"Use bite during rotation rather than just at end",showWhen:X}),i({fieldName:"biteTime",label:"Bite Time",labelTooltip:"Min seconds on Rip/Roar to bite",showWhen:e=>X(e)&&1==e.getSimpleRotation().useBite&&e.getSimpleRotation().biteModeType==w.Emperical}),t({fieldName:"biteDuringExecute",label:"Bite during Execute phase",labelTooltip:"Bite aggressively during Execute phase",showWhen:e=>X(e)&&e.getTalents().bloodInTheWater>0,changeEmitter:e=>b.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),t({fieldName:"cancelPrimalMadness",label:"Enable Primal Madness cancellation",labelTooltip:"Click off Primal Madness buff when doing so will result in net Energy gains",showWhen:e=>(X(e)||e.getSimpleRotation().rotationType==y.Aoe)&&e.getTalents().primalMadness>0,changeEmitter:e=>b.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},ae={items:[{id:65190,enchant:4209,gems:[68778,52220],reforging:147},{id:69880,randomSuffix:-137,reforging:144},{id:65083,enchant:4204,gems:[52212],reforging:144},{id:65035,enchant:1099,reforging:146},{id:65192,enchant:4102,gems:[52212,52220],reforging:154},{id:65050,enchant:4258,gems:[0],reforging:146},{id:65073,enchant:4107,gems:[52212,0],reforging:165},{id:60231,gems:[52220,52212,52212],reforging:146},{id:65381,randomSuffix:-199,enchant:4126,gems:[52212,52220],reforging:147},{id:65144,enchant:4076,gems:[52212],reforging:153},{id:65082,reforging:147},{id:65367,randomSuffix:-137,reforging:146},{id:65140},{id:65026},{id:65139,enchant:4227,reforging:144},{},{id:64671,gems:[52212],reforging:154}]},te={items:[{id:46161,enchant:3817,gems:[41398,40002]},{id:45517,gems:[40002]},{id:45245,enchant:3808,gems:[40002,40002]},{id:46032,enchant:3605,gems:[40002,40058]},{id:45473,enchant:3832,gems:[40002,40002,40002]},{id:45869,enchant:3845,gems:[40037]},{id:46158,enchant:3604,gems:[40002]},{id:46095,gems:[40002,40002,40002]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:45564,enchant:4223,gems:[39996,39996]},{id:46048,gems:[45862]},{id:45608,gems:[39996]},{id:45931},{id:46038},{id:45613,enchant:3789,gems:[40037,42702]},{},{id:40713}]},ie={items:[{id:71488,enchant:4209,gems:[68778,52212],reforging:147},{id:71610,reforging:151},{id:71490,enchant:4204,gems:[52212],reforging:146},{id:71415,enchant:1099,gems:[52212,52212]},{id:71486,enchant:4102,gems:[52212,52212],reforging:147},{id:71428,randomSuffix:-133,enchant:4258,gems:[0],reforging:140},{id:71440,enchant:4107,gems:[52212,0],reforging:144},{id:71641,gems:[52212,52212],reforging:147},{id:71489,enchant:4126,gems:[52212,52212],reforging:139},{id:71467,enchant:4076,gems:[52212],reforging:144},{id:71216,gems:[52212],reforging:151},{id:71401,reforging:153},{id:69150},{id:69112},{id:71466,enchant:4227,reforging:146},{},{id:71567,gems:[52212]}]},ne={items:[{id:51296,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51299,enchant:3808,gems:[40117]},{id:47545,enchant:3605,gems:[40117]},{id:51298,enchant:3832,gems:[40117,40125]},{id:50670,enchant:3845,gems:[40125,0]},{id:50675,enchant:3604,gems:[40162,40117,0]},{id:50707,gems:[40117,40117,40117]},{id:51297,enchant:3823,gems:[40117,40162]},{id:50607,enchant:4223,gems:[40143,40143]},{id:50604,gems:[40143]},{id:50402,gems:[40143]},{id:50363},{id:50343},{id:50735,enchant:3789,gems:[40117,49110,40143]},{},{id:50456}]},re={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:50334}}}},{action:{catOptimalRotationAction:{manualParams:!1,maintainFaerieFire:!0,meleeWeave:!0,bearWeave:!0,snekWeave:!0}}},{action:{autocastOtherCooldowns:{}}}]},se={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:50334}}}},{action:{catOptimalRotationAction:{rotationType:"Aoe",manualParams:!1,maintainFaerieFire:!1,bearWeave:!0,snekWeave:!0}}},{action:{autocastOtherCooldowns:{}}}]},oe=n("Preraid Preset",{items:[{id:70280,enchant:4209,gems:[68778,52212],reforging:168},{id:71129,reforging:147},{id:70283,enchant:4204,gems:[52212],reforging:158},{id:69884,randomSuffix:-133,enchant:1099,reforging:147},{id:71100,enchant:4102,gems:[52212,52212],reforging:147},{id:71130,enchant:4258,gems:[0],reforging:158},{id:69942,enchant:4107,gems:[52212,0],reforging:153},{id:60231,gems:[52220,52212,52212],reforging:144},{id:71099,enchant:4126,gems:[52212,52212],reforging:168},{id:69951,enchant:4076,gems:[52212],reforging:151},{id:71209,reforging:144},{id:65367,randomSuffix:-137,reforging:146},{id:65140},{id:65026},{id:71361,enchant:4227,reforging:151},{},{id:71146,gems:[52212],reforging:144}]}),le=n("P1 Preset",ae),ge=n("P2 Preset",te),de=n("P3 Preset",ie),me=n("P4 Preset",ne),ce=r("APL Default",re);r("APL AoE",se);const pe=s("Bear-Weave",T.fromMap({[R.StatStrength]:.38,[R.StatAgility]:1,[R.StatAttackPower]:.37,[R.StatHitRating]:.36,[R.StatExpertiseRating]:.34,[R.StatCritRating]:.32,[R.StatHasteRating]:.3,[R.StatMasteryRating]:.33},{[P.PseudoStatMainHandDps]:1.54})),fe=s("Mono-Cat",T.fromMap({[R.StatStrength]:.39,[R.StatAgility]:1,[R.StatAttackPower]:.37,[R.StatHitRating]:.31,[R.StatExpertiseRating]:.31,[R.StatCritRating]:.31,[R.StatHasteRating]:.3,[R.StatMasteryRating]:.33},{[P.PseudoStatMainHandDps]:1.56})),he=A.create({rotationType:y.SingleTarget,bearWeave:!0,minCombosForRip:5,minCombosForBite:5,useRake:!0,useBite:!0,mangleSpam:!1,biteModeType:w.Emperical,biteTime:11,minRoarOffset:29,ripLeeway:1,maintainFaerieFire:!0,snekWeave:!0,manualParams:!1,biteDuringExecute:!0,allowAoeBerserk:!1,meleeWeave:!0,cancelPrimalMadness:!1}),ue=o("Single Target Default",k.SpecFeralDruid,he),Se=A.create({rotationType:y.Aoe,bearWeave:!0,maintainFaerieFire:!1,snekWeave:!0,allowAoeBerserk:!1,cancelPrimalMadness:!1}),ye=o("AoE Default",k.SpecFeralDruid,Se),be={name:"Mono-Cat",data:v.create({talentsString:"-2320322312012121202301-020301",glyphs:O.create({prime1:W.GlyphOfRip,prime2:W.GlyphOfBloodletting,prime3:W.GlyphOfBerserk,major1:F.GlyphOfThorns,major2:F.GlyphOfFeralCharge,major3:F.GlyphOfRebirth,minor1:E.GlyphOfDash,minor2:E.GlyphOfMarkOfTheWild,minor3:E.GlyphOfUnburdenedRebirth})})},we={name:"Hybrid",data:v.create({talentsString:"-2300322312310001220311-020331",glyphs:O.create({prime1:W.GlyphOfRip,prime2:W.GlyphOfBloodletting,prime3:W.GlyphOfBerserk,major1:F.GlyphOfFrenziedRegeneration,major2:F.GlyphOfMaul,major3:F.GlyphOfRebirth,minor1:E.GlyphOfDash,minor2:E.GlyphOfChallengingRoar,minor3:E.GlyphOfUnburdenedRebirth})})},Te=B.create({assumeBleedActive:!0}),Re=M.create({flask:C.FlaskOfTheWinds,food:x.FoodSkeweredEel,defaultPotion:D.PotionOfTheTolvir,prepopPotion:D.PotionOfTheTolvir,tinkerHands:G.TinkerHandsSynapseSprings,explosiveBigDaddy:!0}),Pe={distanceFromTarget:25,highHpThreshold:.8,iterationCount:25e3,profession1:H.Engineering,profession2:H.ProfessionUnknown},Ae=l(k.SpecFeralDruid,{cssClass:"feral-druid-sim-ui",cssScheme:N.getCssClass(N.Druid),knownIssues:[],warnings:[],epStats:[R.StatStrength,R.StatAgility,R.StatAttackPower,R.StatHitRating,R.StatExpertiseRating,R.StatCritRating,R.StatHasteRating,R.StatMasteryRating],epPseudoStats:[P.PseudoStatMainHandDps],epReferenceStat:R.StatAgility,displayStats:I.createDisplayStatArray([R.StatHealth,R.StatStrength,R.StatAgility,R.StatAttackPower,R.StatExpertiseRating,R.StatMasteryRating,R.StatMana],[P.PseudoStatPhysicalHitPercent,P.PseudoStatPhysicalCritPercent,P.PseudoStatMeleeHastePercent]),defaults:{gear:oe.gear,epWeights:pe.epWeights,statCaps:(()=>{const e=(new T).withPseudoStat(P.PseudoStatPhysicalHitPercent,8),a=(new T).withStat(R.StatExpertiseRating,26*$);return e.add(a)})(),other:Pe,consumes:Re,rotationType:j.TypeSimple,simpleRotation:he,talents:be.data,specOptions:Te,raidBuffs:L.create({markOfTheWild:!0,strengthOfEarthTotem:!0,abominationsMight:!0,windfuryTotem:!0,bloodlust:!0,communion:!0,arcaneBrilliance:!0,manaSpringTotem:!0}),partyBuffs:U.create({}),individualBuffs:_.create({}),debuffs:J.create({bloodFrenzy:!0})},playerIconInputs:[],rotationInputs:ee,includeBuffDebuffInputs:[g,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[Q,m,c,p,f,h]},encounterPicker:{showExecuteProportion:!0},presets:{epWeights:[pe,fe],talents:[be,we],rotations:[ue,ye],gear:[oe,le,de]},autoRotation:e=>ce.rotation.rotation,simpleRotation:(e,a,t)=>{const[i,n]=Z(t),r=z.fromJsonString('{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":50334}}}'),s=z.fromJsonString(`{"catOptimalRotationAction":{"rotationType":${a.rotationType},"manualParams":${a.manualParams},"maintainFaerieFire":${a.maintainFaerieFire},"allowAoeBerserk":${a.allowAoeBerserk},"meleeWeave":${a.meleeWeave},"bearWeave":${a.bearWeave},"snekWeave":${a.snekWeave},"minRoarOffset":${a.minRoarOffset.toFixed(2)},"ripLeeway":${a.ripLeeway.toFixed(0)},"useRake":${a.useRake},"useBite":${a.useBite},"biteDuringExecute":${a.biteDuringExecute},"biteTime":${a.biteTime.toFixed(2)},"cancelPrimalMadness":${a.cancelPrimalMadness}}}`),o=z.fromJsonString('{"autocastOtherCooldowns":{}}');return n.push(...[r,s,o].filter((e=>e))),K.create({prepullActions:i,priorityList:n.map((e=>q.create({action:e})))})},hiddenMCDs:[50334],raidSimPresets:[{spec:k.SpecFeralDruid,talents:be.data,specOptions:Te,consumes:Re,defaultFactionRaces:{[V.Unknown]:Y.RaceUnknown,[V.Alliance]:Y.RaceNightElf,[V.Horde]:Y.RaceTauren},defaultGear:{[V.Unknown]:{},[V.Alliance]:{1:le.gear,2:ge.gear,3:de.gear,4:me.gear},[V.Horde]:{1:le.gear,2:ge.gear,3:de.gear,4:me.gear}},otherDefaults:Pe}]});class ke extends u{constructor(e,a){super(e,a,Ae),a.sim.waitForInit().then((()=>{new S(this)}))}}export{ke as F};
