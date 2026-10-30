# Rock Paper Scissors — UI: presentation and handover

## Current implementation

The required functionality is implemented. Automated regression checks pass.
A real-browser walkthrough is still required; the tests do not verify rendering.

## Demo outline

1. Play a round and explain the button listener → `playRound` → DOM update flow.
2. Explain the `beats` lookup and why ties do not change either score.
3. Reach five points, show the winner and disabled move buttons, then restart.

## Suggested teammate work before Saturday

1. Run the application and work through every manual check in the README.
2. Record browser/device and expected versus actual results; fix any issue in a separate commit.
3. Review the layout on a phone-sized window and desktop; contribute styling or usability refinements you can explain.
4. Prepare screenshots and your section of the demo using the outline above.
5. Walk through the JavaScript together so both teammates can explain the logic.

These are suggested tasks, not a record of work already completed by either teammate.

## Collaboration commands

```sh
git pull --ff-only
git switch -c review/presentation-checks
# Make and test your changes.
git add .
git commit -m "Improve presentation layout and document browser checks"
git push -u origin review/presentation-checks
```

Only commit files you have reviewed. Choose a message that matches your actual change.
