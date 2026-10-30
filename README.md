# Rock Paper Scissors — UI

JavaScript practicum group assignment, implemented with plain HTML, CSS and JavaScript.

## Run locally

Open `index.html` in a modern browser. No installation, build step or account is required.
Alternatively, use VS Code Live Server to open the project folder.

## Assignment coverage

- Three native buttons call `playRound` with the player's selection.
- The computer chooses a random move for each round.
- Results and running scores appear in the DOM, including accessible status announcements.
- Ties award no points. The first player to five wins, regardless of the number of rounds.
- Move buttons lock after the game ends; New game clears both scores.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page structure and controls |
| `style.css` | Responsive layout, colours and focus styles |
| `script.js` | Application state and event handlers |
| `test.cjs` | Dependency-free Node regression tests |
| `PRESENTATION.md` | Demo outline and teammate handover |

## Automated checks

Install Node.js 22 or newer, then run `npm test`. No `npm install` is needed.
The tests execute the actual script in an isolated DOM stub. They cover logic and
state transitions; visual layout and real browser behaviour require the manual checklist.

## Manual checks

- Play using only Tab and Enter/Space; verify each move is reachable.
- Confirm a tie changes neither score.
- Play until one score reaches five; confirm further rounds are blocked.
- Restart; confirm both scores are zero and all three moves work again.

## Working together

Pull the latest `main` before starting. Create a branch for your change, use a clear
commit message, and open a pull request describing what changed and how you checked it.
Keep styling changes in `style.css` and behaviour changes in `script.js` where practical.

See `PRESENTATION.md` for suggested preparation before Saturday, 31 October 2026.
