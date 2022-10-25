/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxG2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxG2/costumes/costume1.svg", {
        x: 94.92491999999999,
        y: 57.69710500000001
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxG2/sounds/pop.wav")];

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
