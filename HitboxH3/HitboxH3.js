/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxH3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxH3/costumes/costume1.svg", {
        x: 151.94899882308977,
        y: -10.487967373841343
      })
    ];

    this.sounds = [new Sound("pop", "./HitboxH3/sounds/pop.wav")];

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
