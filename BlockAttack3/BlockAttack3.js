/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockAttack3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BlockAttack3/costumes/costume1.svg", {
        x: 12.287417598034864,
        y: 3.2880058992367083
      })
    ];

    this.sounds = [new Sound("pop", "./BlockAttack3/sounds/pop.wav")];

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
