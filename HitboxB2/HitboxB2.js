/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxB2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxB2/costumes/costume1.svg", {
        x: 151.98141580910453,
        y: 39.75000296801022
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxB2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
    this.stage.vars.hitb = 0;
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
