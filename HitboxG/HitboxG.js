/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HitboxG extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HitboxG/costumes/costume1.svg", {
        x: 134.02324,
        y: 57.71424499999999
      })
    ];

    this.sounds = [
      new Sound("pop", "./HitboxG/sounds/pop.wav"),
      new Sound("phase1v4", "./HitboxG/sounds/phase1v4.wav"),
      new Sound(
        "phase1v4 vinyl star end",
        "./HitboxG/sounds/phase1v4 vinyl star end.wav"
      ),
      new Sound("phase1v2 intro", "./HitboxG/sounds/phase1v2 intro.wav")
    ];

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
