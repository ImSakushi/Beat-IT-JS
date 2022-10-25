/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CloneDelB extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CloneDelB/costumes/costume1.svg", {
        x: 32.375,
        y: 43.69998500000003
      })
    ];

    this.sounds = [new Sound("pop", "./CloneDelB/sounds/pop.wav")];

    this.triggers = [];
  }
}
