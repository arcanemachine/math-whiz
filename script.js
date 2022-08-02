/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

"use strict";

function aMathWhizComponent() {
  return {
    init() {
      window.ccc = this;
    },

    // game
    gameLoopIsActive: true,
    gameStyle: 'addition',

    gameStart() {
      this.gameLoopIsActive = true;
    },

    gameExit() {
      this.gameLoopIsActive = false; // exit the game
      this.modalMenuGameExitConfirm.hide(); // hide the modal
    },

    // modals
    get modalMenuMain() {
      return bootstrap.Modal.getOrCreateInstance('#menu-modal');
    },

    get modalMenuGameExitConfirm() {
      return bootstrap.Modal.getOrCreateInstance('#menu-game-exit-confirm-modal');
    },

    // questions
    questionAmount: 10,
    questionCurrent: 0,
    questionNumberFirst: 0,
    questionNumberSecond: 0,
    questionOperator: '+',

    // numbers
    numberFirstMin: 1,
    numberFirstMax: 1,
    numberSecondMin: 1,
    numberSecondMax: 1,
    numberDecimalCount: 0,
    numberInputValue: "",

    // answers
    answerCorrectCount: 0,
  };
}
