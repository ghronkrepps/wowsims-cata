import{l as e,n as a,o as s,q as l,L as t,s as n,t as r,N as o,O as p,v as d,G as i,w as c,J as u,K as I}from"./preset_utils-Dv9lejVC.chunk.js";import{R as h}from"./suggest_reforges_action-BK2_hU8B.chunk.js";import{a4 as v,a5 as m,a6 as g,an as S,ao as f,a7 as O,G as A,a8 as R,a9 as T,aa as y,ap as P,b as G,ac as C,ad as w,ae as L,af as H,ag as E,aq as q,ar as k,as as F,a as D,ah as x,at as B,au as b,ai as W,aj as M,ak as U,al as K,am as j,S as V,F as z,R as N}from"./detailed_results-LT4I5IXe.chunk.js";import{S as Y}from"./inputs-yReZPPqw.chunk.js";const _={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48265}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{spellId:57330}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"3.5s"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"3.5s"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"3.5s"}}}},{cmp:{op:"OpLe",lhs:{currentRunicPower:{}},rhs:{const:{val:"30"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:47568}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneBlood"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:45529}}}},{action:{castSpell:{spellId:{spellId:51271}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{itemId:62469}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{itemId:62464}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{or:{vals:[{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{and:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}}]}},{and:{vals:[{not:{val:{auraIsKnown:{auraId:{itemId:62469}}}}},{not:{val:{auraIsKnown:{auraId:{itemId:62464}}}}}]}}]}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},{auraIsActive:{auraId:{spellId:53365}}}]}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{auraId:{spellId:53365}}}]}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{auraIsActive:{auraId:{itemId:58146}}},{or:{vals:[{auraIsActive:{auraId:{itemId:62469}}},{auraIsActive:{auraId:{itemId:62464}}},{and:{vals:[{not:{val:{auraIsKnown:{auraId:{itemId:62469}}}}},{not:{val:{auraIsKnown:{auraId:{itemId:62464}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}},{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}}]}}]}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:92342}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:91821}}},rhs:{const:{val:"1s"}}}}]}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:92342}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:91821}}},rhs:{const:{val:"1s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{spellId:77575}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"100"}}}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},castSpell:{spellId:{spellId:45462,tag:1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59052}}},castSpell:{spellId:{spellId:49184}}}},{action:{castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{spellIsReady:{spellId:{spellId:46584}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{auraIsActive:{auraId:{itemId:58146}}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:57330}}}}]},J={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48265}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{spellId:57330}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"3.5s"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"3.5s"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"3.5s"}}}},{cmp:{op:"OpLe",lhs:{currentRunicPower:{}},rhs:{const:{val:"30"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:47568}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneBlood"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:45529}}}},{action:{condition:{spellIsReady:{spellId:{spellId:51271}}},castSpell:{spellId:{spellId:51271}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{itemId:62469}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{itemId:62464}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{or:{vals:[{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{and:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:91821}}},{auraIsActive:{auraId:{spellId:92342}}}]}}]}},{not:{val:{auraIsKnown:{auraId:{itemId:62469}}}}},{not:{val:{auraIsKnown:{auraId:{itemId:62464}}}}}]}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},{auraIsActive:{auraId:{spellId:53365}}}]}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{auraId:{spellId:53365}}}]}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{auraIsActive:{auraId:{itemId:58146}}},{or:{vals:[{auraIsActive:{auraId:{itemId:62469}}},{auraIsActive:{auraId:{itemId:62464}}},{and:{vals:[{not:{val:{auraIsKnown:{auraId:{itemId:62469}}}}},{not:{val:{auraIsKnown:{auraId:{itemId:62464}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}},{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}}]}}]}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:92342}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:91821}}},rhs:{const:{val:"1s"}}}}]}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:92342}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:91821}}},rhs:{const:{val:"1s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{condition:{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}}]}}]}},castSpell:{spellId:{spellId:77575}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"100"}}}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:45477}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},castSpell:{spellId:{spellId:45462,tag:1}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59052}}},castSpell:{spellId:{spellId:49184}}}},{action:{castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{spellIsReady:{spellId:{spellId:46584}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{auraIsActive:{auraId:{itemId:58146}}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{castSpell:{spellId:{spellId:57330}}}}]},Q={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48265}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:57330}}},doAtValue:{const:{val:"-7s"}}},{action:{castSpell:{spellId:{spellId:42650}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{nextRuneCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpLe",lhs:{currentRunicPower:{}},rhs:{const:{val:"30"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:47568}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"5.5s"}}}}]}},castSpell:{spellId:{spellId:45529}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:51271}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:46584}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"180s"}}}},{not:{val:{spellIsReady:{spellId:{spellId:46584}}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"85s"}}}}]}},castSpell:{spellId:{spellId:51271}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"180s"}}}},{spellIsReady:{spellId:{spellId:46584}}},{spellIsReady:{spellId:{itemId:58146}}},{auraIsActive:{auraId:{spellId:53365}}},{or:{vals:[{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{or:{vals:[{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}},{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"85s"}}}}]}},{spellIsReady:{spellId:{spellId:26297}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:51271}}},{castSpell:{spellId:{itemId:58146}}},{castSpell:{spellId:{spellId:26297}}},{castSpell:{spellId:{spellId:46584}}}]}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"75"}}}},{auraIsActive:{auraId:{spellId:51271}}},{auraIsActive:{auraId:{spellId:53365}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:58146}}},{castSpell:{spellId:{spellId:46584}}}]}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:51271}}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"170s"}}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}},{auraIsActive:{auraId:{spellId:96928}}},{auraIsActive:{auraId:{spellId:96927}}},{auraIsActive:{auraId:{spellId:96929}}}]}}]}}]}},castSpell:{spellId:{spellId:51271}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{spellId:74497}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{itemId:69002}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{itemId:69113}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{itemId:68972}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{itemId:62469}}}},{action:{condition:{auraIsActive:{auraId:{spellId:51271}}},castSpell:{spellId:{itemId:62464}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsKnown:{auraId:{itemId:62469}}}}},{not:{val:{auraIsKnown:{auraId:{itemId:62464}}}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{and:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}},{or:{vals:[{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}}]}}]}}]}}]}},castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}}]}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}}]}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"170s"}}}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"170s"}}}}]}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51271}}},{or:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:92342}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:91821}}},rhs:{const:{val:"3s"}}}}]}}]}},{or:{vals:[{auraIsActive:{auraId:{itemId:62469}}},{auraIsActive:{auraId:{itemId:62464}}},{and:{vals:[{not:{val:{auraIsKnown:{auraId:{itemId:62469}}}}},{not:{val:{auraIsKnown:{auraId:{itemId:62464}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}},{auraIsActive:{auraId:{spellId:92342}}},{auraIsActive:{auraId:{spellId:91821}}}]}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"3s"}}}}]}}]}}]}},{auraIsActive:{auraId:{itemId:58146}}},{or:{vals:[{auraIsActive:{auraId:{spellId:91364}}},{auraIsActive:{auraId:{spellId:91363}}},{auraIsActive:{auraId:{spellId:92345}}},{auraIsActive:{auraId:{spellId:91816}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:51271}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:92342}}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:91821}}},rhs:{const:{val:"3s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:46584}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:53365}}},{auraIsActive:{auraId:{spellId:51271}}},{spellIsReady:{spellId:{spellId:46584}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:58146}}},{castSpell:{spellId:{spellId:46584}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{auraId:{spellId:51124}}},{cmp:{op:"OpLt",lhs:{auraNumStacks:{auraId:{spellId:96923}}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"105"}}}}]}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:77575}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:55078}}},rhs:{const:{val:"3s"}}}},{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}}]}}]}},castSpell:{spellId:{spellId:77575}}}},{action:{condition:{auraIsActive:{auraId:{spellId:59052}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:55095}}}}},castSpell:{spellId:{spellId:49184}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRunicPower:{}},rhs:{const:{val:"100"}}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}}]}},{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:55078}}}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"2"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpLe",lhs:{nextRuneCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"1s"}}}}]}}]}},{not:{val:{auraIsActive:{auraId:{spellId:51124}}}}}]}},castSpell:{spellId:{spellId:45462,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentRunicPower:{}},rhs:{const:{val:"90"}}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"2"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpLe",lhs:{nextRuneCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"1s"}}}}]}}]}},{or:{vals:[{dotIsActive:{spellId:{spellId:55078}}},{dotIsActive:{spellId:{spellId:98957}}}]}}]}},castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:51124}}},{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}},{or:{vals:[{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"1"}}}}]}},{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}}]}}]}}]}},castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{condition:{and:{vals:[{or:{vals:[{and:{vals:[{cmp:{op:"OpLe",lhs:{currentRunicPower:{}},rhs:{const:{val:"90"}}}},{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"2s"}}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"2"}}}},{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"1"}}}}]}},{or:{vals:[{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"1s"}}}}]}}]}}]}},{and:{vals:[{cmp:{op:"OpLe",lhs:{currentRunicPower:{}},rhs:{const:{val:"70"}}}},{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneUnholy"}},rhs:{const:{val:"3s"}}}},{or:{vals:[{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"1"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"2"}}}}]}},{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"1"}}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"2s"}}}}]}}]}},{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpLt",lhs:{runeCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"2s"}}}}]}}]}}]}}]}}]}},{or:{vals:[{dotIsActive:{spellId:{spellId:55078}}},{dotIsActive:{spellId:{spellId:98957}}}]}},{auraIsActive:{auraId:{spellId:51124}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:49020,tag:1}}}},{action:{castSpell:{spellId:{spellId:49184}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:57330}}}}},{not:{val:{auraIsActive:{auraId:{spellId:98971}}}}}]}},castSpell:{spellId:{spellId:57330}}}},{action:{castSpell:{spellId:{spellId:49143,tag:1}}}},{action:{castSpell:{spellId:{spellId:57330}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneFrost"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpEq",lhs:{currentRuneCount:{runeType:"RuneDeath"}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpGe",lhs:{currentRuneCount:{runeType:"RuneUnholy"}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneFrost"}},rhs:{const:{val:"2.5s"}}}},{cmp:{op:"OpGt",lhs:{runeCooldown:{runeType:"RuneBlood"}},rhs:{const:{val:"2.5s"}}}},{spellIsReady:{spellId:{spellId:47568}}}]}},castSpell:{spellId:{spellId:45462,tag:1}}}}]},X={items:[{id:65130,enchant:4208,gems:[68779,52213],reforging:146},{id:65025,reforging:167},{id:65183,enchant:4202,gems:[52255],reforging:140},{id:65117,enchant:4100,reforging:147},{id:65179,enchant:4102,gems:[52255,52213],reforging:146},{id:65085,enchant:4256,gems:[0],reforging:140},{id:65180,enchant:4106,gems:[52235,0]},{id:65040,gems:[52206,52206],reforging:145},{id:65182,enchant:4126,gems:[52255,52206],reforging:167},{id:65075,gems:[52206],reforging:167},{id:65106},{id:60226,gems:[52214],reforging:167},{id:65072,reforging:160},{id:65118},{id:65003,enchant:3368,reforging:138},{},{id:64674,gems:[52206],reforging:145}]},Z={items:[{id:65181,enchant:4208,gems:[68779,52214],reforging:161},{id:69885,randomSuffix:-118,reforging:151},{id:65183,enchant:4202,gems:[52255],reforging:154},{id:69879,randomSuffix:-118,enchant:4100,reforging:151},{id:65179,enchant:4102,gems:[52255,52213],reforging:147},{id:60228,enchant:4256,gems:[52206,0],reforging:147},{id:65180,enchant:4106,gems:[52206,0],reforging:151},{id:65369,randomSuffix:-223,gems:[52206,52206],reforging:151},{id:65379,randomSuffix:-176,enchant:4126,gems:[52255,52213],reforging:151},{id:65075,enchant:4069,gems:[52213],reforging:158},{id:60226,gems:[52206],reforging:144},{id:65382,randomSuffix:-118,reforging:151},{id:62469},{id:65072,reforging:161},{id:68131,randomSuffix:-118,enchant:3370,reforging:151},{id:65047,enchant:3368,reforging:147},{id:64674,gems:[52206],reforging:161}]},$={items:[{id:71478,enchant:4208,gems:[68779,52206],reforging:140},{id:71446,reforging:147},{id:71480,enchant:4202,gems:[52255],reforging:151},{id:69879,randomSuffix:-118,enchant:4100,reforging:151},{id:71469,enchant:4102,gems:[52255,52213],reforging:151},{id:71418,enchant:4256,gems:[0],reforging:147},{id:71482,enchant:4106,gems:[52206,0],reforging:124},{id:65369,randomSuffix:-223,gems:[52206,52206]},{id:71484,enchant:4126,gems:[52255,52206],reforging:131},{id:71404,enchant:4094,gems:[52206],reforging:147},{id:71215,gems:[52206],reforging:147},{id:71433,gems:[52206],reforging:161},{id:69113},{id:65072,reforging:161},{id:71562,enchant:3370,reforging:138},{id:71562,enchant:3368,reforging:138},{id:71587,gems:[52206],reforging:147}]},ee={items:[{id:60341,enchant:4208,gems:[68779,52214],reforging:161},{id:69885,randomSuffix:-118},{id:60343,enchant:4202,gems:[52255],reforging:154},{id:69879,randomSuffix:-118,enchant:4100},{id:71058,enchant:4102,gems:[52255,52206],reforging:145},{id:60228,enchant:4256,gems:[52206,0],reforging:147},{id:69936,enchant:4106,gems:[52206,0],reforging:147},{id:65369,randomSuffix:-223,gems:[52206,52206]},{id:71061,enchant:4126,gems:[52255,52213],reforging:161},{id:69946,enchant:4094,gems:[52206],reforging:147},{id:65382,randomSuffix:-118,reforging:151},{id:60226,gems:[52206],reforging:144},{id:68972},{id:65072,reforging:161},{id:71362,enchant:3370},{id:71362,enchant:3368,reforging:138},{id:71147,gems:[52206],reforging:147}]},ae={onLoad:e=>{t([{condition:e=>e.getEquippedItem(k.ItemSlotMainHand)?.item.handType===F.HandTypeTwoHand,message:"Check your gear: You have a two-handed weapon equipped, but the selected option is for dual wield."},{condition:e=>!e.getTalents().threatOfThassarian,message:"Check your talents: You have selected a dual-wield spec but don't have [Threat Of Thassarian] talented."}],e)}},se={onLoad:e=>{t([{condition:e=>e.getEquippedItem(k.ItemSlotMainHand)?.item.handType===F.HandTypeOneHand,message:"Check your gear: You have a one-handed weapon equipped, but the selected option is for dual wield"},{condition:e=>!e.getTalents().mightOfTheFrozenWastes,message:"Check your talents: You have selected a two-handed spec but don't have [Might of the Frozen Wastes] talented"}],e)}},le=e("P1 DW Obliterate",{items:[{id:65181,enchant:4208,gems:[68779,52214],reforging:158},{id:69885,randomSuffix:-122,reforging:144},{id:65183,enchant:4202,gems:[52255],reforging:140},{id:65117,enchant:4100,reforging:147},{id:65179,enchant:4102,gems:[52255,52213],reforging:147},{id:65085,enchant:4256,gems:[0],reforging:140},{id:65180,gems:[52213,0],reforging:165},{id:65369,randomSuffix:-222,gems:[52214,52206],reforging:147},{id:65379,randomSuffix:-175,enchant:4126,gems:[52255,52213],reforging:144},{id:65075,gems:[52206],reforging:160},{id:60226,gems:[52214],reforging:167},{id:65382,randomSuffix:-122,reforging:147},{id:58180,reforging:138},{id:65072,reforging:160},{id:65047,enchant:3370,reforging:144},{id:65047,enchant:3368,reforging:144},{id:64674,gems:[52206],reforging:160}]},ae),te=e("P1 Two Hand",X,se),ne=e("P1 Masterfrost",Z,ae),re=e("P3 Masterfrost",$,ae),oe=e("Pre-bis Masterfrost",ee,ae),pe=a("DW Obliterate",J,ae),de=a("Two Hand",_,se),ie=a("Masterfrost",Q,ae),ce=s("P1 DW Obliterate",v.fromMap({[m.StatStrength]:2.92,[m.StatArmor]:.03,[m.StatAttackPower]:1,[m.StatExpertiseRating]:.56,[m.StatHasteRating]:1.3,[m.StatHitRating]:1.22,[m.StatCritRating]:1.06,[m.StatMasteryRating]:1.11},{[g.PseudoStatMainHandDps]:6.05,[g.PseudoStatOffHandDps]:3.85,[g.PseudoStatPhysicalHitPercent]:146.53,[g.PseudoStatSpellHitPercent]:41.91}),ae),ue=s("P1 Two Hand",v.fromMap({[m.StatStrength]:2.98,[m.StatArmor]:.03,[m.StatAttackPower]:1,[m.StatExpertiseRating]:1.34,[m.StatHasteRating]:1.94,[m.StatHitRating]:1.61,[m.StatCritRating]:1.24,[m.StatMasteryRating]:1.26},{[g.PseudoStatMainHandDps]:10.08,[g.PseudoStatOffHandDps]:0,[g.PseudoStatPhysicalHitPercent]:1.61*S,[g.PseudoStatSpellHitPercent]:0}),se),Ie=s("P1 Masterfrost",v.fromMap({[m.StatStrength]:2.86,[m.StatArmor]:.03,[m.StatAttackPower]:1,[m.StatExpertiseRating]:.75,[m.StatHasteRating]:1.38,[m.StatHitRating]:3.07,[m.StatCritRating]:1.07,[m.StatMasteryRating]:1.41},{[g.PseudoStatMainHandDps]:4.5,[g.PseudoStatOffHandDps]:2.84,[g.PseudoStatPhysicalHitPercent]:1.67*S,[g.PseudoStatSpellHitPercent]:1.4*f}),ae),he={name:"DW Obliterate",data:O.create({talentsString:"2032-20330022233112012301-003",glyphs:A.create({prime1:R.GlyphOfFrostStrike,prime2:R.GlyphOfObliterate,prime3:R.GlyphOfHowlingBlast,major1:T.GlyphOfPestilence,major2:T.GlyphOfBloodBoil,major3:T.GlyphOfDarkSuccor,minor1:y.GlyphOfDeathGate,minor2:y.GlyphOfPathOfFrost,minor3:y.GlyphOfHornOfWinter})}),...ae},ve={name:"Two Hand",data:O.create({talentsString:"103-32030022233112012031-033",glyphs:A.create({prime1:R.GlyphOfFrostStrike,prime2:R.GlyphOfObliterate,prime3:R.GlyphOfHowlingBlast,major1:T.GlyphOfPestilence,major2:T.GlyphOfBloodBoil,major3:T.GlyphOfDarkSuccor,minor1:y.GlyphOfDeathGate,minor2:y.GlyphOfPathOfFrost,minor3:y.GlyphOfHornOfWinter})}),...se},me={name:"Masterfrost",data:O.create({talentsString:"2032-20330022233112012301-03",glyphs:A.create({prime1:R.GlyphOfFrostStrike,prime2:R.GlyphOfObliterate,prime3:R.GlyphOfHowlingBlast,major1:T.GlyphOfPestilence,major2:T.GlyphOfBloodBoil,major3:T.GlyphOfDarkSuccor,minor1:y.GlyphOfDeathGate,minor2:y.GlyphOfPathOfFrost,minor3:y.GlyphOfHornOfWinter})}),...ae},ge=P.create({classOptions:{startingRunicPower:0,petUptime:1}}),Se={profession1:G.Engineering,profession2:G.Jewelcrafting,distanceFromTarget:5},fe=C.create({flask:w.FlaskOfTitanicStrength,food:L.FoodBeerBasedCrocolisk,defaultPotion:H.GolembloodPotion,prepopPotion:H.GolembloodPotion,tinkerHands:E.TinkerHandsSynapseSprings}),Oe=l("DW Obliterate",{gear:le,talents:he,rotationType:q.TypeAuto,epWeights:ce}),Ae=l("Two Hand",{gear:te,talents:ve,rotationType:q.TypeAuto,epWeights:ue}),Re=l("Masterfrost",{gear:re,talents:me,rotationType:q.TypeAuto,epWeights:Ie}),Te=l("Pre-bis",{gear:oe,talents:me,rotationType:q.TypeAuto,epWeights:Ie}),ye=n(V.SpecFrostDeathKnight,{cssClass:"frost-death-knight-sim-ui",cssScheme:D.getCssClass(D.DeathKnight),knownIssues:[],epStats:[m.StatStrength,m.StatArmor,m.StatAttackPower,m.StatExpertiseRating,m.StatHitRating,m.StatCritRating,m.StatHasteRating,m.StatMasteryRating],epPseudoStats:[g.PseudoStatMainHandDps,g.PseudoStatOffHandDps,g.PseudoStatPhysicalHitPercent,g.PseudoStatSpellHitPercent],epReferenceStat:m.StatAttackPower,displayStats:x.createDisplayStatArray([m.StatHealth,m.StatArmor,m.StatStrength,m.StatAttackPower,m.StatMasteryRating,m.StatExpertiseRating],[g.PseudoStatSpellHitPercent,g.PseudoStatSpellCritPercent,g.PseudoStatPhysicalHitPercent,g.PseudoStatPhysicalCritPercent,g.PseudoStatMeleeHastePercent]),defaults:{gear:re.gear,epWeights:Ie.epWeights,statCaps:new v,softCapBreakpoints:[B.fromPseudoStat(g.PseudoStatPhysicalHitPercent,{breakpoints:[8,27],capType:b.TypeSoftCap,postCapEPs:[1*S,0]}),B.fromPseudoStat(g.PseudoStatSpellHitPercent,{breakpoints:[16.95],capType:b.TypeSoftCap,postCapEPs:[0]}),B.fromStat(m.StatExpertiseRating,{breakpoints:[26*W],capType:b.TypeSoftCap,postCapEPs:[0]})],other:Se,consumes:fe,talents:me.data,specOptions:ge,raidBuffs:M.create({devotionAura:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,leaderOfThePack:!0,powerWordFortitude:!0,hornOfWinter:!0,abominationsMight:!0,arcaneTactics:!0}),partyBuffs:U.create({heroicPresence:!1}),individualBuffs:K.create({}),debuffs:j.create({sunderArmor:!0,brittleBones:!0,ebonPlaguebringer:!0,shadowAndFlame:!0})},autoRotation:e=>{const a=e.getTalents();return a.mightOfTheFrozenWastes>0?de.rotation.rotation:a.epidemic>0?pe.rotation.rotation:ie.rotation.rotation},playerIconInputs:[],petConsumeInputs:[],includeBuffDebuffInputs:[r],excludeBuffDebuffInputs:[o,p,d],otherInputs:{inputs:[Y(),i,c,u]},itemSwapSlots:[k.ItemSlotMainHand,k.ItemSlotOffHand],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[Ie,ue,ce],talents:[he,ve,me],rotations:[pe,de,ie],gear:[le,te,oe,ne,re],builds:[Te,Oe,Ae,Re]},raidSimPresets:[{spec:V.SpecFrostDeathKnight,talents:me.data,specOptions:ge,consumes:fe,defaultFactionRaces:{[z.Unknown]:N.RaceUnknown,[z.Alliance]:N.RaceHuman,[z.Horde]:N.RaceTroll},defaultGear:{[z.Unknown]:{},[z.Alliance]:{1:ne.gear,2:ne.gear,3:re.gear,4:re.gear},[z.Horde]:{1:ne.gear,2:ne.gear,3:re.gear,4:re.gear}},otherDefaults:Se}]});class Pe extends I{constructor(e,a){super(e,a,ye),a.sim.waitForInit().then((()=>{new h(this,{updateSoftCaps:e=>{if(a.getTalents().mightOfTheFrozenWastes>0){const a=e.find((e=>e.unitStat.equalsPseudoStat(g.PseudoStatPhysicalHitPercent)));a&&(a.breakpoints=[8],a.postCapEPs=[0]);const s=e.findIndex((e=>e.unitStat.equalsPseudoStat(g.PseudoStatSpellHitPercent)));s>-1&&e.splice(s,1)}return e},getEPDefaults:e=>{const a=e.getTalents();return a.mightOfTheFrozenWastes>0?ue.epWeights:a.epidemic>0?ce.epWeights:Ie.epWeights}})}))}}export{Pe as F};