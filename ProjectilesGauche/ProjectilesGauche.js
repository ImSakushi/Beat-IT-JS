/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ProjectilesGauche extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("white", "./ProjectilesGauche/costumes/white.png", {
        x: 49,
        y: 213
      }),
      new Costume("red", "./ProjectilesGauche/costumes/red.png", {
        x: 49,
        y: 213
      }),
      new Costume("yellow", "./ProjectilesGauche/costumes/yellow.png", {
        x: 49,
        y: 213
      }),
      new Costume("light blue", "./ProjectilesGauche/costumes/light blue.png", {
        x: 49,
        y: 213
      }),
      new Costume("blue", "./ProjectilesGauche/costumes/blue.png", {
        x: 49,
        y: 213
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *startAsClone() {
    while (true) {
      if (this.touching(this.sprites["BlockAttack2"].andClones())) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.goto(28, 42);
    while (true) {
      if (this.stage.vars.attaqueG2 == 1) {
        yield* this.wait(0.1);
        this.createClone();
        this.stage.vars.attaqueG2 = 0;
      }
      yield;
    }
  }

  *startAsClone2() {
    this.effects.ghost = 0;
    this.visible = true;
    if (this.stage.vars.tir == 1) {
      this.goto(28, 42);
      while (true) {
        this.x += this.stage.vars.vitesseTirG;
        yield;
      }
    }
    if (this.stage.vars.tir == 2) {
      this.goto(28, -3);
      while (true) {
        this.x += this.stage.vars.vitesseTirG;
        yield;
      }
    }
    if (this.stage.vars.tir == 3) {
      this.goto(28, -43);
      while (true) {
        this.x += this.stage.vars.vitesseTirG;
        yield;
      }
    }
  }

  *startAsClone3() {
    yield* this.wait(2);
    while (true) {
      if (this.touching("edge")) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *startAsClone4() {
    if (this.stage.vars.sick == 1) {
      this.stage.vars.vitesseTirG = 4;
      while (!(this.stage.vars.sick == 0)) {
        this.costume = "red";
        yield* this.wait(0.05);
        this.costume = "blue";
        yield* this.wait(0.05);
        this.costume = "yellow";
        yield* this.wait(0.05);
        this.costume = "light blue";
        yield;
      }
    } else {
      this.costume = "white";
    }
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
  }
}
