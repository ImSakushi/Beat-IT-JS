/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxH2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxH2/costumes/costume1.svg", {
        x: 151.96399882308975,
        y: 0.7505326261586447
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxH2/sounds/pop.wav")];

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
