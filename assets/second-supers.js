const secondSupers = Object.fromEntries([
  ['bryan', 'Spearfall', 23, 265, 'driver', [45]],
  ['jonneil', 'Khan’s Riddle', 15, 165, 'burst', [15,15,15]],
  ['ranelle', 'Thunder Salvo', 19, 0, 'burst', [15,15,15], 'missile'],
  ['yokan', 'Glacial Divide', 22, 305, 'rift', [45]],
  ['dice', 'Web of Shadows', 19, 330, 'shadowWeb', [15,15,15]],
  ['roj', 'Cathedral Light', 20, 0, 'rings', [45], 'holy'],
  ['hope', 'Thief’s Starfall', 14, 0, 'burst', [9,9,9,9,9], 'star'],
  ['miguel', 'Arrowstorm', 18, 0, 'burst', [15,15,15], 'arrow'],
  ['bennedic', 'Cursed Rend', 19, 192, 'burst', [23,22]],
  ['fallan', 'Elemental Eclipse', 23, 470, 'flame', [15,15,15]],
  ['lynne', 'Royal Flush', 15, 0, 'grid', [15,15,15], 'card'],
  ['clephus', 'Nightfall Edict', 24, 445, 'rift', [45]],
  ['karl', 'Genesis Fracture', 12, 171, 'burst', [9,9,9,9,9]],
  ['farrol', 'Seismic Uppercut', 18, 181, 'driver', [45]],
  ['mohammad', 'Warding Storm', 20, 0, 'sigil', [15,15,15], 'rune'],
  ['denni', 'Turbine Breaker', 23, 0, 'driver', [45], 'piston'],
  ['chastity', 'Divine Sigil', 19, 0, 'rings', [23,22], 'holy'],
  ['alberto', 'Mercenary’s Charge', 19, 210, 'driver', [45]],
  ['aljo', 'Checkmate', 21, 360, 'grid', [45]],
  ['robin', 'Sage’s Prism', 17, 0, 'sigil', [15,15,15], 'rune'],
  ['carlson', 'High Noon', 21, 295, 'whip', [45]],
  ['fred', 'Orb of Clarity', 20, 0, 'driver', [23,22], 'laser'],
  ['ivanov', 'Echo of Enigma', 22, 0, 'rings', [45], 'beam'],
  ['lovejoy', 'Hard Reset', 18, 0, 'grid', [15,15,15], 'packet'],
  ['asmodeus', 'Judgment of the Prince', 22, 0, 'flame', [23,22], 'dragonfire'],
  ['gensys', 'Harvest Protocol', 24, 435, 'grid', [45]],
  ['enigma', 'Legeon', 24, 0, 'rift', [45], 'shadow'],
  ['tyrone', 'Thirteen Pillars', 22, 0, 'rift', [45], 'nebula'],
  ['pandemic', 'Shell Eruption', 19, 254, 'tendrils', [15,15,15]]
].map(([id,name,wind,range,effect,hits,shot])=>[
  id, {name,wind,range,effect,targeted:range>=250,beats:hits.map((damage,i)=>({
    at:wind+i*7,damage,...(shot?{shot,speed:shot==='missile'?16:14}:{})
  }))}
]));

secondSupers.lour={name:'Restorative Light',wind:22,magic:true,effect:'rings',
  beats:[{at:22,heal:24,color:'#b7ffe1'}],recovery:24};
