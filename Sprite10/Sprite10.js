/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite10/costumes/costume1.svg", {
        x: 97.5,
        y: 60.69999694824219
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite10/sounds/pop.wav"),
      new Sound("phase1v3", "./Sprite10/sounds/phase1v3.wav"),
      new Sound("dating fight", "./Sprite10/sounds/dating fight.mp3"),
      new Sound("phase1v4", "./Sprite10/sounds/phase1v4.wav"),
      new Sound("phase1v2 intro", "./Sprite10/sounds/phase1v2 intro.wav"),
      new Sound(
        "phase1v4 vinyl star end",
        "./Sprite10/sounds/phase1v4 vinyl star end.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart4)
    ];
  }

  *whenIReceiveStart() {
    this.audioEffects.volume = 100;
    this.stage.vars.introFin = 0;
    yield* this.playSoundUntilDone("phase1v2 intro");
    this.stage.vars.introFin = 1;
    yield* this.playSoundUntilDone("phase1v4");
    while (true) {
      yield* this.playSoundUntilDone("phase1v4 vinyl star end");
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.stage.vars.counter = 1;
  }

  *whenIReceiveStart3() {}

  *whenIReceiveStart4() {
    while (true) {
      if (this.stage.vars.viesJ1 == 0) {
        this.audioEffects.volume = 0;
      }
      if (this.stage.vars.viesJ2 == 0) {
        this.audioEffects.volume = 0;
      }
      yield;
    }
  }
}
