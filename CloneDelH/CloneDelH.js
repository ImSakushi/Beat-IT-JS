/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CloneDelH extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CloneDelH/costumes/costume1.svg", {
        x: 33.25,
        y: 43.69999694824219
      })
    ];

    this.sounds = [new Sound("pop", "./CloneDelH/sounds/pop.wav")];

    this.triggers = [];
  }
}
