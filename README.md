<div align="center">
<br>

<h1>mystery-box</h1>

<p><sup>MysteryBox is a lightweight JavaScript class for creating an interactive mini-game with "mystery boxes." It allows you to easily configure the number of rounds, the delay before showing results, and custom event handlers for round start and end.</sup></p>

[![npm](https://img.shields.io/npm/v/mystery-box.svg?colorB=brightgreen)](https://www.npmjs.com/package/mystery-box)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/mystery-box.svg)](https://github.com/ux-ui-pro/mystery-box)
[![NPM Downloads](https://img.shields.io/npm/dm/mystery-box.svg?style=flat)](https://www.npmjs.org/package/mystery-box)

<a href="https://codepen.io/ux-ui/pen/ZYEErYj">Demo</a>

</div>
<br>

&#10148; **Install**
```console
$ yarn add mystery-box
```
<br>

&#10148; **Import**
```javascript
import MysteryBox from 'mystery-box';
```
<br>

&#10148; **Usage**
```javascript
const mysteryBox = new MysteryBox({
  showResultDelay: 1000,
  roundResetDelay: 1000,
  roundsTotal: 3,
  onRoundStart: (round) => console.log(`Round ${round} started`),
  onRoundEnd: (round) => {
    switch (round) {
      case 1:
        console.log(`Round ${round} complete`);
        break;
      case 2:
        console.log(`Round ${round} complete`);
        break;
      case 3:
        console.log(`Round ${round} complete`);
        break;
      ...
    }
  },
  onGameEnd: () => console.log(`Game finished`),
});

mysteryBox.init();
```
<br>

&#10148; **Options**

| Option            |    Type    | Default | Description                                                |
|:------------------|:----------:|:-------:|:-----------------------------------------------------------|
| `showResultDelay` |  `number`  | `1000`  | Delay before showing results (in ms).                      |
| `roundResetDelay` |  `number`  | `1000`  | Delay before resetting round (in ms).                      |
| `roundsTotal`     |  `number`  |   `2`   | Total number of rounds.                                    |
| `onRoundStart`    | `function` | `null`  | Callback function triggered at the start of each round.    |
| `onRoundEnd`      | `function` | `null`  | Callback function triggered at the end of each round.      |
| `onGameEnd`       | `function` | `null`  | Callback function triggered when all rounds are completed. |
<br>

&#10148; **Methods**

| Method   | Parameters  | Returns  | Description                                               |
|:---------|:-----------:|:--------:|:----------------------------------------------------------|
| `init()` |      -      |  `void`  | Initializes the mystery box and attaches event listeners. |
<br>

&#10148; **Behavior**

- The game consists of multiple rounds (roundsTotal), starting from 1 and with no upper limit.
- Each round starts when the user clicks an item inside `.mystery-box`.
- After a short delay (`showResultDelay`), the result of the round is revealed:
  - The clicked item gets `box-won` class.
  - The other items get `box-loss` class.
- After another delay (`roundResetDelay`), the game resets for the next round.
- When the last round finishes, the `onGameEnd` callback is triggered.
<br><br>

&#10148; **License**

mystery-box is released under MIT license
