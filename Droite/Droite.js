/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Droite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("droite", "./Droite/costumes/droite.png", { x: 480, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "tir" }, this.whenIReceiveTir),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *startAsClone() {
    yield* this.wait(1.3);
    if (this.stage.vars.randoAttaque == 2) {
      this.visible = true;
      this.effects.ghost = 0;
      this.stage.vars.hitboxfollowD = 1;
      while (true) {
        this.x += -3;
        if (this.stage.vars.hitd == 1) {
          yield* this.wait(0.15);
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["CloneDelD"].andClones())) {
          this.deleteThisClone();
        }
        yield;
      }
    }
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.effects.ghost = 100;
  }

  *whenIReceiveTir() {}

  *whenIReceiveStart2() {
    this.effects.ghost = 100;
    while (true) {
      while (
        !(this.stage.vars.timer2[this.stage.vars.counter - 1] < this.timer)
      ) {
        yield;
      }
      if (this.stage.vars.introFin == 1) {
        yield* this.wait(0);
        this.visible = true;
        this.effects.ghost = 100;
        this.goto(-5, 0);
        this.stage.vars.vitesseTirD = -3;
        this.createClone();
        yield* this.wait(0.3);
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
  }
}
