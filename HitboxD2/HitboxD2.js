/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxD2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxD2/costumes/costume1.svg", {
        x: 134.14512870187465,
        y: 57.795560678145904
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxD2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
    this.visible = false;
    while (true) {
      this.visible = false;
      if (this.stage.vars.hitd == 1) {
        this.visible = true;
        yield* this.wait(0.05);
        this.stage.vars.hitd = 0;
      }
      yield;
    }
  }
}
