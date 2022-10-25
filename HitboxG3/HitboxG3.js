/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxG3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxG3/costumes/costume1.svg", {
        x: 83.68642,
        y: 57.689094999999995
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxG3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
    this.visible = false;
    while (true) {
      this.visible = false;
      if (this.stage.vars.hitg == 1) {
        this.visible = true;
        yield* this.wait(0.05);
        this.stage.vars.hitg = 0;
      }
      yield;
    }
  }
}
