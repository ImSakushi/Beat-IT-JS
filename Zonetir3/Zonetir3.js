/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Zonetir3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Zonetir3/costumes/costume1.svg", {
        x: 3.892857142857139,
        y: 3.25
      })
    ];

    this.sounds = [new Sound("pop", "./Zonetir3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {}

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    while (true) {
      if (this.touching(this.sprites["Redmic"].andClones())) {
        this.stage.vars.tir = 3;
      }
      yield;
    }
  }
}
