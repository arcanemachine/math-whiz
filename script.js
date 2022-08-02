/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

"use strict";

function aMathWhizComponent() {
  return {
    init() {
      window.ccc = this;
    },

    gameLoopIsActive: false,

    gameStart() {
      this.gameLoopIsActive = true;
    },

    // modals
    get modalMenuMain() {
      return bootstrap.Modal.getOrCreateInstance('#menu-modal');
    },

    get modalMenuGameExitConfirm() {
      return bootstrap.Modal.getOrCreateInstance('#menu-game-exit-confirm');
    }

  };
}
