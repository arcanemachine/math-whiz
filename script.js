/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

"use strict";

function aMathWhizComponent() {
  return {
    init() {
      window.ccc = this;
    },

    // events
    eventKeydownHandle(e) {
      // only handle events in game loop
      if (!this.gameLoopIsActive) return;

      // ignore if modifier keys pressed
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;

      e.preventDefault();

      if (e.key === "Enter") this.answerSubmit();
      else if (e.key === "Backspace") this.answerFieldBackspace();
      else if (e.key === "Escape") this.answerFieldClear();
      else if (Number(e.key)) this.answerFieldAppend(e.key);
      else if (e.key === ".") this.answerFieldAppend(e.key);
    },

    // game
    gameLoopIsActive: true,
    gameStyle: "addition",

    gameStart() {
      this.gameLoopIsActive = true;
    },

    gameStop() {
      this.gameLoopIsActive = false; // exit the game
      this.modalMenuGameExitConfirm.hide(); // hide the modal
    },

    // modals
    get modalMenuMain() {
      return bootstrap.Modal.getOrCreateInstance("#menu-modal");
    },

    get modalMenuGameExitConfirm() {
      return bootstrap.Modal.getOrCreateInstance(
        "#menu-game-exit-confirm-modal"
      );
    },

    // questions
    questionAmount: 10,
    questionCurrent: 0,
    questionNumberFirst: 0,
    questionNumberSecond: 0,
    questionOperator: "+",

    // numbers
    numberFirstMin: 1,
    numberFirstMax: 1,
    numberSecondMin: 1,
    numberSecondMax: 1,
    numberDecimalCount: 0,

    // answers
    answerCorrectCount: 0,
    answerFieldValue: "",
    answerFieldClear() {
      this.answerFieldValue = "";
    },
    answerFieldAppend(val) {
      this.answerFieldValue += val;
    },
    answerFieldBackspace() {
      this.answerFieldValue = this.answerFieldValue.substring(
        0,
        this.answerFieldValue.length - 1
      );
    },
    answerSubmit() {},
  };
}
