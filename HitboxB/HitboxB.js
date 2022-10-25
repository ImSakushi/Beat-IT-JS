/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxB extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxB/costumes/costume1.svg", {
        x: 152.00706580910455,
        y: 15.055852968010242
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxB/sounds/pop.wav")];

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
