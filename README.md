# Virtual Dog Park
A dog encyclopedia and virtual pet website built for a first-year programming lab.

## Features

- Explore Beagles, Golden Retrievers, and Poodles.
- Adopt one virtual dog and choose its name.
- Feed and play with the dog to increase happiness.
- Advance days and watch the dog grow.
- Save and restore progress using browser local storage.
- Start over with a confirmation message.
- Responsive layout for smaller screens.

## How to Run

1. Open this folder in Visual Studio Code.
2. Install the Live Server extension by Ritwick Dey.
3. Open `index.html`.
4. Click **Go Live** in the bottom-right corner of VS Code.

## Game Rules

- A newly adopted dog starts on Day 1 as a Puppy with 50 happiness.
- Feeding or playing increases happiness by 10, up to 100.
- Each new day reduces happiness by 5, but never below 0.
- Day 1 is Puppy, Days 2–3 are Young Dog, and Day 4 onward is Adult Dog.
- Progress is saved in this browser on this device. It is not uploaded to a GitHub account.

## Manual Testing Checklist

- [ ] All three breeds and illustrations appear.
- [ ] An empty name is rejected.
- [ ] Names with surrounding spaces are trimmed.
- [ ] Names longer than 20 characters are rejected.
- [ ] Feeding and playing never increase happiness above 100.
- [ ] Happiness never falls below 0.
- [ ] The growth stage changes on the correct day.
- [ ] Refreshing the page restores saved progress.
- [ ] Cancelling Start Over preserves progress.
- [ ] Confirming Start Over removes saved progress.
- [ ] The layout works on a narrow screen.

## Illustrations

The dog illustrations are original SVG drawings created for this project. They are illustrations, not photographs of real dogs.

## Technologies

HTML, CSS, JavaScript, and browser local storage.

