const newChallengers = [
  {
    id:'juster',name:'JUSTER',season:1,style:'red court brawler',faction:'Tyrone’s Court',
    desc:'Tyrone’s sinister red clown fights close, then drives rivals back with bursts of cinder.',
    accent:'#ff646c',artHeight:196,speed:3.7,power:1.09,reach:120,
    projectile:{shape:'star',label:'Cinder Juggle',speed:12,color:'#ff646c'},
    skills:[
      {name:'Crimson Curtain',wind:18,range:222,effect:'rift',targeted:true,beats:[{at:18,damage:15},{at:25,damage:15},{at:32,damage:17}]},
      {name:'Final Encore',wind:23,effect:'rings',beats:[{at:23,damage:22,shot:'star',speed:13},{at:32,damage:23,shot:'star',speed:16}]}
    ],
    intro:['Tyrone gave me the stage tonight.','Hold your applause till the curtain falls.','Jester said you’d try this door.'],
    win:['On to the second act!','The court laughs at you.','Take a bow. Lower.','Tyrone loves a captive audience.','Jester! Another guest!'],
    loss:['There goes my finale.','Missed my cue.','Tell Tyrone I held the door.','Jester will never let me live this down.','Fine. The house is yours.']
  },
  {
    id:'jester',name:'JESTER',season:1,style:'blue court trickster',faction:'Tyrone’s Court',
    desc:'Tyrone’s sinister blue clown fights with quick kicks, feints, and icy bells.',
    accent:'#77b9ff',artHeight:196,speed:4.24,power:.99,reach:121,
    projectile:{shape:'halo',label:'Silver Bell',speed:13,color:'#77b9ff'},
    skills:[
      {name:'Blue Bell Toll',wind:17,range:230,effect:'rings',targeted:true,beats:[{at:17,damage:20},{at:27,damage:26}]},
      {name:'Cold Open',wind:20,effect:'sigil',magic:true,beats:[{at:20,damage:20,shot:'halo',speed:13},{at:28,damage:25,shot:'halo',speed:16}]}
    ],
    intro:['Juster keeps the door. I keep the road.','Which bell did you hear first?','Tyrone said someone would try the pass.'],
    win:['You followed the loudest bell.','The road belongs to the court tonight.','The trick was the second step.','Ding! Wrong way.','Juster will love this story.'],
    loss:['The last bell was yours.','Should’ve let you pass.','Tyrone is past the fog anyway.','Don’t follow the next bell.','Tell Juster I dropped the signal.']
  },
  {
    id:'berico',name:'BERICO',season:4,style:'Genesis spawn bruiser',faction:'The Couple',
    desc:'A demonic cult leader and one half of the Couple. A heavy striker who can wrench open a Genesis breach.',
    accent:'#e86f3a',artHeight:196,speed:3.15,power:1.23,reach:133,
    projectile:{shape:'wave',label:'Breach Wave',speed:10,color:'#e86f3a'},
    skills:[
      {name:'Breach Fault',wind:20,range:237,effect:'rift',targeted:true,beats:[{at:20,damage:20},{at:31,damage:27}]},
      {name:'Sundering Charge',wind:23,effect:'driver',beats:[{at:23,damage:45,shot:'wave',speed:12}]}
    ],
    intro:['Oliquino, watch the crossing.','Where is our child?','I’ve followed this signal since Ifrit.'],
    win:['The gate is open. We go through.','I can still feel the trail.','Oliquino, this way.','Answer me when the breach settles.','Our child is close.'],
    loss:['The signal’s slipping again.','Oliquino, take my hand.','Tell me you heard the child too.','I can’t hold the breach.','The crossing won’t wait.']
  },
  {
    id:'oliquino',name:'OLIQUINO',season:4,style:'Genesis spawn seer',faction:'The Couple',
    desc:'A demonic cult leader and one half of the Couple. She tracks lost signals and binds a rival with Genesis energy.',
    accent:'#c6e89a',speed:3.78,power:1.04,reach:124,
    projectile:{shape:'rune',label:'Thread Mark',speed:12,color:'#c6e89a'},
    skills:[
      {name:'Lost Thread',wind:19,range:246,effect:'sigil',magic:true,targeted:true,beats:[{at:19,damage:16},{at:27,damage:15},{at:34,damage:15}]},
      {name:'Distant Lullaby',wind:20,effect:'rings',magic:true,beats:[{at:20,damage:21,shot:'rune',speed:13},{at:29,damage:24,shot:'rune',speed:15}]}
    ],
    intro:['Berico, wait. A second signal.','Our child’s thread led me here.','Who showed the hunter our crossings?'],
    win:['Someone moved the thread. I’ll find it.','Berico, I found the next door.','I hear our child through the static.','The thread is still whole.','We can still reach them.'],
    loss:['The thread was right here.','I can still see the gate.','Berico, remember the last signal.','I should’ve listened longer.','Save your strength for the crossing.']
  }
];
