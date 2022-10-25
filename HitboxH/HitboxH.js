/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxH extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxH/costumes/costume1.svg", {
        x: 152.02692882308975,
        y: 39.84880262615866
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxH/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
    this.visible = false;
    while (true) {
      this.visible = false;
      if (this.stage.vars.hith == 1) {
        this.visible = true;
        yield* this.wait(0.05);
        this.stage.vars.hith = 0;
      }
      yield;
    }
  }
}
