/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CloneDelD extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CloneDelD/costumes/costume1.svg", {
        x: 32.25,
        y: 52.3249850000001
      })
    ];

    this.sounds = [new Sound("pop", "./CloneDelD/sounds/pop.wav")];

    this.triggers = [];
  }
}
