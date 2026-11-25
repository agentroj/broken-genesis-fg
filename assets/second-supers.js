const secondSupers = Object.fromEntries([
  ['bryan', 'Spearfall', 23, 265, 'driver', [45]],
  ['jonneil', 'Hundred-Fist Counter', 15, 165, 'burst', [15,15,15]],
  ['ranelle', 'Thunder Salvo', 19, 0, 'burst', [15,15,15], 'missile'],
  ['yokan', 'Glacial Divide', 22, 305, 'rift', [45]],
  ['dice', 'Umbral Web', 19, 330, 'shadowWeb', [15,15,15]],
  ['roj', 'Sanctuary Break', 20, 0, 'rings', [45], 'holy'],
  ['hope', 'Stardust Volley', 14, 0, 'burst', [9,9,9,9,9], 'star'],
  ['miguel', 'Arrowstorm', 18, 0, 'burst', [15,15,15], 'arrow'],
  ['bennedic', 'Wild Rend', 19, 192, 'burst', [23,22]],
  ['fallan', 'Elemental Eclipse', 23, 470, 'flame', [15,15,15]],
  ['lynne', 'Royal Flush', 15, 0, 'grid', [15,15,15], 'card'],
  ['clephus', 'Nightfall Edict', 24, 445, 'rift', [45]],
  ['karl', 'Silver Streak', 12, 171, 'burst', [9,9,9,9,9]],
  ['farrol', 'Seismic Uppercut', 18, 181, 'driver', [45]],
  ['mohammad', 'Arcane Tempest', 20, 0, 'sigil', [15,15,15], 'rune'],
  ['denni', 'Heavy Duty', 23, 0, 'driver', [45], 'piston'],
  ['chastity', 'Radiant Covenant', 19, 0, 'rings', [23,22], 'holy'],
  ['alberto', 'Breach Line', 19, 210, 'driver', [45]],
  ['aljo', 'Checkmate', 21, 360, 'grid', [45]],
  ['robin', 'Astral Prism', 17, 0, 'sigil', [15,15,15], 'rune'],
  ['carlson', 'High Noon', 21, 295, 'whip', [45]],
  ['fred', 'Foundry Breaker', 20, 0, 'driver', [23,22], 'laser'],
  ['ivanov', 'Singularity Ray', 22, 0, 'rings', [45], 'beam'],
  ['honey', 'Resonant Palm', 16, 0, 'rings', [23,22], 'wave'],
  ['lovejoy', 'Hard Reset', 18, 0, 'grid', [15,15,15], 'packet'],
  ['asmodeus', 'Hellcourt Judgment', 22, 0, 'flame', [23,22], 'dragonfire'],
  ['gensys', 'Machine Ascendant', 24, 435, 'grid', [45]],
  ['enigma', 'Unmaking', 24, 0, 'rift', [45], 'shadow'],
  ['tyrone', 'Abyssal Rupture', 22, 0, 'rift', [45], 'nebula'],
  ['pandemic', 'Carapace Cataclysm', 19, 254, 'tendrils', [15,15,15]]
].map(([id,name,wind,range,effect,hits,shot])=>[
  id, {name,wind,range,effect,targeted:range>=250,beats:hits.map((damage,i)=>({
    at:wind+i*7,damage,...(shot?{shot,speed:shot==='missile'?16:14}:{})
  }))}
]));
