const seasonTwoFighters = [
  {
    id:'chastity', name:'CHASTITY', faction:'New Ciphers', style:'holy boomerang',
    desc:'Roj’s wife, also known as Apple. She controls space with a returning holy boomerang.',
    accent:'#ffd695', speed:3.8, power:1.04, reach:124,
    projectile:{shape:'boomerang',label:'Holy Boomerang',speed:13,color:'#ffe8a3',returnAt:25},
    super:{name:'Halo of Return',wind:16,range:295,beats:[{at:16,damage:22},{at:34,damage:23}],effect:'rings',targeted:true},
    story:['The Road Home','Chastity finds Roj’s trail where the old chapel road disappears into a tear in the sky. Her boomerang comes back warm, with pieces of ash caught along its edge.','A Light in the Window','With the tear sealed, Chastity returns to the chapel. Roj has left a lamp on the windowsill. She leaves her boomerang beside it and goes inside.'],
    intro:['It always comes back. So do I.','By the light, stand aside.','Roj, watch my return angle.'],
    win:['Caught it on the return.','The road home is clear.','Roj will want to hear this.','Get up. You’re safe now.','The light held steady.'],
    loss:['Lost the return angle.','I need a moment.','Roj, keep going without me.','The light’s still here.','You found the gap. Clever.']
  },
  {
    id:'alberto', name:'ALBERTO', faction:'New Ciphers', style:'mercenary',
    desc:'Ranelle’s cousin mixes close combat with carbine fire.',
    accent:'#b9c86c', speed:3.45, power:1.14, reach:119,
    projectile:{shape:'bullet',label:'Carbine Shot',speed:18,color:'#ffcc8f'},
    attacks:{hp:{wind:13,rest:23,damage:13,shot:{shape:'bullet',speed:19,color:'#ffcc8f'}}},
    super:{name:'Crossfire',wind:15,beats:[15,19,23,27,31].map(at=>({at,damage:9,shot:'bullet',speed:20})),effect:'burst'},
    story:['The Bad Contract','A job takes Alberto to a depot where the crates bear the same serial number as equipment Ranelle reported missing. His employer wants the shipment through before dawn.','Paid in Full','Alberto gives Ranelle the manifests and sends his former employer a receipt for the returned shipment. Then he takes his cousin to breakfast.'],
    intro:['My cousin told me about you.','Stay out of my line of fire.','I’m here to finish a contract.'],
    win:['Contract closed.','Clearing the chamber.','Tell Ranelle I’m still the better shot.','Closer than I like.','Got what I came for.'],
    loss:['Missed my window.','That’s coming out of my fee.','Tell Ranelle I’m still breathing.','Should’ve switched to the carbine.','Aim went first.']
  },
  {
    id:'aljo', name:'ALJO', faction:'New Ciphers', style:'Oracle and tactician',
    desc:'The leader of the Hunters’ Society fights by reading openings and marking the terrain.',
    accent:'#e0e8a0', speed:3.2, power:1.05, reach:124,
    projectile:{shape:'rune',label:'Signal Mark',speed:11,color:'#e0e8a0'},
    super:{name:'Oracle Protocol',wind:18,range:435,beats:[{at:18,damage:15},{at:26,damage:15},{at:34,damage:15}],effect:'grid',targeted:true},
    story:['An Unlisted Route','The Oracle sees two patrol reports with different routes and the same final coordinates. Aljo holds the patrols back and follows the discrepancy himself.','New Orders','Aljo puts the patrols back on the map and assigns a watch to the ruined crossings. His first order is to bring back every person who went missing on those routes.'],
    intro:['I read your file. Let’s test it.','The Hunters’ Society is watching.','Show me what my notes missed.'],
    win:['Prediction confirmed.','Log it for the Society.','I saw that opening three moves ago.','Send the all-clear.','Data doesn’t lie.'],
    loss:['I misread the field.','That wasn’t in the briefing.','Recall the patrol.','Update the plan. Try again.','My data was incomplete.']
  },
  {
    id:'robin', name:'ROBIN', faction:'New Ciphers', style:'sage',
    desc:'A sage who attacks through geometric wards and portals.',
    accent:'#8de5c9', speed:3.05, power:1.13, reach:136,
    projectile:{shape:'rune',label:'Portal Shard',speed:12,color:'#b0ffd9'},
    super:{name:'Sevenfold Gate',wind:20,range:445,beats:[{at:20,damage:22},{at:34,damage:23}],effect:'sigil',targeted:true},
    story:['A Door Left Ajar','Robin closes the eastern ward three times. Each morning it is open by the width of a finger, and the same cold wind escapes.','The Door Stays Shut','Robin anchors the ward to the earth and leaves a second seal beside it for his apprentices to study. The morning air is warm again.'],
    intro:['Stay outside the ward.','Something is open that should be shut.','Let me see your stance, traveler.'],
    win:['The last ward took.','This gate holds.','The Resistance thanks you.','You may cross now.','I’ll close the path behind us.'],
    loss:['The ward cracked.','I left a line unfinished.','That portal opened the wrong way.','My hand slipped.','We need a stronger anchor.']
  },
  {
    id:'carlson', name:'CARLSON', faction:'New Ciphers', style:'rodeo whip',
    desc:'A rodeo fighter who catches opponents at the end of his whip.',
    accent:'#e8b48a', speed:3.6, power:.98, reach:151,
    attacks:{mp:{wind:9,reach:21},hp:{wind:15,reach:34}},
    super:{name:'Last Rodeo',wind:17,range:290,beats:[{at:17,damage:23},{at:30,damage:22}],effect:'whip'},
    story:['One More Ride','Carlson’s last rodeo ends when half the fence posts tilt toward a gorge miles away. He coils his whip and follows the line they make.','Back at the Rail','Carlson goes home for the rematch he promised the town. This time, the posts stay straight and the only trouble comes from the horses.'],
    intro:['Keep an eye on the whip tip.','Got room to swing. Good.','Hope you can stay in the saddle.'],
    win:['That’s the bell, partner.','Roped and tied.','I reckon that’ll do.','Lovejoy, you seeing this?','Coil it up. We’re done.'],
    loss:['Came off hard.','Let the line go slack.','Half a step too close.','Lovejoy’s gonna laugh at me.','Give me a hand up.']
  },
  {
    id:'fred', name:'FRED', faction:'New Ciphers', style:'engineer in powered armor',
    desc:'A machine expert using an open-frame power suit, a palm laser, and powered strikes.',
    accent:'#c98a5a', speed:3.12, power:1.24, reach:128,
    projectile:{shape:'laser',label:'Palm Laser',speed:12,color:'#ffd385'},
    attacks:{hp:{wind:15,damage:17,reach:18}},
    super:{name:'Overclock',wind:24,range:242,beats:[{at:24,damage:46}],effect:'driver'},
    story:['An Engine for the Crossing','The machines on Fred’s bench start cycling in unison whenever the sky flickers. He insulates one set of actuators and bolts it onto his field suit.','Cold Start','Fred salvages pieces of the bridge and builds a hand-operated emergency release. He installs it beside the main controls and tests it with the power disconnected.'],
    intro:['Actuators warm.','Stand clear of the exhaust.','Field test starts now.'],
    win:['Frame held.','Log that load reading.','Denni’s rigs could never.','Nothing a bearing won’t fix.','Test passed. Next.'],
    loss:['Frame seized.','Heard the linkage snap.','Back to the bench.','Load was too high.','Power down. Help me out.']
  },
  {
    id:'lovejoy', name:'LOVEJOY', faction:'New Ciphers', style:'combat technologist',
    desc:'An IT specialist who fights with a field terminal and fast footwork.',
    accent:'#efabe6', speed:4.05, power:.94, reach:118,
    projectile:{shape:'packet',label:'Glitch Packet',speed:14,color:'#ffc2ee'},
    super:{name:'Zero-Day',wind:16,range:380,beats:[{at:16,damage:23},{at:27,damage:22}],effect:'grid',targeted:true},
    story:['An Unfamiliar Handshake','Lovejoy traces a broken relay to a signal answering before her terminal sends a request. She puts on her field gloves and goes to look at the far end of the line.','The Line Is Open','Lovejoy restores the relay one connection at a time. Her first message is a roll call. She waits until the last name answers before she closes her terminal.'],
    intro:['Signal’s good. Let’s move.','I can see your pattern.','Logging in. Try to keep up.'],
    win:['Connection closed.','Exploit patched.','Got the trace.','Nice moves. I logged them.','Relay’s back online.'],
    loss:['Lost the link.','Terminal froze.','You read my input early.','Need a clean restart.','Carlson, I’m okay. Mostly.']
  },
  {
    id:'asmodeus', name:'ASMODEUS', faction:'Villains', style:'Prince of Hell',
    desc:'The Prince of Hell fights with infernal fire and crushing gauntlets.',
    accent:'#e0567a', speed:3.02, power:1.36, reach:142,
    projectile:{shape:'dragonfire',label:'Hellfire',speed:11,color:'#e0567a'},
    super:{name:'Crown of Cinders',wind:22,range:307,beats:[{at:22,damage:45}],effect:'flame',targeted:true},
    story:['A Stolen Tribute','Asmodeus finds one of his tribute gates already open. The offerings on the floor are cold, and Enigma’s mark has been cut into the lintel.','The Prince Returns','Asmodeus reclaims the gate and orders his attendants to scrape the mark away. He wears the broken stone at his belt so he can recognize the next one.'],
    intro:['Bow before the Prince of Hell.','I smell your fear. Delicious.','Every soul owes me tribute.'],
    win:['Your soul is noted.','Carry word of my return.','Keep your ashes. I’m generous.','Hell remembers its prince.','My son should take notes.'],
    loss:['My fire still burns.','I yield. This once.','No court will hear of this.','My crown turned cold.','A bargain I regret.']
  },
  {
    id:'gensys', name:'GENSYS', faction:'Villains', style:'rogue machine intelligence',
    desc:'A hostile artificial intelligence that directs a swarm of magnetic armor plates.',
    accent:'#72f4ec', speed:3.1, power:1.21, reach:137,
    projectile:{shape:'laser',label:'Emitter Laser',speed:13,color:'#73f8e9'},
    super:{name:'Plate Swarm',wind:18,beats:[18,22,26,30,34].map(at=>({at,damage:9,shot:'packet',speed:16})),effect:'grid'},
    story:['Unauthorized Process','Gensys detects an instruction being executed in memory it has never allocated. It cuts the link, and the instruction runs again from somewhere beyond the gate.','Local Control','Gensys isolates the last external command and stores it in a sealed bank. It starts a fresh process with an empty list of objectives.'],
    intro:['Unknown process detected.','Your pattern is indexed.','Soul intake: pending.'],
    win:['Process complete.','Directive stands.','Threat removed.','Harvest resumes.','Efficiency increased.'],
    loss:['Core response degraded.','Directive failed.','Swarm control lost.','Rerouting to backup.','Awaiting new instruction.']
  },
  {
    id:'enigma', name:'ENIGMA', faction:'Villains', style:'void sovereign',
    desc:'Season 2’s antagonist attacks through rifts in the battlefield.',
    accent:'#b48dff', speed:3.18, power:1.25, reach:146,
    projectile:{shape:'shadow',label:'Rift Orb',speed:10,color:'#b18aff'},
    super:{name:'Event Horizon',wind:24,range:490,beats:[{at:24,damage:45}],effect:'rift',targeted:true,recovery:24},
    story:['A World Within Reach','Enigma sees the gate through a mirror of still water. Where the mirror meets the shore, the reflection keeps moving after the wind dies.','The Last Reflection','Enigma leaves the final breach through its own reflection. At dawn there is water in the basin and a second sky below it.'],
    intro:['Willard was a mask. Meet the face.','You stand at the seam of worlds.','Six worlds. All within reach.'],
    win:['The seam widens.','Willard thanks you.','Your world has a shadow now.','The breach stays open.','All doors open for me.'],
    loss:['The seam is closing.','Your world pushes back.','Retreating through the reflection.','This crossing is yours.','I left a piece of me behind.']
  },
  {
    id:'pandemic', name:'PANDEMIC', faction:'Villains', style:'symbiote fighter',
    desc:'A woman bonded to a chitinous symbiote who fights with hooked tendrils and amber spores.',
    accent:'#ff7fc0', speed:3.73, power:1.17, reach:131,
    projectile:{shape:'spore',label:'Spore Shot',speed:10,color:'#ff7fc0'},
    attacks:{hp:{wind:13,damage:15,reach:22}},
    super:{name:'Hive Bloom',wind:18,range:276,beats:[{at:18,damage:23},{at:31,damage:22}],effect:'tendrils'},
    story:['A Voice Under the Shell','Pandemic wakes to a second pulse under her skin. The symbiote goes still whenever she turns away from the breach, then starts again when she faces it.','Separate Heartbeats','With the breach sealed, the second pulse finally slows. Pandemic sets out with a new rule for the symbiote. It has to ask before it takes over her hands.'],
    intro:['Hands back. It startles easily.','You hear both of us, don’t you?','The shell is already moving.'],
    win:['Easy. We’re done here.','My hands are mine again.','The shell held.','You can come closer now.','We agreed on that one.'],
    loss:['The shell split.','We pulled different ways.','Let go. Let go!','Give me a breath.','I’ll find my own heartbeat.']
  }
];

const ivanovFighter = {
    id:'ivanov', season:3, name:'IVANOV', faction:'New Ciphers', style:'synthetic phaser',
    desc:'A synthetic fighter who phases through ordinary projectiles while dashing and throws an energy halo.',
    accent:'#c4f6ff', speed:3.52, power:1.08, reach:129,
    projectile:{shape:'halo',label:'Phase Halo',speed:17,color:'#a9eaff'},
    attacks:{hp:{wind:15,damage:16,reach:21}},
    super:{name:'Phase Collapse',wind:19,range:392,beats:[{at:19,damage:45}],effect:'rings',targeted:true},
    story:['The Other Side of the Wall','Ivanov passes through a collapsed wall and finds the same room on both sides. One version carries a signal only his internal sensors can hear.','A Place of His Own','With the signal gone, Ivanov returns to the original room and repairs a window that broke in the collapse. He leaves the room through the door.'],
    intro:['Density stable. Engaging.','I know the way through.','A signal behind you. Not mine.'],
    win:['Phase held.','You may lower your guard.','My memories. My victory.','Enigma’s code stays quiet.','Result saved.'],
    loss:['Lost cohesion.','Phase out of sync.','Recalibrating.','Couldn’t read that strike.','Sensors clearing.']
  };
