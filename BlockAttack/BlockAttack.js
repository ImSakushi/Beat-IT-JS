/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockAttack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BlockAttack/costumes/costume1.svg", {
        x: 3.217950000000002,
        y: 56.11538384615369
      })
    ];

    this.sounds = [new Sound("pop", "./BlockAttack/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
  }
}
