// Campaign summaries and fighter accounts are also used by the Story menu.
const seasonStories = {
  1:{
    title:'Divination of Darkness', world:'Earth',
    opening:[
      'It starts with smoke rising from the forest floor. Hunters Bryan and Jonneil trace it to an illegal Sigma mine under Berican, and beneath the mine they find Genesis, an ancient gateway between worlds. When a turbine explodes under Colledo, their partner Victor is killed and Sigma’s digging cracks the gateway open.',
      'Something on the other side has been waiting for that crack. Tyrone, a Watcher cast out of Shiva, sends his thirteen Zodiac pillars across Earth and builds a throne over the Gate of Hades in the Mountains of Gavarra. Bryan gathers every Hunter who will listen. They will be called the new Ciphers.'
    ],
    chapters:[
      ['The Hunters’ Society','Bryan and Jonneil follow the quakes from Berican to Colledo. They free General Skyblender from a Sigma camp and learn why Sigma wants his family. In Abanel, a framed outlaw named Dice helps them bring down the corrupt West Judge.'],
      ['The Divided Company','A crash scatters the Hunters. Dice and the thief Hope go after the Nebula to save starving Griselda. Roj and Yokan rescue the healer Lour and back Lynne at the Tartarus card tables. Near Geich, Bryan finds Bennedic, a warrior cursed to become a beast.'],
      ['The Dark Grace','A forced landing strands the Ciphers on the island of Semmenelin, an ancient dragon. With three stones left by the miners, they light the Torch of the Heavens and drive it back, then return to find Earth coming apart and learn what Tyrone is building.'],
      ['Divination of Darkness','The Ciphers and Sigma call a truce against the Zodiac pillars. Bryan and Yokan rejoin the team for the final climb to Gavarra, where the Ciphers make their last stand at the Gate of Hades.']
    ],
    ending:{
      title:'The World Lives',
      paragraphs:['At Gavarra, Roj gives his life, and his spirit lands the blow that brings Tyrone down. Genesis begins to heal. But Father Luis warns them that the other worlds have seen the way to Earth now, and they will not forget it.','The Hunters’ Society gives the Ciphers a new headquarters in Colledo. Yokan raises a grave for his brother. Bryan stays behind to prepare for the war with Sigma that everyone knows is coming.']
    }
  },
  2:{
    title:'Tomorrow',world:'Shiva',
    opening:[
      'Word reaches Chastity that the Ciphers are dead. She returns to Colledo to mourn them, and finds one name missing from the graves: Bryan Uria. Her search takes her through the Hunters’ Society, back to the surviving Ciphers, and straight into a new war with Sigma.',
      'Karl, a Sigma defector, brings a warning. Sigma means to carry Tyrone’s remains through Genesis and raise him on the other side. The Ciphers follow them into Shiva, but the crossing scatters them. Now every group must find its own way to St. Gabriel Cathedral while Sigma Ghost hunts the roads for souls.'
    ],
    chapters:[
      ['The Search for Life','Chastity recruits Alberto and Fred, and Aljo helps her track down Bryan Uria, the Cipher commander. Then Clephus breaks the ceasefire. An ambush in Haziom exposes Sigma’s plan to resurrect Tyrone.'],
      ['A Different World','Scattered across Shiva, the Ciphers fight their way toward one another. Miguel and Alberto help the Resistance after a train raid. Aljo and the shamans of Patria try to win Ranelle’s soul back from the Lagoon. Hope breaks Bennedic out of prison, and Robin decides whether to trust Karl.'],
      ['The Minstrel of St. Gabriel','The survivors reunite at Shiva’s St. Gabriel Cathedral and find Roj alive. He remembers Chastity but not the Ciphers, because Sigma Ghost has locked the Earth half of his soul in a Klux laboratory. They steal it back, Fallan makes Roj whole, and Jonneil opens Khan’s temple to learn the truth about Sigma Ghost.'],
      ['Tomorrow','Willard reveals himself as Enigma and uses Legeon to hurl six Ciphers into other worlds. The Ciphers bring him down, but the soul factory keeps running. Roj goes back alone to shut down the Gensys machines.']
    ],
    ending:{
      title:'Those Beyond the Gate',
      paragraphs:['Roj destroys the factory’s backup machines and dies ending the soul harvest. In Colledo, the Ciphers raise graves for Roj and for the six comrades Legeon took.','Bryan and Aljo reopen the Hunters’ Society. On Shiva, Jonneil teaches at Khan’s temple and Robin helps the Resistance rebuild. And somewhere beyond Genesis, the six missing Ciphers open their eyes.']
    }
  },
  3:{
    title:'Ashes of Genesis',world:'Ifrit',
    chapters:[
      ['The Sol Sisters','In the desert world of Ifrit, Thazar’s Cult kidnaps two Sol Sisters for a rite to resurrect Azazel, King of Hell. Meanwhile Ivan scatters copies of himself through Genesis. The copy that lands in Ifrit helps the Cult raise Roj from the dead as a masked, demonic minstrel.'],
      ['The Couple','Berico and Oliquino, demon cult leaders known as the Couple, threaten to burn Ifrit down unless it returns their missing child. The Sol Sisters and the Cult reluctantly fight side by side to stop them. In the chaos, Dark Roj slips away, the Cult seals his memories of Shiva, and he corners a wounded Hope, then takes off his mask.'],
      ['Roj’s Memories','The Sol Sisters reach the Ciphers through Ivan’s relays. The Ciphers arrive with Roj’s memory modules, fight him memory by memory until he remembers who he is, and rescue Hope. Unnoticed, Ifrit’s Ivan helps Thazar pour Azazel into the body of a Genesis spawn.'],
      ['The King of Hell','Hope asks the Ciphers to trust the changed Roj. Together with the Sol Sisters, they storm the altar while Azazel fights to take full control of his new body.']
    ]
  }
};

// Each entry carries a short biography and a personal stake in the playable campaign.
const characterStories = {
  juster:['The Red Curtain','Juster is the red clown of Tyrone’s court, all grins and cinders. His job is to guard St. Gabriel Cathedral and the signal hidden inside it.','Tyrone orders Juster to hold the cathedral until the Zodiac can march. Juster does not worry about the timing. Jester will ring the bell from Gavarra when it is time to leave.'],
  jester:['The Blue Bell','Jester is the blue clown of Tyrone’s court, light on his feet and fond of a cruel joke. He hangs his bells along the road to Gavarra.','Jester’s bells will guide Tyrone’s army through the fog and lead everyone else astray. He has promised Juster that the last bell means the show is over.'],
  berico:['Where the Trail Broke','Berico and Oliquino are demon cult leaders and Genesis spawn, known together as the Couple. Their search for their lost child once nearly burned Ifrit to the ground.','The trail leads Berico to Zig, but a Genesis hunter has found the same path. He has to hold the crossing long enough for Oliquino to get through.'],
  oliquino:['The Thread Through Zig','Oliquino leads a demon cult beside Berico. She can sense the faint thread their missing child left behind, the same thread that once drew the Couple to Ifrit.','A false signal pulls Oliquino back toward the hunter’s trail. She begs Berico to stop chasing the loudest voice and listen for the one they both know.'],
  lour:['The Healer Below Fortress City','Lour is a healer who studied under Father Luis. Thazar kept her prisoner beneath Fortress City for her knowledge of medicine, until Roj and Yokan found her in a Sigma satellite base.','Once free, Lour warns Yokan that the city of Harrison is dangerous for Roj. When the Ciphers are poisoned aboard a pirate ship, she and Father Luis call on the Divine Will to save them.'],
  bryan:['The Weight of the Ciphers','Bryan Uria joined the Hunters’ Society alongside his friend Jonneil. When Earth began to break, he pulled the scattered Hunters together and became commander of the new Ciphers.','Bryan already lost Victor under Colledo, and he is terrified of losing anyone else. As Father Luis leads him toward Tyrone, he has to decide whether he can still ask his friends to follow him.'],
  jonneil:['What Khan Left Behind','Jonneil uncovered Sigma’s mines under Berican and brought Bryan into the Hunters. He is a descendant of the sage Khan and quotes his teachings constantly, even when they sound like jokes.','The smoke over Berican was the first clue. Jonneil retraces the trail from the mines to Colledo, looking for a way to stop whatever came through Genesis.'],
  ranelle:['The Skyblender Name','Ranelle is a soldier of the Skyblender army. He joined the Hunters after they rescued his grandfather, General Skyblender, from a Sigma camp. The mercenary Alberto is his cousin.','Sigma came for his family once already. Ranelle takes point on the road to Colledo, determined to learn what Sigma was hiding at that camp.'],
  yokan:['The Bell at Canary','Yokan carried his frost-forged buster sword into quarantined Canary to find a missing child. He was bitten by the undead there. He and Dice rang the church bell to lure the horde away from their friends.','The bite is getting worse, and Yokan has told no one. Then, deep in Semmenelin’s lair, he hears something that seems to be calling his name.'],
  dice:['A Shadow Through Abanel','Dice commands living shadows, which made him easy to blame when a string of murders hit Abanel. He broke the Hunters out of prison and led them to the proof that the West Judge was the real killer.','In Nadaraka, Dice strikes a deal with a thief named Hope. He will help steal the Nebula if Hope helps him finally clear his name.'],
  roj:['A Brother at the Door','Roj fights with twin blades and a holy light, but he remembers almost nothing of his past. Strangers in the city of Harrison seem to know him. At St. Gabriel Cathedral, he recognizes Yokan as his brother.','Lour warns him to stay away from the city that knows his name. As the Ciphers close in on Tyrone, Roj hears a voice that promises to give his memories back, and has to decide whether to trust it.'],
  hope:['A Star for Griselda','Hope is a thief wanted in Nadaraka and Anadar. He means to steal the Nebula, a fallen star, and sell it to feed Griselda, where the famine has already killed hundreds.','The Nebula sits in a cave guarded by a witch. Hope recruits Dice, and thinks that even the ranger sent to arrest him might be talked into helping.'],
  miguel:['The Ranger’s Deal','Miguel was a junior ranger in Lyle’s army when he finally caught Hope. Hope told him about the famine in Griselda, and Miguel agreed to a fake arrest.','Miguel brings Hope in by daylight and unlocks the cell after dark. He has to get everyone out before the promotion he was promised turns into a death sentence.'],
  bennedic:['Gallahan’s Brother','Bennedic’s own band, the First Class Warriors, traded him to a witch to buy their freedom. Her curse turns him into a beast whenever he loses his temper. His brother Gallahan sent Bryan to bring him home.','The witch turns Gallahan to stone. Bennedic joins the Ciphers with the curse still inside him and a vow to come back and free his brother.'],
  fallan:['The Price of a Summoning','Fallan is an elemental summoner haunted by the people Hades killed through him. After meeting Hope and Dice, he earns the god Apollo’s protection at the Temple of the Gods.','The witch who guards the Nebula can summon Hades. Fallan returns to Anadar to face the power that once used him, knowing his next spell could widen the crack in Genesis.'],
  lynne:['The Last Hand at Tartarus','Lynne fights with enchanted playing cards. She entered the Tartarus tournament to win her grandfather’s ransom, and Yokan paid her way in. Sigma sent the Devil Gambit to make sure she lost.','Lynne beats the Devil Gambit, then learns her grandfather already died trying to escape. She takes her cards to Colledo and joins the fight against the people who took him.'],
  clephus:['The Terms at Otaio','Clephus is the master of Sigma and commands its forces of darkness. When Tyrone’s pillars reach Otaio, he finds himself facing the same enemy as the Ciphers.','Clephus offers Bryan one ceasefire, and only one. He needs the Ciphers to stop Tyrone, and he plans to resume their war the moment Genesis is safe.'],
  karl:['The First Crack','Karl’s claws make him Sigma’s fastest fighter. At Otaio, he confesses that he is the one who cracked Genesis beneath Colledo.','If Tyrone opens the Gate of Hades, the Sigma soldiers Karl calls brothers will die alongside their enemies. Karl goes to Otaio to make the Ciphers hear the truth.'],
  farrol:['Under Sigma’s Colors','Farrol is Sigma’s bare-knuckle enforcer. Years ago he tortured a man named Carlson, and Carlson has never forgotten.','As Earth breaks apart, Farrol holds the line for Clephus. A ceasefire would put him shoulder to shoulder with people who have every reason to hate him.'],
  mohammad:['The Monk at the Breach','Mohammad is a reclusive Sigma monk who studies the ancient wards around Genesis. He draws his seals through a crystal-tipped staff.','The cracks under Colledo run through stone carved with warnings. Mohammad takes what he can decipher to the mountain passes that lead to Gavarra.'],
  denni:['The Machines Under Colledo','Denni builds and maintains Sigma’s heavy machinery. Fred, the Resistance engineer, is his lifelong rival.','After the quake, Denni’s instruments still detect something moving deep under Colledo. He follows the readings to learn what kept running after the turbine blew.'],
  tyrone:['Earth’s Second World','Tyrone was once a Watcher of Shiva, before he fell. The Book of Khan names thirteen Zodiac pillars under his command. He sees Earth’s refusal to take sides in the war between worlds as a betrayal.','He builds his throne at Gavarra, right on top of the Gate of Hades. As his pillars fall one by one, he prepares to open the gate himself.'],
  chastity:['The Name Missing from the Graves','Chastity, whom Roj calls Apple, survived captivity thanks to the Ciphers. She carries the Divine Sigil and fights with a holy boomerang that always comes back.','At the Ciphers’ old headquarters, she finds every grave but Bryan’s. Her search leads to the Hunters’ Society, where three files point to three different men named Bryan.'],
  alberto:['Wake Up, Cousin','Alberto is a Skyblender mercenary and Ranelle’s cousin. Chastity stops his raid on Skyblender headquarters and offers him a place with the Hunters instead.','On Shiva, after the train raid, Alberto hears that Ranelle is barely alive in Patria. He goes after the soul the Lagoon stole, because there is something he never told his cousin.'],
  aljo:['The Record at Patria','Aljo started out as the Hunters’ Society’s records keeper. He helped Chastity find Bryan Uria and went with her when the Society was ordered to shut down.','Aljo finds Ranelle unconscious by the Lagoon and carries him to the shamans of Patria. To bring him back, Aljo has to get past the demons guarding his soul.'],
  robin:['The Sage of Lion’s Den','Robin is a sage of Shiva’s Resistance who fights with wards and portals. At the Lion’s Den pub, he confronts Karl, a Sigma soldier from Earth who claims to have turned against his own side.','Robin brings Karl along toward St. Gabriel. With Sigma Ghost blocking the roads, he has to test Karl’s word before trusting him with the Resistance.'],
  carlson:['The Road to Ringo Hilltop','Carlson is a rodeo rider with Shiva’s Resistance who fights with a whip. He heads for St. Gabriel once the scattered Ciphers start finding one another.','His friend Lovejoy is missing behind Sigma Ghost’s lines. Carlson races to find her and reach the cathedral before the enemy finds the gathering there.'],
  fred:['The Orb of Clarity','Fred is a weapons engineer from Earl Pine View who fights in a powered suit. He joined Chastity’s search after they stole the Orb of Clarity back from Sigma.','In Kalixto, Fred spots a creature that dissolves into red shadow and mistakes it for Dice. Karl and Robin arrive just as he learns that Sigma Ghost has sealed every route off the continent.'],
  ivanov:['A Memory of Enigma','Ivanov is a synthetic fighter. His oldest memories contain a fragment of Enigma’s code, and he has never known why.','On Shiva, he picks up a pattern that answers him from across the multiverse. In Ifrit, he follows it to its source while Gary sorts out which calls really come from Ivan’s clones.'],
  lovejoy:['The Last Signal from Ringo','Lovejoy keeps Shiva’s Resistance connected with her field terminal. When Sigma Ghost holds her captive at Ringo Hilltop, Carlson leads the search for her.','When Willard prepares Legeon, Lovejoy works to keep the Resistance signal alive through a Genesis crossing. Someone may need it someday to find the way home.'],
  asmodeus:['The Souls of the Lagoon','Asmodeus, Prince of Hell and Tyrone’s father, answers Sigma Ghost’s summons in Lagoon Forest. He is gathering souls for a weapon meant to frighten the higher angels into giving up their power.','Ranelle’s soul is part of his collection. Now a party carrying Solomon’s sigil has come to the Lagoon to break his bargain.'],
  gensys:['The Machine Behind the Gate','Gensys is a machine intelligence imprisoned in Ifrit, and Enigma needs routes across the six worlds to set it free. On Shiva, Sigma Ghost’s soul factory already runs on Gensys machines.','The factory’s backup systems keep harvesting souls after its main defenses fall. When the Ciphers destroy the first Gensys frame, a bigger one is already waiting.'],
  enigma:['The Name Willard','Enigma hides behind the name Willard and makes Sigma Ghost look like a power of its own. He promised Earth’s Sigma great strength in return for help opening the worlds.','The Ciphers are closing in on the soul factory. Enigma prepares Legeon to scatter them before they can stop the machines or learn what he really is.'],
  pandemic:['Under Her Own Skin','Pandemic shares her body with a powerful living symbiote. Bryan knows her well enough to hear her voice even when the shell is the one speaking.','As Shiva’s breach widens, the symbiote feels its pull before she does. Pandemic follows it to learn whether it is trying to warn her or take over.'],
  honey:['The Name on the Tag','Honey was a small child when Lovejoy found her at Genesis, wearing a tag with her name. She grew into a young woman almost overnight and learned to hear the spirits around her.'],
  maritess:['Frost at the Sanctuary','Maritess is the Sol Sisters’ ice mage. When the Cult takes two of her sisters, her frost marks a path through the doors the Cult wants sealed.'],
  arianne:['The Fire in the Streets','Arianne is the Sol Sisters’ fire mage. She volunteers to lead the Cult on a chase through the streets while the others search for the prisoners.'],
  kz:['The Wells of Ifrit','KZ is the Sol Sisters’ water mage. She maps the hidden wells beneath Ifrit and listens to the voices carried through Ivan’s relays.'],
  michelle:['The Bridge Will Hold','Michelle is the Sol Sisters’ rock mage. With two sisters taken, she holds a stone bridge open so the others can get in and out of Ifrit alive.'],
  gary:['Several Voices, One Name','Gary keeps Ifrit’s Genesis relays running. He discovers that several different callers all answer to the name Ivan, and starts tracing which worlds they are calling from.'],
  fernan:['The Watch at the Gate','Fernan is the swordsman who guards the road to Ifrit’s Genesis gate. When the Cult strikes, he must choose between holding his post and taking his sword to the prison.'],
  'roj-demon':['The Masked Minstrel','The Cult, with help from Ifrit’s Ivan, raises Roj from the dead in a demonic form and seals away his memories. He hides behind a mask, but Hope knows his voice.'],
  brayan:['The Initiative','Listher is a half-angel minstrel and brawler from Shiva who leads the Archangels’ Initiative. When the heavenly Choir falls out of tune, he follows the disturbance to Ifrit.'],
  thazar:['A Vessel for the King','Thazar leads the Cult of Ifrit. He means to place Azazel inside the body of a Genesis spawn, and keep the Couple from discovering what that body really is.'],
  azazel:['The Returned King','Azazel is the King of Hell. Thazar and Ifrit’s Ivan give him a Genesis spawn’s body so he can walk the world again. He will keep it only as long as it is useful.']
};

const guestStoryStakes = {
  1:{
    chastity:'The Ciphers once freed Chastity from the prison of Lambda. When Colledo starts to quake, she follows their trail, hoping to find Roj before the road to Gavarra closes.',
    alberto:'Sigma has kidnapped General Skyblender, Ranelle’s grandfather. Alberto follows his cousin Ranelle to the Sigma camp to learn what Sigma wants with their family.',
    aljo:'In the Hunters’ archive, Aljo finds records tying a Sigma mine to the Colledo quakes, and signs that someone has been editing them. He races to get a copy to the Ciphers before the files change again.',
    asmodeus:'Word reaches Hell that Tyrone means to open the Gate of Hades. Asmodeus comes to Gavarra to hear, from his son’s own mouth, what he plans to do with it.',
    'roj-demon':'Genesis replays the moment the gateway cracked, built from memories Roj would later fight to recover.',
    thazar:'A Sigma satellite base sits beneath Thazar’s house in Fortress City. When Roj comes looking for Lour, Thazar must decide whose orders he really follows.'
  },
  2:{
    bryan:'Bryan leads the group that lands near Shiva’s St. Gabriel Cathedral. When an Archangel tells him Roj is alive in this world, he heads for the Klux laboratories to learn whose soul Sigma has stolen.',
    jonneil:'Before the crossing, Jonneil finally admits he is Khan’s descendant. On Shiva, a riddle his grandfather used to tell as a joke turns out to be the key to Khan’s temple.',
    ranelle:'Ranelle wakes near the Lagoon with no weapons and no memory of the crossing. What the forest takes from him next will send Aljo and Alberto running to Patria for help.',
    yokan:'The Canary bite has followed Yokan to Shiva. He is determined to recover Roj’s missing memories, while Lynne hunts for a cure that will keep him alive long enough to see it.',
    dice:'The crossing drops Dice far from the others. On Shiva, people whisper about a figure that moves like a red shadow. He needs to find Fred before either of them mistakes it for him.',
    roj:'On Shiva, Roj remembers Chastity but nothing of his life with the Ciphers. Sigma Ghost has locked the Earth half of his soul inside a laboratory on Klux.',
    hope:'Hope escapes Sigma Ghost with help from a Resistance fighter named Aeron. Next stop: the prison at Gaddhi, to spring Bennedic and find a road to the cathedral.',
    miguel:'Asha, a storekeeper in Nedo, points Miguel toward Patria. His mountain train is hijacked, and Alberto is aboard when Sigma Ghost comes for Aeron of the Resistance.',
    bennedic:'Bennedic sits in a Sigma Ghost prison, fighting to keep the beast asleep. One night a light outside his cell starts to move, and Hope is waiting on the other side when it blows the wall open.',
    fallan:'At St. Gabriel, Fallan learns that Roj has lost his memories of the Ciphers. Once they bring the missing half of his soul back from Klux, Fallan prepares the rite that can make him whole again.',
    lynne:'Lynne finds Miguel and Alberto in Ruso and learns that Ranelle is dying. The shamans of Patria may be able to save him, and may also know how to cure the bite Yokan keeps hiding.',
    clephus:'Clephus tries to wake a body using the soul Sigma stole from Earth. When Karl reaches the factory, he shows Clephus what Willard has been doing to the Sigma soldiers locked inside.',
    karl:'Karl hands the Ciphers Sigma’s route through Genesis. On Shiva, he asks Robin for one chance to prove he means to rescue the people Sigma Ghost has taken.',
    denni:'Denni guards the Genesis gate beneath Khan’s temple. Karl warns him that Enigma is using Sigma, and soon Denni will have to choose between his orders and the truth.',
    ivanov:'A pattern from Enigma’s code is still running somewhere on Shiva. Ivanov follows it toward the machines that feed on souls.',
    tyrone:'Sigma carries Tyrone’s remains into Shiva to raise him as their puppet. This route imagines him waking mid-ritual and turning on the factory that tried to own him.'
  },
  3:{
    bryan:'A call from Ifrit mentions Hope, and a Roj nobody recognizes. Bryan leads the Ciphers through Genesis with Roj’s memory modules and gives one order: bring both men home alive.',
    ranelle:'The relays say Hope is alive in Ifrit. Ranelle knows what it is like to be lost between worlds, and he means to bring another Cipher home.',
    roj:'Roj wakes in Ifrit with the Cult’s spell still coiled around his mind. As the Ciphers arrive with his memory modules, he fights to break its grip.',
    hope:'Hope wakes wounded in Ifrit and runs into a masked minstrel. He knows the voice. He sees the face. And when the Cult offers him a place, he refuses, even as the prison doors close.',
    fallan:'Fallan stays behind during the first crossing. As the team prepares to face Azazel, he follows with reinforcements and a warning: a vessel can become a doorway.',
    bennedic:'Bennedic arrives after Hope’s rescue. He knows what it is to live with a second form, and he wants the Ciphers to hear Roj out before they decide whether to free him.',
    chastity:'The Ciphers have restored Roj’s memories, but he still wears a demon’s face. Chastity goes to meet the husband who remembers their promise, and to stop Azazel from stealing another body.',
    aljo:'With Earth’s Ivan away, Aljo takes over the communications post. The call from the Sol Sisters gives him two names to pass on to the Ciphers: Hope and Roj.',
    lovejoy:'Lovejoy, worn out from waiting at Genesis, sees a little girl step out wearing a name tag that reads Honey. This route imagines the two of them following the call into Ifrit.',
    ivanov:'Ifrit’s relays carry several copies of the same signal. Ivanov knows what it is to carry someone else’s code, and he follows the calls to learn where the copies split apart.',
    dice:'While the Ciphers head for Ifrit, Dice is in another world, training a new fighting form. This route imagines him answering their call.',
    enigma:'This route imagines an echo of Enigma drifting through the breach he once tried to open, just as the Cult uses it to raise a king even Enigma could never control.',
    gensys:'This route imagines a surviving Gensys frame answering a call from Ifrit, the world where the machine was imprisoned. The signal leads straight to the Cult’s relay archive.',
    asmodeus:'The Cult is raising the King of Hell. Asmodeus comes to Ifrit to see who thinks they will speak for Hell when the ritual is done.',
    tyrone:'A gate to Hell is opening beneath Ifrit. Tyrone follows the Cult’s trail to learn whether Azazel can bring an army through as easily as a single spirit.'
  }
};

const guestArrivals = {
  1:'In this route, {name} arrives on Earth just as the cracked Genesis drags the Ciphers and Sigma toward Gavarra.',
  2:'In this route, {name} crosses into Shiva during the hunt for the soul factory and looks for a way through Sigma Ghost’s lines.',
  3:'In this route, {name} answers the call from Ifrit and takes the Sol Sisters’ road toward the Cult’s prison.'
};

function fighterStory(fighter,season,stageThreeFighters) {
  const [title,biography,homeOpening]=characterStories[fighter.id]??zigCharacterStories[fighter.id];
  const home=homeOpening??stageThreeFighters.find(entry=>entry.id===fighter.id)?.motivation;
  if(fighter.season===season) return {title,biography,stake:home};
  const guestStake=guestStoryStakes[season][fighter.id];
  const guestTitle=crossoverPrologueTitles[season][fighter.id]??seasonStories[season].title;
  return {title:guestTitle,biography,stake:guestStake??guestArrivals[season].replace('{name}',fighterDisplayName(fighter))};
}

// Locations and dialogue follow each season’s chronology.
const campaignScenes = {
  1:[
    ['berican-forest','Smoke Over Berican',
      ['The smoke’s coming up from under the forest. Sigma’s digging.','These tunnels belong to Sigma. Turn back while you can.'],
      ['Whatever they hit down there is older than the mine.','The tremors are heading for Colledo. Follow them.'],
      ['Give me a second. The smoke isn’t going anywhere.','The shaft will still be here. Catch your breath.']],
    ['colledo-turbine','The Mysterious Quake',
      ['Victor’s already below the streets. That turbine is shaking the city apart.','Stay clear of the center. The whole floor is about to go.'],
      ['We lost Victor. And something just cracked Genesis open.','Get to the surface before these caves collapse.'],
      ['We can’t leave Victor down here.','Fall back! We need a way out that holds.']],
    ['canary-square','The Bell of Canary',
      ['The road from St. Abby ends here. Anyone seen the missing kid?','Hear the church bell, you run the other way.'],
      ['The bell pulled the horde off the square. Get everyone out.','We go back to St. Abby. His sister’s waiting.'],
      ['Keep the horde away from the gate.','Stay low. Wait for the bell.']],
    ['earth-tartarus-station','The Devil Gambit',
      ['Sigma rigged the Tartarus tables. Time someone made them pay.','The Devil Gambit is waiting at the final table.'],
      ['They rigged the draw and ran off with the prize.','Their boat left from the harbor. Colledo’s still in reach.'],
      ['I’m not losing on a hand they dealt me.','Keep your cards close. There’s another way out.']],
    ['semmenelin-lair','The Dark Grace',
      ['The miners left three stones. They go in the altar.','I have watched that torch sleep for an age.'],
      ['The Torch of the Heavens burns again. To the dock!','The fire is yours. Let the mountain sleep.'],
      ['We have to light that torch before we face the dragon again.','Three stones. Did you think two would wake the light?']],
    ['gabriel-cathedral','The Ram of the Zodiac',
      ['Father Luis says Tyrone has thirteen pillars. The Ram is the first.','Keep the doors clear. The city needs somewhere to run.'],
      ['One pillar down. The Ram’s trail points east.','Go. I’ll hold the cathedral.'],
      ['There are twelve more of those things out there.','Catch your breath. The Ciphers need to hear this.']],
    ['cipher-ruins','The Commander’s Doubt',
      ['Bryan, we’ve lost people. We need a plan, not a funeral.','Bring the report inside. Every road out of Colledo is changing.'],
      ['Whatever happens to us, someone carries this on.','Get word to the Hunters. They’ll back us.'],
      ['This is not where the Ciphers end.','Then keep the map. We’ll need it when the roads open.']],
    ['earth-otaio-pass','Cease Fire',
      ['The pillars are in the pass. Our war can wait.','Until Genesis is safe, nobody here can afford two fronts.'],
      ['Truce, then. Make sure both sides hear the terms.','Until the gate shuts. Not one day longer.'],
      ['Keep fighting each other and the pillars win.','We’re out of time. Get up and look at that ridge.']],
    ['hades-gate','The Fog at Gavarra',
      ['Azaha’s orbs are feeding this fog. Smash them.','The Hunters are holding the pass behind us. Make it count.'],
      ['The fog’s lifting. There’s a throne above the gate.','I’ll clear the path for everyone still climbing.'],
      ['I can’t see my own hands in this.','Follow the light on the ground. The orbs can still break.']],
    ['earth-gavarra-throne','Divination of Darkness',
      ['Let go of the gate, Tyrone. Earth isn’t yours.','Earth shut its eyes while the worlds burned. Now it will look into Hades.'],
      ['The gate is closing. Tell the Ciphers we did it.','Laugh while you can. The other worlds know your address now.'],
      ['Genesis is still turning. We get one more chance.','Hades has a foothold. Bring everyone you have.']]
  ],
  2:[
    ['shiva-nedo','Asha’s Directions',
      ['The crossing split us up. How do I get from Nedo to St. Gabriel?','Asha knows a way over the mountains. Take the train.'],
      ['Then we ride toward Patria.','Watch for anyone else who fell out of Genesis.'],
      ['We still need a way off this island.','Ask Asha again. She knows every train schedule on Shiva.']],
    ['shiva-boulder-tunnel','The Mountain Train',
      ['Somebody stopped this train in the tunnel. Who are they after?','Sigma Ghost wants Aeron. The Resistance needs him breathing.'],
      ['Aeron’s safe. Now, where did the rest of the Ciphers land?','One of your friends was carried to the shamans in Patria.'],
      ['The train’s dead. We go on foot.','Follow the tracks. Aeron knows the way from there.']],
    ['shiva-crystal-gorge','A Different World',
      ['I lost my team at the crossing. Where’s St. Gabriel?','The cathedral is on the central continent. Go through Patria.'],
      ['At least we know where to regroup. Keep searching.','The Resistance watches these roads. Find Aeron.'],
      ['Every path in this gorge looks the same.','The road runs west. Follow it to the water.']],
    ['shiva-patria-lagoon','Wake Up, Brother!',
      ['The Lagoon took Ranelle’s soul. We’re taking it back.','Got Solomon’s sigil? Nothing else will cut these demons.'],
      ['The way to his soul is open. Tell Patria.','Ranelle needs to hear a voice he knows.'],
      ['He’s still waiting for us in Patria.','The trees are marked. We can find the way back.']],
    ['shiva-gensys-annex','Gensys, the Machine',
      ['This machine can already hear the breach to Ifrit. Shut it down.','Access denied. Auxiliary chassis standing by.'],
      ['Stay away from the core. It’s still drawing power.','Primary frame lost. Directive unchanged.'],
      ['This shell is just buying time for the factory.','Harvest continues. All other processes are expendable.']],
    ['shiva-sky-sanctuary','St. Gabriel on Shiva',
      ['Father Luis said we’d meet here. Has anyone seen Roj?','Roj is alive on Shiva. Ask the Archangels what he remembers.'],
      ['He remembers Apple, but not us. Half his soul is on Klux.','There’s a laboratory above the mountains. Stay in the caves.'],
      ['Everyone tells this story differently.','Start with the cathedral. Father Luis knows which parts are true.']],
    ['shiva-klux-laboratory','The Top of the Mountain',
      ['Sigma brought the Earth half of Roj’s soul here. Find the chamber.','There’s a ship on the runway. We’ll need it when the alarms go off.'],
      ['We have his soul. Fallan can begin the rite.','Take the runway. I’ll keep the guards off your ship.'],
      ['We’re too close to leave without it.','Try the far chamber. The runway’s still clear.']],
    ['shiva-khan-temple','Echoes of Khan',
      ['Khan’s temple maps the way through Genesis. What does it say about Sigma Ghost?','Open the book where the six worlds are drawn.'],
      ['Sigma Ghost is Enigma’s puppet. We have to free the prisoners.','There’s a way into the factory. Karl can find the cells.'],
      ['Someone has to get this back to Karl.','The truth is in the book. Keep it out of their hands.']],
    ['shiva-aurora-fortress','The Prince’s Price',
      ['Families are still waiting for the souls you took.','Sigma Ghost asked me for fear. I brought more than they bargained for.'],
      ['Let the rest of the souls go, Asmodeus. Your deal is over.','Take them, then. My court has other doors.'],
      ['If there are souls left in here, I’m coming back for them.','Bring every ward in Patria. The next bargain costs more.']],
    ['shiva-soul-factory','Tomorrow',
      ['Willard, shut this factory down. Those are people in there.','Willard was a mask. Look upon Enigma.'],
      ['Enigma’s down, but the machines are still taking souls.','My factory has more hearts than you can reach.'],
      ['Legeon threw our friends across the worlds. We can still reach them.','Listen. You can hear six worlds through this door. Go find them.']]
  ]
};

const storyEncounters = {
  1:[
    ['juster','jester','Blue bell, red curtain. Can you still take the pass?','If you can hold the cathedral till I ring.','Tell Tyrone the court stayed together.','Watch for my signal when the fog rolls in.'],
    ['juster','tyrone','You left me the cathedral. What happens when the curtain falls?','Hold the door until the Ram gives the sign.','I open for no one but you.','The sign is already given.'],
    ['jester','tyrone','The bells are hung. Who should hear them?','The Ciphers. Let them think the bells lead home.','Then I ring when the fog rises.','And be outside Gavarra when you do.'],
    ['lour','roj','Stay away from Harrison, Roj. Give your memories time.','People there knew me. I have to know why.','Come find me when you’re ready to talk about it.','Walk with me. Tell me what you know when we rest.'],
    ['lour','yokan','Let me see that bite before you lift that sword again.','It tears open every time I swing.','I’ll dress it. Tell the others where we’re headed.','A few minutes, Lour. Then I go back to Roj.'],
    ['bryan','jonneil','Show me this mine you found under Berican.','Wait till you see what’s under the mine.','You lead when we go below.','We tell the Society together.'],
    ['yokan','dice','Dice, ring that bell the second I clear the square.','You’re bleeding through the wrap. I’ll come back for you.','We pulled them off the others. Stay close.','Street’s clear. Now show me your arm.'],
    ['yokan','lynne','Your entry fee’s paid. Save your best card for Sigma.','I came for my grandfather. I’ll beat anyone in the way.','Your hand beats their Gambit. I’ve got your back.','Thanks for buying me a seat, Yokan.'],
    ['roj','yokan','There’s still room in the cathedral for you, brother.','I went back to Canary so nobody would watch me turn.','Next time, tell me where you’re going.','Fine. Look at the wound. Then we talk.'],
    ['hope','miguel','Griselda needs the Nebula. Arrest me anyway.','You want me to lock you up and then let you out?','I’ll be waiting after dark. Bring the key.','I got my promotion. Now I know what it’s worth.'],
    ['bryan','bennedic','Gallahan sent me. He’s waiting for you in Cyan.','Did he tell you what my own band did to me?','Your brother asked me to bring you home alive.','If Gallahan still believes in me, I can stand.'],
    ['bryan','clephus','We finish this after the pillars fall, Clephus.','One ceasefire, Bryan. Keep your people out of my way.','We both know what this truce cost. Keep it.','Get the Ciphers through the pass. I’ll clear my side.'],
    ['clephus','karl','You’re going to tell me what happened beneath Colledo.','I cracked Genesis. Let me help close it.','Then you lead us to whatever came through.','I told the Ciphers everything. They’re coming to Otaio.'],
    ['ranelle','bryan','My grandfather is inside that camp. We go now.','We’ll get him out. Then we find who gave the order.','We move on my signal. I know the Skyblender codes.','You know this camp. Take point.']
  ],
  2:[
    ['chastity','bryan','Three files, three Bryans. Took a while to find the right one.','You could have told me who you were looking for on Mount Deana.','Tell me what happened to Roj. I’ve earned that.','Come to headquarters. I’ll tell you everything.'],
    ['chastity','alberto','Leave Skyblender headquarters standing, Alberto.','They gave my cousin the rank I wanted. What can you offer me?','A place with the Hunters. The choice is yours.','Maybe I’d be more use on the road with you.'],
    ['ranelle','alberto','I heard someone calling me back. Was that you?','If you can hear me, cousin, come home.','I’m here. Now let’s get us both to St. Gabriel.','You don’t owe me for Patria. Just stay standing.'],
    ['ranelle','asmodeus','I remember the Lagoon. You took something of mine.','I promised Sigma Ghost fine souls. Yours was the first.','If you kept others, I’m coming back for them too.','So your cousin was the voice you heard. Touching.'],
    ['robin','karl','I know that uniform. Why should the Resistance let you through?','I know what Sigma did. Give me one chance to prove why I’m here.','Start by taking me to the others.','Then I go first. Follow me to the cathedral.'],
    ['fallan','roj','We brought the rest of your soul back from Klux.','Chastity says I knew all of you. Show me where it begins.','Say their names as they return. I’ll hold the circle.','I remember the airship. I remember the Ciphers.'],
    ['chastity','roj','At the cathedral, you knew me before anyone else.','You were the first face I remembered, Apple.','I’ll be right here when the rest comes back.','I remember what I promised you.'],
    ['lynne','yokan','I asked the Patria shamans about your arm.','I thought I hid it better than that.','I have a remedy. Give me your good hand.','Someday I’ll get to save you for once.'],
    ['carlson','lovejoy','If your signal drops again, I’m riding to Ringo myself.','Good to hear your voice too, Carlson.','Keep the relay on. The next team will need it.','I saved your frequency. Call me from the cathedral.'],
    ['ivanov','enigma','Willard’s signal matches the oldest code in me. What did you leave behind?','Enough of myself to know you when you came back.','I’ll keep the memory. Your orders end here.','You learned to speak in your own voice. Curious.'],
    ['fred','gensys','Five backup machines. That’s why you’re still running.','Redundancy was in my design before you arrived.','I’ll leave your shutdown code where Roj can find it.','Core isolated. Rerouting soul intake to remaining units.'],
    ['clephus','karl','Willard promised to raise our dead. Why are you with the Ciphers?','Look in the cells, Clephus. Those are our people.','I’ll take them home to Earth if there’s still time.','Then help me open the cages. We argue later.']
  ],
  4:[
    ['berico','oliquino','That sound is our child. I know it.','So do I. Wait until the hunter lets go of the crossing.','We found a way through together.','Keep the safe path marked for me.'],
    ['bennedic','berico','That breach leads into Shtrigoi territory. I have to get through.','Stay close. Something else already knows this route.','I’ll take the trail. You keep the breach open.','The hunter slipped through. Tread carefully.'],
    ['bennedic','oliquino','My nightmares keep showing me this crossing.','I know this trail. My child’s signal ran along it.','Then we follow both together.','Stay close until the voices separate.']
  ],
  3:[
    ['hope','roj-demon','I know that voice. Show me your face.','You knew me before I took off the mask.','I still want you with us when we face Azazel.','Hope. Your name comes back when you say it.'],
    ['chastity','roj-demon','The Ciphers brought your memories. Do you remember your promise?','I remember enough to know why you came, Apple.','When this is over, we go to Shiva together.','As soon as the gate is safe. I swear it.'],
    ['honey','lovejoy','I kept the name tag from the day we met.','Honey, last time I saw you, your hand barely wrapped my thumb.','Stay a little longer. The spirits like you.','I’ll need a new game for the next time you grow.'],
    ['gary','ivanov','Every relay says Ivan. Help me tell the voices apart.','Same name, different memory. I can isolate them.','I saved the routes to both relays.','Keep the original trace. The record may change again.'],
    ['brayan','roj-demon','I heard that tune on Shiva. What happened to your memories at the tower?','If you hear it again, you’ll know which of me came back.','The Initiative will hear you. Come to Shiva when this is done.','Chastity knows the road. We’ll find your Initiative.'],
    ['berico','oliquino','Can you still hear our child past the Cult’s gate?','I hear the thread. Wait until I know where it leads.','We search the other side together.','Berico, keep the way open behind us.'],
    ['berico','thazar','If you brought our child here, open that gate.','You saw a vessel and mistook it for your child.','We’ll find the truth without you.','The rite has already moved beyond these walls.'],
    ['thazar','azazel','The vessel is yours, my king. Ifrit will follow.','You opened the way, Thazar. I promised you nothing.','Remember whose rite brought you back.','I will choose my next vessel myself.'],
    ['maritess','michelle','I can mark the prison doors with frost. Will your bridge hold?','As long as our sisters are on it, it stands.','Follow the frost into the cells and back out.','I’ll cross back for the last one.'],
    ['arianne','kz','I’ll pull the Cult’s guards toward my fire. You find the wells.','One way in, two ways out. Listen before you pick.','Keep my flame in sight. I’ll light the crossing.','The water reaches the prison. I’ll go first.']
  ]
};

const encounterLines = Object.fromEntries(Object.entries(storyEncounters).map(([season,entries])=>[
  season,new Map(entries.map(([a,b,ai,bi,ae,be])=>[
    [a,b].sort().join('/'),{[a]:{intro:ai,after:ae},[b]:{intro:bi,after:be}}
  ]))
]));

function storyEncounterLine(season,fighter,opponent,role) {
  const match=encounterLines[season]?.get([fighter.id,opponent.id].sort().join('/'));
  return match?.[fighter.id]?.[role==='intro'?'intro':'after'];
}

function campaignSceneLine(scene,seat,role) {
  if(!scene||role==='draw') return null;
  const [, ,intro,victory,setback]=scene;
  if(role==='intro') return intro[seat];
  const playerWon=role===(seat===0?'win':'loss');
  return (playerWon?victory:setback)[seat];
}

const storyVoices = Object.fromEntries([
  ['lour','Father Luis taught me to listen before I use the light.','The Divine Will still reaches the people below.','The medicine’s in my satchel. Take it to the others.'],
  ['bryan','One more time. Who’s still with me?','I’ll take point. Sound off if you’re standing.','This time I’m asking the team to wait for me.'],
  ['jonneil','Khan would’ve asked you a riddle. You get my fists.','I’m telling that one to the next class.','Grandpa warned me about that. Too late.'],
  ['ranelle','Skyblender, on the line. Call in when you’re across.','Channel’s open. Where do you need me?','Weapon down. I can still hear you.'],
  ['yokan','My arm can wait until this is over.','I can still close my hand. That’s enough.','I hear the bell again. How long was I out?'],
  ['dice','I’ve been blamed for worse than crossing your road.','My shadows know another way out.','My shadow went on ahead. I’ll catch up.'],
  ['roj','Tell me your name. I might remember it.','My hands remember what my mind forgot.','I knew that voice. The name was right there.'],
  ['hope','I’ll give it all back, except what Griselda needs.','I left one star behind. Hope they follow it.','Fine, you caught me. Can I keep my boots?'],
  ['miguel','I know what my orders say. Tell me your side.','Time to open that cell.','Should’ve learned where they hide the spare key.'],
  ['bennedic','My brother sent someone for me once. Now it’s my turn.','The beast is quiet. I’ll get them out myself.','Gallahan, I’m still coming back for you.'],
  ['fallan','I’ve summoned the wrong power before. Apollo, stay with me.','The circle is closed. Let the souls go free.','Someone watch me when I try that seal again.'],
  ['lynne','Last time the house made the rules, I brought my own deck.','I know what it costs to let the house win.','Grandpa always said keep one card for the walk home.'],
  ['clephus','You have my word, until the ceasefire ends.','Sigma holds until the last of ours is through.','Get the unit clear. I’ll answer for this.'],
  ['karl','I can still hear the first crack. I know where it started.','One more chance to get my brothers clear.','They deserved a better answer than this.'],
  ['farrol','Clephus told me to hold this road.','Cross while I can still stand here.','I heard the order. I’m getting up.'],
  ['mohammad','Someone scratched a warning off this stone.','The remaining seals should hold tonight.','Keep my staff by the door. You’ll need it.'],
  ['denni','Gauges say something down there is still alive.','Now I can finally cut that feed.','Going to need more than a wrench to fix this.'],
  ['tyrone','Earth will answer when the gate opens.','Tell your Watchers which gate I chose.','The Zodiac will hear how far you got.'],
  ['semmenelin','Men with stones and torches have come before.','I have outlasted older fires than yours.','The Torch of the Heavens has found me.'],
  ['chastity','Three Bryans to find the right one. One more door is nothing.','If you see Roj, tell him Apple is coming.','Leave me the Ciphers’ names. I’ll bring them home.'],
  ['alberto','When this is over, I owe my cousin a talk.','Skyblender can wait. Get me to Patria.','Cousin, I hope you can hear me.'],
  ['aljo','The records have gaps. I want the people who were there.','Copy the log to the Society and to St. Gabriel.','The route’s still in the log. Try again.'],
  ['robin','The Resistance says the west road is gone. We’ll make another.','The ward is down. Move everyone through.','I can’t hold the seal, but I can show you how to draw it.'],
  ['carlson','You rode through Ringo? Tell me who made it out.','I’ll keep the trail open till Lovejoy calls in.','Somebody has to go back for the rest of the Resistance.'],
  ['fred','If this machine has a backup, I want to know where it’s wired.','Good. Now I can get to the bolts.','Don’t touch the leads till the core cools.'],
  ['ivanov','The signal remembers me. I’m trying to remember why.','The oldest memory stayed. I can live with that.','Something here still speaks with Enigma’s voice.'],
  ['lovejoy','If you lose me, find the relay I left at Ringo.','I’ll keep the link up till the last one’s through.','Tell Carlson the signal’s down. Not me, though.'],
  ['asmodeus','Sigma Ghost had the sense to bring an offering. What did you bring?','The Lagoon has room for one more soul.','Take your souls while I still allow it.'],
  ['gensys','Auxiliary units linked. Soul intake uninterrupted.','Primary route clear. Resuming harvest.','Hardware loss logged. Attempting remote restart.'],
  ['enigma','Willard heard your every wish. He told me all of them.','One world falls. The other doors are already open.','I left enough of myself to open another door.'],
  ['pandemic','Bryan said listen for my own heartbeat. Here it comes.','The shell’s quiet. You can talk to me now.','Bryan, step back. I need to hear myself.'],
  ['honey','One of my spirits says it remembers the gate too.','Lovejoy will want to meet the spirit who helped.','I wish I remembered the gate when it was quiet.'],
  ['maritess','I marked the prison route in frost. Let’s see who follows.','Leave the frost marks until all of us are through.','The ice will still lead you home. Follow it.'],
  ['arianne','I’ll draw the Cult off. Keep your head down.','Tell the sisters to cross before the smoke clears.','Keep going. My fire buys you a few more breaths.'],
  ['kz','Listen at the well. Whose voice is that?','The wells are clear. Bring the sisters through.','The old channel isn’t dry yet. Try it.'],
  ['michelle','We cross back over this bridge with both captives.','Good. Now bring the sisters up from the cells.','I’ll hold the bridge until my hand gives out.'],
  ['gary','Get a recording. I want to know which Ivan said that.','Two replies, one frequency. I saved them both.','The archive survived. We pull the log later.'],
  ['fernan','I drew my sword to keep this road open for Ifrit.','Take the prison road. I’ll hold till the last guard leaves.','Someone has to hold the gate when I fall.'],
  ['roj-demon','You know this melody. Ask yourself which Roj taught it to you.','The mask can stay off. I know who’s looking back.','Give me a moment. That memory has a voice I know.'],
  ['brayan','I heard the Choir break all the way from Shiva.','The Initiative will answer if that gate opens again.','Ask Shiva for one more watch. There’s still time.'],
  ['thazar','The Couple won’t get what they came for. The vessel is spoken for.','Tell Ivan the altar has its first offering.','The Cult knows how to wait for its king.'],
  ['azazel','Ask the spawn how it likes sharing a throne.','You opened a gate to Hell. I decide when it closes.','The vessel is lost. I can still hear the next door.']
].map(([id,intro,win,loss])=>[id,{intro,win,loss}]));

const campaignStageNotes = {
  1:[
    'Smoke is rising through the forest floor at Berican. Bryan and Jonneil trace it to an illegal Sigma mine, where Farrol and his guards are protecting something far older than the tunnels.',
    'The Hunters bring in their partner Victor to investigate the quakes under Colledo. A massive turbine is shaking the city apart, and somewhere deeper in the caves lies Genesis.',
    'A child has gone missing in the quarantined town of Canary, and the streets belong to the undead. The Hunters’ only way through is a wounded swordsman named Yokan and an old church bell.',
    'Lynne enters the Tartarus card tournament to win her grandfather’s ransom. Sigma has rigged the game: the Devil Gambit is waiting at the final table.',
    'The Ciphers crash on the island of Semmenelin, an ancient dragon. The miners left three stones behind. Set them in the altar, and the Torch of the Heavens may burn again.',
    'Father Luis finds the Ram, the first of Tyrone’s Zodiac pillars, at St. Gabriel Cathedral. Tyrone’s court clowns, Juster and Jester, guard the cathedral’s signal. The Book of Khan warns of twelve more pillars.',
    'The survivors regroup in Colledo as reports of Tyrone’s attacks pour in. The Ciphers have lost friends, and Bryan is no longer sure he can keep asking the others to fight.',
    'Tyrone’s pillars reach the mountains of Otaio. Clephus offers the Ciphers a ceasefire, and Karl finally confesses what really happened to Genesis.',
    'Azaha’s orbs fill the road to Gavarra with a choking fog. Jester’s bells guide Tyrone’s army through it. Lour keeps a path of light burning for the Ciphers.',
    'Tyrone means to drag Earth into Hades. Bryan and Yokan rejoin the team, and the Ciphers climb to his throne for the final battle.'
  ],
  2:[
    'Chastity’s search leads the Ciphers back to Genesis, and the crossing scatters them across Shiva. In the city of Nedo, a storekeeper named Asha knows the road to Patria.',
    'A train out of Boulder City is hijacked in a mountain tunnel. Sigma Ghost boards it hunting for Aeron of the Resistance, and Miguel and Alberto find each other in the chaos.',
    'The crossing left the Ciphers scattered over a world they have never seen. They must find their way to Shiva’s cathedral of St. Gabriel.',
    'The shamans of Patria are keeping Ranelle’s body alive, but his soul is gone. Aljo follows it into Lagoon Forest, where only Solomon’s sigil can wound the demons.',
    'The Archangels have heard of a plan to free Gensys, the machine imprisoned in Ifrit. At a machine annex on Shiva, the Ciphers find one of its combat frames already awake.',
    'At Shiva’s St. Gabriel Cathedral, the survivors learn that Roj is alive. He remembers Chastity, but his whole life on Earth is gone.',
    'The Earth half of Roj’s soul is locked in a Sigma Ghost laboratory on Klux. The Ciphers head for the runway with a plan to steal it back for Fallan’s rite.',
    'Jonneil solves his grandfather’s riddle and opens Khan’s temple. Its books describe the six worlds, and reveal who is really behind Sigma Ghost.',
    'The soul harvest grinds on as the Ciphers push toward the factory. Asmodeus stands in their way, unwilling to let go of the souls he has collected.',
    'Willard has used Legeon to scatter the Ciphers. Now he is ready to show his true face, and the factory keeps devouring souls while they fight.'
  ]
};

const characterEpilogues = {
  1:{
    juster:'With the court in ruins, Juster lowers the red curtain one last time and waits for Jester’s bell. He leaves the cathedral lights burning as the two clowns slip away down the northern road.',
    jester:'Jester muffles his last bell so no one can follow the court into the fog. He takes the long way around Gavarra, looking for Juster.',
    lour:'Lour says goodbye to the Ciphers after Gavarra and returns to a quieter life. She keeps a lamp in her window, in case Roj ever finds his way home.',
    chastity:'In this route, Chastity reaches the new Ciphers headquarters just as Yokan is digging Roj’s grave. She keeps all the questions she never got to ask him.',
    alberto:'In this route, Alberto sees the Skyblenders safely through the rescue. Watching Ranelle come home, he decides family matters more than rank.',
    aljo:'In this route, Aljo saves the original Colledo report. It will still be sitting in the files when Chastity comes asking about Bryan.',
    asmodeus:'In this route, Asmodeus watches the gate slam shut on his son’s plans for Earth. His court will hear about Tyrone’s failure soon enough.',
    thazar:'In this route, Thazar abandons the empty satellite beneath Fortress City and starts looking for a way to use the gateway himself.',
    'roj-demon':'In this route, the masked minstrel hears the echo of Gavarra fade. The next time a world calls for him, it will have to use his real voice.',
    bryan:'Bryan returns to the Ciphers with Father Luis and Yokan. With another war against Sigma on the horizon, he asks who wants to stay at the new headquarters. Nobody leaves.',
    jonneil:'Jonneil keeps the case files from the Hunters’ first investigations. The next time Genesis stirs, the Ciphers will know exactly where to look.',
    ranelle:'Ranelle returns to the Skyblenders and starts preparing the army for threats that might come from other worlds.',
    yokan:'At the new headquarters, Yokan raises a grave for Roj. “Till we meet again, brother.”',
    dice:'All of Abanel now knows who really killed those people. His name finally clear, Dice comes back to the Ciphers as they prepare to face Sigma again.',
    roj:'As his spirit leaves Gavarra, Roj promises the others that this will not be his last moment on Earth.',
    hope:'The Ciphers finally have time to rest. Hope thinks about Griselda, and about how far people will go to keep a home alive.',
    miguel:'Miguel flies back to Colledo with the Ciphers and helps chart the route. Lyle’s promotion no longer decides where he goes. He does.',
    bennedic:'While the others plan the new headquarters, Bennedic prepares to go back for Gallahan and find a way to break the spell.',
    fallan:'Fallan returns to the Temple of the Gods and begins preparing for a war between worlds.',
    lynne:'Lynne brings her deck home to Colledo. Her grandfather is gone, but the Ciphers are staying together, and she still has people worth fighting for.',
    clephus:'Clephus’s ceasefire holds just long enough for Earth to survive. The next time he calls Sigma back to Colledo, it will be on his own terms.',
    karl:'Karl helped close the gate, but he still hears the sound of Genesis cracking. The ceasefire gives him a little time to decide who he truly owes.',
    farrol:'Farrol waits for Clephus’s next order. The men who held the pass beside him may be his enemies again by morning.',
    mohammad:'Mohammad returns to the cracked tunnels under Colledo to study the wards now that Genesis is turning again.',
    denni:'Denni shuts down the last rigs near the turbine. He has the only readings from the first crack, and he is not letting anyone else have them.',
    tyrone:'This route imagines Tyrone holding his throne against a rival. As the gate closes, he hears the last promises of the Zodiac go unanswered.'
  },
  2:{
    chastity:'Chastity helps Bryan and Yokan raise the graves at Colledo. When she walks away from the stones, she carries Roj’s memory with her.',
    alberto:'Alberto returns to the Skyblender army in Ranelle’s honor. He still remembers begging his cousin to come back in Patria.',
    aljo:'Aljo and Bryan reopen the Hunters’ Society. Aljo returns as its executive manager and starts preparing for dangers from beyond Earth.',
    robin:'Robin stays on Shiva. Now that the Resistance is recognized as its defenders, he helps the factory’s survivors find their way home.',
    carlson:'Carlson stays with the Ciphers on Earth and swears to find Lovejoy, wherever Legeon threw her.',
    fred:'Fred returns to Ciphers headquarters with Bryan, Chastity, and the former Sigma fighters. If another crossing is coming, he has work to do.',
    ivanov:'Ivanov keeps the fragment of Enigma’s code as the soul factory falls. The memory outlives the machine that carried it.',
    lovejoy:'Lovejoy wakes alone in a strange cave and finds Genesis waiting there. She sits down beside the passage, hoping it can still lead her home.',
    asmodeus:'The souls he collected slip free of his bargain. Asmodeus withdraws from the Ciphers’ path, but a prince of Hell does not forget a debt.',
    gensys:'In this route, one last Gensys signal waits in a standby bank. Every active frame is gone.',
    enigma:'In this route, an echo of Enigma clings to the factory even as it collapses around him.',
    pandemic:'Pandemic listens for her own heartbeat as the breach closes. For the first time since Shiva, the symbiote lets her have the silence.',
    bryan:'Bryan brings Clephus and the other former Sigma fighters into the reopened Hunters’ Society and puts them to work defending Earth.',
    jonneil:'Jonneil stays on Shiva and teaches a new generation at Khan’s temple. He tells his grandfather’s jokes to every class.',
    ranelle:'Ranelle wakes in a world where a tribe worships his heavy machine gun as a sacred weapon. They ask him to lead them.',
    yokan:'Yokan prays for Lynne and Roj at the graves. When he leaves headquarters, he is still searching for his brother.',
    roj:'Roj’s last choice on Shiva is to walk back into the factory. Outside, Yokan and Chastity are still calling his name.',
    hope:'Hope wakes wounded in another world. As he limps away from the monsters, he runs into a man in black who wears Roj’s face.',
    miguel:'Miguel and Lynne wake side by side in an unknown empire. They face their captors with no idea which world Legeon chose for them.',
    lynne:'Lynne wakes beside Miguel in a place neither of them knows. The guards want their names before they will say where they are.',
    bennedic:'Bennedic leaves the Ciphers to visit his old band of warriors. Some debts have to be settled in person.',
    fallan:'Fallan returns to his temple and opens it to anyone who wants to learn how to defend their world.',
    clephus:'Clephus surrenders on Earth and accepts Bryan’s offer to serve as a defender. For the first time in years, he answers to no one in Sigma Ghost.',
    karl:'Karl returns to Ciphers headquarters with Clephus and the others. They begin peace talks with the groups still fighting on Earth.',
    denni:'Denni stays at Ciphers headquarters with Fred, Karl, and Clephus, helping to keep the peace. He and Fred still argue about bearings.',
    tyrone:'In this route, what remains of Tyrone learns why Sigma wanted him back. With the factory gone, there is nothing left of that bargain.',
    dice:'Legeon hurls Dice across Genesis along with five other Ciphers. In a world where even his shadows feel like strangers, he starts learning to move all over again.'
  },
  3:{
    ivanov:'In Ifrit, Ivanov helps Gary tell the clone signals apart from the piece of Enigma he carries. He keeps the old code as a memory, and answers the next call in his own voice.',
    honey:'Honey keeps her old name tag. When she and Lovejoy play together again, she asks her friend what the gate looked like on the day it first opened.',
    maritess:'Maritess leads her sisters home across Ifrit and makes sure every name lost in the prison is accounted for.',
    arianne:'Arianne returns to the sanctuary with the others. This time, the fire she keeps burning there is a welcome home.',
    kz:'KZ leaves marks at the wells so the Sol Sisters can find the old route if Ifrit’s relays ever go silent again.',
    michelle:'Michelle stays at the crossing until the last Sol Sister is safely across. Only then does she let the stone bridge settle.',
    gary:'Gary archives every call. He can trace where each Ivan came from, but one of them has stopped answering.',
    fernan:'Fernan returns to his post. Another breach could open anywhere, so he keeps the gate clear for whoever needs it next.',
    'roj-demon':'His memories restored, the dark minstrel leaves Ifrit with Chastity. On the road to Shiva, he still wears the demon form he woke in.',
    brayan:'Listher carries word of Azazel back to the Archangels’ Initiative on Shiva. When Roj and Chastity arrive, he is ready to listen.',
    thazar:'The vessel is gone. In this route, Thazar lives long enough to learn that Azazel escaped without any help from the Cult.',
    azazel:'The body was only a way in. Even without it, Azazel slips out through the door Genesis left open.',
    hope:'Hope recovers and talks with Roj before he leaves Ifrit. This time, he sees his friend’s face before he hears the voice.',
    chastity:'Chastity leaves for Shiva with Roj. Together they will ask the Initiative to help stop Azazel before he finds another body.',
    bryan:'Bryan sees Hope back on his feet. With Azazel loose beyond the gate, he makes sure every Cipher who crossed is accounted for before they leave Ifrit.',
    ranelle:'In this route, Ranelle’s call finally reaches Hope. He keeps the frequency open for the Ciphers still lost in other worlds.',
    roj:'Roj carries his recovered memories to Shiva with Chastity. He keeps the minstrel’s form and asks the Initiative to help him hunt Azazel.',
    fallan:'Fallan leaves the altar knowing Azazel no longer needs a vessel. He readies his wards for whatever body the king takes next.',
    bennedic:'Bennedic watches Roj leave for Shiva with his memories and his changed body. He remembers how much it meant when Bryan accepted him, beast and all.',
    aljo:'Aljo logs Hope’s rescue and the team’s return. He keeps the unverified Ivan transmissions on file, in case something changes.',
    lovejoy:'Lovejoy keeps watch by Genesis until Honey comes back. The child she met there is old enough now to ask about the worlds beyond it.',
    dice:'Somewhere else in the multiverse, Dice keeps drilling his new form. Every time a familiar shadow tempts him to fight the old way, he starts over.',
    enigma:'In this route, the remnant of Enigma hears another traveler slip out through Genesis. The breach is old enough now to remember them both.',
    gensys:'In this route, Gensys loses its relay in Ifrit, but one dormant frame still remembers the way back to the soul factory.',
    asmodeus:'In this route, Asmodeus watches the king escape without a body. He carries word of Azazel’s return back to his court.',
    tyrone:'In this route, Tyrone hears the passage close behind Azazel. This time, the gate carried one spirit and nothing more.'
  }
};

const characterEpilogueTitles = {
  1:{
    lour:'A Light Left Burning',juster:'The Curtain Falls',jester:'The Last Bell',chastity:'Questions for a Grave',
    alberto:'Family Before Rank',aljo:'The Original Report',asmodeus:'A Son’s Failure',thazar:'The Empty Satellite',
    'roj-demon':'An Echo Fades',
    bryan:'Who Will Stay',jonneil:'The First Case Files',ranelle:'Skyblender’s Next Watch',yokan:'Till We Meet Again',
    dice:'A Name Cleared',roj:'The Last Light at Gavarra',hope:'The Road Back to Griselda',
    miguel:'A Route of His Own',bennedic:'The Promise to Gallahan',fallan:'The Temple Reopens',lynne:'The Deck Comes Home',
    clephus:'When the Ceasefire Ends',karl:'What the Crack Cost',farrol:'One Last Watch at Otaio',
    mohammad:'The Wards Beneath Colledo',denni:'The Last Survey',tyrone:'An Empty Throne'
  },
  2:{
    chastity:'The Names on the Stones',alberto:'For My Cousin',aljo:'The Society Reopens',robin:'Defenders of Shiva',
    carlson:'A Trail Beyond Shiva',fred:'Back to the Workshop',lovejoy:'A Way Home',
    asmodeus:'The Bargain Unravels',gensys:'One Standby Signal',enigma:'The Heart of the Factory',
    pandemic:'Her Own Heartbeat',bryan:'The Work of Defenders',jonneil:'Khan’s Next Students',
    ranelle:'The Sacred Weapon',yokan:'Still Looking for His Brother',roj:'Back Into the Factory',hope:'A Face in the Dark',
    miguel:'Prisoners of an Unknown Empire',lynne:'Strangers Side by Side',bennedic:'The Old Band',
    fallan:'A Lesson for the Next Defenders',clephus:'The Promise to Surrender',
    karl:'A Different Order',denni:'A New Place for the Machines',
    ivanov:'The Memory Outlives the Machine',tyrone:'Nothing Left to Bargain',dice:'Strangers in the Shadows'
  },
  3:{
    honey:'The Games They Play',maritess:'The Names All Accounted For',arianne:'A Fire for Home',kz:'Signs at the Wells',
    michelle:'The Last One Across',gary:'The Silent Relay',fernan:'The Gate Stays Clear',
    'roj-demon':'The Road to Shiva',brayan:'What the Initiative Heard',thazar:'The King Beyond the Cult',
    azazel:'A Door Without a Vessel',ivanov:'One Voice of His Own',hope:'The Friend Behind the Mask',
    chastity:'Two Travelers to Shiva',bryan:'Everyone Accounted For',ranelle:'The Frequency Stays Open',
    roj:'The Minstrel’s Road',fallan:'Wards for the Next Body',bennedic:'Beast and All',aljo:'Unverified Transmissions',
    lovejoy:'Watch at the Gate',dice:'The New Form',enigma:'An Old Breach Remembers',gensys:'The Dormant Frame',
    asmodeus:'Word for the Court',tyrone:'One Spirit, Nothing More'
  }
};

const crossoverPrologueTitles = {
  1:{chastity:'The Road Back to Colledo',alberto:'A Skyblender Rescue',aljo:'The Altered Records',
    asmodeus:'What His Son Opened',thazar:'The Door Under Fortress City'},
  2:{bryan:'The Soul on Klux',jonneil:'The Riddle Khan Left',ranelle:'The Water at Patria',yokan:'A Cure in Another World',
    dice:'The Red Shadow in Kalixto',roj:'The Life Shiva Remembers',hope:'A Star Outside the Cell',miguel:'The Train to Patria',
    bennedic:'A Light in Gaddhi',fallan:'The Rite of Restoration',lynne:'What the Shamans Know',clephus:'The Locked Cells',
    karl:'The Proof Robin Asked For',denni:'The Warning Under Khan’s Temple',tyrone:'The Remains Through Genesis',
    ivanov:'The Pattern from the Machine'},
  3:{bryan:'The Call from Ifrit',ranelle:'A Cipher Still Alive',roj:'An Echo in the Modules',hope:'The Name Under the Mask',
    fallan:'A Vessel Becomes a Door',bennedic:'The Case for the Minstrel',chastity:'The Promise He Remembers',
    aljo:'Two Names on the Relay',lovejoy:'The Child at Genesis',dice:'The Form Beyond Ifrit',enigma:'A Second Breach',
    gensys:'The Signal from Confinement',asmodeus:'A King in Ifrit',tyrone:'A Gate That Could Carry an Army'}
};

function fighterEpilogue(fighter,season,ending) {
  const closing=characterEpilogues[season][fighter.id];
  return closing?{
    title:characterEpilogueTitles[season][fighter.id]??fighterDisplayName(fighter)+' Returns',
    paragraphs:[closing,...ending.paragraphs]
  }:ending;
}


seasonStories[4]={
  title:'Rise of the Ivans',
  world:'Zig',
  opening:zigOpening,
  chapters:[
    ['The Seven Ivans','Haunted by memories of hunts he never lived, Bennedic asks Aljo for help. Aljo introduces him to Ivan I, and Alberto tags along. Then the seven Ivans start sending signals that contradict each other.'],
    ['The Blood of the Shtrigoi','A Genesis hunter is stalking the Ciphers, the Resistance, and the Sol Sisters across every world. The Couple hold the crossings while Bennedic’s old Band of Brothers leads him to the clan his nightmares came from.'],
    ['Attack of the Ivans','The Ivans turn on the survivors, and Aljo sends the team to Zig. Ivanna reveals that the traitor has been wearing Ivan V’s face, then fights a command she cannot resist.'],
    ['The Call of Vankov','Vankov, the man who built the Ivans and then hacked his own creations, fuses seven cores into one body. The team has to cut every Ivan free of the Array before he swallows them whole.']
  ],
  ending:zigEnding
};
guestStoryStakes[4]=zigGuestStakes;
guestArrivals[4]='In this route, {name} answers Aljo’s call and joins the team tracing the Ivans’ attacks back to Zig.';
crossoverPrologueTitles[4]={bennedic:'Memories of the First Hunt',alberto:'The Crossing Together',aljo:'The Call from Zig',ivanov:'Seven Voices in the Static'};
characterEpilogueTitles[4]=Object.fromEntries(Object.entries(zigClosings).map(([id,[title]])=>[id,title]));
characterEpilogues[4]=Object.fromEntries(Object.entries(zigClosings).map(([id,[,line]])=>[id,line]));

// Each pool is limited to people physically present or involved in this chapter.
const storyStageOpponents = {
  1:[
    ['bryan','jonneil','farrol'],
    ['karl','denni','mohammad'],
    ['yokan','dice','lour'],
    ['lynne','yokan'],
    [],
    ['juster','jester'],
    ['ranelle','bennedic','bryan'],
    ['clephus','karl','farrol'],
    ['jester','juster','lour'],
    []
  ],
  2:[
    ['miguel','chastity'],
    ['alberto','miguel','carlson'],
    ['robin','carlson','lovejoy'],
    ['aljo','alberto','ranelle'],
    [],
    ['chastity','roj','bryan'],
    ['fallan','fred','clephus'],
    ['jonneil','karl','robin'],
    [],
    []
  ],
  3:[
    ['michelle','maritess'],
    ['kz','gary'],
    ['berico','oliquino'],
    ['oliquino','berico','thazar'],
    [],
    ['maritess','arianne','hope'],
    ['gary','ivanov'],
    ['fernan','thazar'],
    ['brayan','bennedic','arianne'],
    []
  ],
  4:[
    ['alberto','aljo'],
    ['oliquino','berico'],
    ['precious','michelle'],
    ['berico','oliquino','alberto'],
    [],
    ['clark','aljo'],
    ['ivanna','precious'],
    ['ivanov'],
    ['ivanov'],
    []
  ]
};

const stageRivalLines = {
  1:{
    0:{farrol:['Sigma pays me to guard this hole. Walk away.','Fine. Tell Clephus what you found. Better he hears it from you.']},
    5:{
      juster:['Tyrone wants this door open for his troops. Guard up.','The court’s already marching east. Bravo.'],
      jester:['Juster has the signal. My job is making sure you never answer it.','Listen for the next bell. It rings near Gavarra.']
    },
    8:{
      jester:['The bell calls Tyrone’s army. The fog swallows everyone else.','You beat the bell. Tyrone is already past the fog.'],
      juster:['You made it to Gavarra. Let’s see you reach the throne.','Go on. Jester already warned him.'],
      lour:['My ward is ready. Test your eyes in this fog before you go in.','Follow the light on the ground. It will last until the throne.']
    }
  },
  2:{
    0:{miguel:['Asha told me to follow the rails to Patria. How’d you get here?','Catch the Boulder City train. If I find Alberto, I’ll bring him.']},
    3:{ranelle:['Somebody is calling me. Show me where the voice is coming from.','I see the shore now. Keep talking until I reach it.']},
    6:{clephus:['I need that chamber intact. Sigma didn’t cross worlds to leave empty-handed.','Take the runway. I know what those guards do when the signal drops.']}
  },
  3:{
    2:{
      berico:['I followed the last pulse here. Where is my child?','The pulse is still there. Oliquino, follow it with me.'],
      oliquino:['The signal ends at this crossing. Someone here knows why.','Berico, meet me at the sanctuary. We still have a lead.']
    },
    3:{
      berico:['Thazar meant to use our child. Stand aside while we take the gate.','I’ll leave the gate open. We follow the other trail.'],
      oliquino:['I heard the Cult’s offer. They never meant to give our child back.','Keep your sanctuary. Just leave us the crossing.'],
      thazar:['The Couple are about to strike. We can haggle afterward.','Your sister will be freed. The masked one is already gone.']
    },
    6:{ivanov:['I can carry Aljo’s answer over the relay. Test the link while it holds.','The modules are on their way. I’ll keep the voices apart.']},
    7:{thazar:['Hands off the forge. My king has everything he needs.','Too late. The rite is already moving to the altar.']}
  },
  4:{
    0:{aljo:['Before you take my people through that relay, prove you can bring them home.','Ivan I is ready. I’ll hold the channel from here.']},
    1:{
      oliquino:['Something followed the thread I left for my child. How did you find it?','The hunter used the same trail. Follow the signal to the pass.'],
      berico:['You came down the path we marked for our child. Why?','Then help us find who is using our crossings.']
    },
    2:{michelle:['Precious is getting people out. Hold the bridge with me until she’s clear.','The bridge holds. The clan’s trail runs through the pass.']},
    3:{
      berico:['Oliquino, get back from the breach. I can feel it in my hands.','It’s gone. It fled toward the forge.'],
      oliquino:['Berico, the hunter is pulling on our thread. It can’t reach the child.','The thread is free. Its next crossing leads to the forge.'],
      alberto:['We draw the hunter off together. Where will you take cover?','The Couple’s trail leads to the forge. I’ll take the other door.']
    },
    5:{aljo:['Clark’s marker is still online. Watch your footing on Zig.','The terminal is open. Let’s find who sent that command.']},
    6:{precious:['Ivanna got a warning out. We can still reach her by the causeway.','I’ll hold this route. Look for the signal hiding under hers.']}
  }
};
