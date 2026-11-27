// All music and effects are bundled locally. Source credits are in audio-credits.html.
const seasonThemes = {
  1:{name:'Beneath Colledo',file:'overworld'},
  2:{name:'Six Worlds, One Door',file:'great-labyrinth'},
  3:{name:'Ashes of Ifrit',file:'dark-place'},
  4:{name:'Signals from Zig',file:'helice-12',rate:.92}
};

const fighterThemes = {
  juster:['The Red Curtain','helice-28',1.1],
  jester:['The Blue Bell','chamber-tempo',1.12],
  berico:['Through the Breach','heavy-battle',.94],
  oliquino:['Follow the Thread','helice-32',1.09],
  lour:['A Light for the Wounded','helice-14',1.08],
  bryan:['Line of Command','epic-rock',1.02],
  jonneil:['Million Fists','heavy-battle',1.05],
  ranelle:['Skyblender Salvo','hard-battle-1',1.07],
  yokan:['Frozen Steel','chamber-tempo',.97],
  dice:['When the Shadows Dance','helice-33',1.11],
  roj:['Two Blades at Dawn','hope',1.04],
  hope:['Steal the Star','helice-26',1.11],
  miguel:['Arrow into the Wind','helice-38',1.05],
  bennedic:['Five Seconds of Fury','helice-37',1.10],
  fallan:['Apollo’s Fire','helice-39',1.05],
  lynne:['The Devil’s Draw','helice-05',1.03],
  clephus:['Sigma Commands','helice-07',1.07],
  karl:['Faster Than Steel','helice-13',1.16],
  farrol:['Break the Line','helice-20',1.08],
  mohammad:['Unfinished Seal','helice-34',1.08],
  denni:['Under Pressure','helice-17',1.00],
  tyrone:['The Zodiac Falls','final-battle',.97],
  semmenelin:['The Torch of the Heavens','helice-35',.95],
  chastity:['Holy Return','helice-36',1.04],
  alberto:['Skyblender Crossfire','hard-battle-2',1.04],
  aljo:['The Oracle’s Orders','helice-09',.99],
  robin:['Seventh Ward','helice-08',1.08],
  carlson:['Ringo Rodeo','helice-27',1.11],
  fred:['Forge Overdrive','helice-16',1.10],
  ivanov:['Phase Memory','helice-41',1.03],
  lovejoy:['Signal Lock','helice-03',1.08],
  asmodeus:['The Prince’s Due','helice-23',.96],
  gensys:['Redundant Core','helice-40',.97],
  enigma:['The Shape of Willard','helice-42',1.04],
  pandemic:['Second Pulse','helice-22',1.15],
  honey:['Porcelain Familiar','helice-01',1.16],
  maritess:['Ice in the Lock','helice-31',1.08],
  arianne:['The Fire Crossing','helice-06',1.13],
  kz:['Hidden Wells','helice-02',1.09],
  michelle:['Fault Line','helice-04',.97],
  gary:['Signal Interference','helice-21',1.14],
  fernan:['Last Watch','helice-30',.99],
  'roj-demon':['The Ash Refrain','helice-32',.97],
  brayan:['Choirbreaker','helice-11',1.03],
  thazar:['Rite of the Vessel','helice-10',1.02],
  azazel:['Throne of Cinders','rpg-boss',1.03],
  ivanna:['The Shiva Frequency','helice-15',1.07], shtrgoi:['Blood of the First Hunt','helice-18',1.08],
  vankov:['The Father’s Call','helice-19',1.08], precious:['Crosswind','helice-24',1.1], clark:['Amber Signal','helice-25',1.1]
};

const bossThemeArrangements = {
  tyrone:{file:'heavy-battle',rate:1.11}, enigma:{file:'final-battle',rate:1.14,offset:18},
  gensys:{file:'helice-40',rate:1.12,offset:11}, azazel:{file:'epic-rock',rate:1.13,offset:21}, vankov:{file:'helice-28',rate:1.14}
};

function fighterTheme(id,transformed=false) {
  const [name,file,rate]=fighterThemes[id];
  return {name,file,rate,...(transformed?bossThemeArrangements[id]:null)};
}

const menuThemes = [
  {name:'Lambda After Dark',file:'helice-03'},
  {name:'Ciphers in Motion',file:'helice-36'},
  {name:'Genesis Pulse',file:'helice-41'}
];

const combatAudio = {
  heal:['heal'],
  light:['dash','wind-spell'], heavy:['sword-swing','dash'],
  strike:['impact-medium-000','impact-medium-001','impact-medium-002','impact-medium-003'],
  impact:['impact-heavy-000','impact-heavy-001','impact-heavy-002','impact-heavy-003'],
  punch:['punch'],kick:['kick'],blade:['sword-swing'],parry:['sword-clash'],
  armor:['armor-hit'],guard:['shield-block'],ward:['magic-shield'],
  jump:['jump'],land:['land'],dash:['dash'],
  throw:['sword-swing','whip-crack'],bow:['bow-shot'],arrow:['arrow-hit'],laser:['laser-shot'],
  gun:['gun-shot-1','gun-shot-2'],grenade:['grenade'],blast:['explosion-small'],cast:['spell-cast'],
  fire:['fireball'],ice:['ice'],shock:['lightning'],earth:['earth-spell'],wind:['wind-spell'],
  dark:['curse'],super:['summon'],charge:['energy-charge'],
  awaken:['boss-roar'],dragon:['dragon-roar'],ko:['body-fall'],collapse:['heavy-thud'],mechanical:['power-down']
};

const projectileSound = {
  arrow:'bow',bullet:'gun',missile:'blast',grenade:'grenade',laser:'laser',packet:'laser',
  dragonfire:'fire',ice:'ice',stone:'earth',water:'wind',wave:'wind',shadow:'dark',
  holy:'cast',element:'cast',rune:'cast',halo:'charge',nebula:'cast',spirit:'cast',spore:'dark'
};
const armoredFighters=new Set(['gensys','fred','denni','ivanov','vankov']);
const attackAudioVolumes = {
  light:.26,heavy:.32,blade:.48,dash:.3,jump:.32,land:.29,gun:.55,
  cast:.43,wind:.38,parry:.34,charge:.39,super:.56,awaken:.58
};
