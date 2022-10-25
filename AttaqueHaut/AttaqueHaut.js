/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AttaqueHaut extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AttaqueHaut/costumes/costume1.svg", {
        x: 12,
        y: 4.923055000000005
      })
    ];

    this.sounds = [new Sound("pop", "./AttaqueHaut/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {}

  *whenIReceiveStart() {
    this.visible = false;
  }
}
