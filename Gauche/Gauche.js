/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gauche extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gauche", "./Gauche/costumes/gauche.png", { x: 480, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "tir" }, this.whenIReceiveTir),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    yield* this.wait(1.3);
    if (this.stage.vars.randoAttaque == 4) {
      this.visible = true;
      this.effects.ghost = 0;
      this.stage.vars.hitboxfollowG = 1;
      while (true) {
        this.x += 3;
        if (this.stage.vars.hitg == 1) {
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["CloneDelG"].andClones())) {
          this.deleteThisClone();
        }
        yield;
      }
    }
  }

  *whenIReceiveStart() {}

  *whenIReceiveStart2() {
    this.stage.vars.randoAttaque = 1;
    this.effects.ghost = 100;
    while (true) {
      while (
        !(this.stage.vars.timer2[this.stage.vars.counter - 1] < this.timer)
      ) {
        yield;
      }
      this.stage.vars.randoAttaque = this.random(1, 4);
      if (this.stage.vars.introFin == 1) {
        this.stage.vars.counter += 1;
        this.stage.vars.sick = 0;
        this.stage.vars.bad = 0;
        this.stage.vars.good = 0;
        this.visible = true;
        this.effects.ghost = 100;
        this.goto(-185, 0);
        this.stage.vars.vitesseTirG = 3;
        this.createClone();
        yield* this.wait(0.3);
      }
      yield;
    }
  }

  *whenIReceiveTir() {}

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
  }
}
