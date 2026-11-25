# Broken Genesis

Broken Genesis is a retro arcade-style 2D fighting game with an original cast, illustrated combat sprites, and two story campaigns. Play in your browser, install a standalone build, or run the source locally.

[Play in your browser](https://broken-genesis.bluishcatkin3.chatgpt.site) · [Download the latest release](https://github.com/agentroj/broken-genesis-fg/releases/latest)

## Download and install

The standalone editions include the full game and its assets for offline play.

- **Windows (x64 and ARM64)** — Download and run [Broken-Genesis-Windows-Setup.exe](https://github.com/agentroj/broken-genesis-fg/releases/latest/download/Broken-Genesis-Windows-Setup.exe). Setup adds a Start menu shortcut for the current user. Press **F11** in the game to toggle full screen.
- **macOS (Apple silicon and Intel)** — Open [Broken-Genesis-macOS.dmg](https://github.com/agentroj/broken-genesis-fg/releases/latest/download/Broken-Genesis-macOS.dmg) and drag **Broken Genesis** into **Applications**. Use **Control + Command + F** to toggle full screen.
- **Android** — Open [Broken-Genesis-Android.apk](https://github.com/agentroj/broken-genesis-fg/releases/latest/download/Broken-Genesis-Android.apk) on your device and install it. The signed APK is for sideloading and uses Android System WebView. The app opens in landscape with touch controls.

Windows Setup is unsigned. The macOS app is ad hoc signed and has no Apple notarization. See the release notes for artifact checksums and verification details.

## Game modes

- **Arcade** — Pick both fighters or use Random. Choose Player vs CPU, Player vs Player on one keyboard, or CPU vs CPU. Choose Easy, Normal, or Hard when a CPU is playing.
- **Story** — Choose either ten-level season and pick any of the 30 playable fighters, or choose Random. The opponent roster follows the campaign season. The campaign advances after each match you win and offers a retry after a loss.
- **Tag Team** — Pick two fighters per side. Switch fighters during combat or let the reserve take over after a knockout. Use a Team Super when both teammates are available and the active fighter's Skill bar is full. Player vs CPU, local Player vs Player, and CPU vs CPU are available.

### Story campaigns

- **Season 1** — Season 1 opponents, with Semmenelin at level 5 and Tyrone at level 10.
- **Season 2** — Season 2 opponents, with Gensys at level 5, Asmodeus at level 9, and Enigma at level 10.

The campaigns include story openings and endings, pre-fight and post-fight dialogue, special exchanges between related fighters, and boss transformation sequences.

### Playable roster

**Season 1** — Bryan, Jonneil, Ranelle, Yokan, Dice, Roj, Hope, Miguel, Bennedic, Fallan, Lynne, Clephus, Karl, Farrol, Mohammad, Denni, and Tyrone.

**Season 2** — Chastity, Alberto, Aljo, Robin, Carlson, Fred, Ivanov, Honey, Lovejoy, Asmodeus, Gensys, Enigma, and Pandemic.

## Combat

- Use low, medium, and high punches and kicks. Some fighters use weapons or equipment in their attack slots. Fighters with a projectile can also use the dedicated projectile button.
- Hold Guard to block. Build a full Skill bar to use one of two character supers, or a Team Super in Tag Team. The Skill bar glows when it is full. Guard stops super damage from the front.
- Double-tap Left or Right to dash. Double-tap Jump to high jump. The combo counter tracks consecutive hits.
- The game includes dedicated guard, punch, kick, casting, victory, and defeat poses, alternate colors for mirror matches, and 13 arenas, including locations in Shiva World.
- Matches default to two rounds with a deciding round if the score is tied. Settings supports two to five scheduled rounds. Individual story bosses can have their own round rules.

## Default controls

| Action | Player 1 | Player 2 |
| --- | --- | --- |
| Move left / right | A / D | Left / Right Arrow |
| Jump / high jump | W / W twice | Up Arrow / Up Arrow twice |
| Guard | S | Down Arrow |
| Low / medium / high punch | J / K / L | 1 / 2 / 3 |
| Low / medium / high kick | U / I / O | 4 / 5 / 6 |
| Projectile | H | 7 |
| Switch fighter | Q | 8 |
| Super 1 | L + O | 3 + 6 |
| Super 2 | K + I | 2 + 5 |
| Team Super | U + J | 4 + 1 |

Player 2 uses the number row. **Help** shows the current bindings and fighter-specific moves. Use **Settings** to remap controls, adjust music and sound effects separately, choose one of three soundtracks, and set round count and touch controls.

On a touchscreen, use the left joystick for movement, jump, and guard. Flick up twice to high jump. Use the right-side buttons to attack or tag. If the overlay is hidden, set **Touch controls** to **On**.

## Run the web source locally

Clone the repository and use either Docker or a static file server.

```sh
git clone https://github.com/agentroj/broken-genesis-fg.git
cd broken-genesis-fg
```

**Docker**

```sh
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080).

**Python 3**

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open [http://localhost:8080](http://localhost:8080). The web version runs as a static HTML, CSS, and JavaScript game. `index.html` contains the UI and game loop, and `assets/` contains the artwork, stories, and combat modules.

## Report an issue

When reporting a bug, include your platform, release version, game mode, fighters, and steps to reproduce it. [GitHub Issues](https://github.com/agentroj/broken-genesis-fg/issues)
