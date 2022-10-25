/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxB3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxB3/costumes/costume1.svg", {
        x: 151.97095580910454,
        y: 28.445302968010253
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxB3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
    this.visible = false;
    while (true) {
      this.visible = false;
      if (this.stage.vars.hitb == 1) {
        this.visible = true;
        yield* this.wait(0.05);
        this.stage.vars.hitb = 0;
      }
      yield;
    }
  }
}
