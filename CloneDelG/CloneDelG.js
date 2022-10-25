/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CloneDelG extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CloneDelG/costumes/costume1.svg", {
        x: 23.617647058823508,
        y: 52.99412459530096
      })
    ];

    this.sounds = [new Sound("pop", "./CloneDelG/sounds/pop.wav")];

    this.triggers = [];
  }
}
