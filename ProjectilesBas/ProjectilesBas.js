/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ProjectilesBas extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("purple", "./ProjectilesBas/costumes/purple.png", {
        x: 213,
        y: 51
      }),
      new Costume("yellow", "./ProjectilesBas/costumes/yellow.png", {
        x: 213,
        y: 51
      }),
      new Costume("blue", "./ProjectilesBas/costumes/blue.png", {
        x: 213,
        y: 51
      }),
      new Costume("red", "./ProjectilesBas/costumes/red.png", {
        x: 213,
        y: 51
      }),
      new Costume("light blue", "./ProjectilesBas/costumes/light blue.png", {
        x: 213,
        y: 51
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
      if (this.touching(this.sprites["BlockAttack4"].andClones())) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.goto(98, -61);
    while (true) {
      if (this.stage.vars.attaqueB == 1) {
        yield* this.wait(0.1);
        this.createClone();
        this.stage.vars.attaqueB = 0;
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      this.y += this.stage.vars.vitesseTirB;
      yield;
    }
  }

  *startAsClone3() {
    this.effects.ghost = 0;
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
      this.stage.vars.vitesseTirB = 4;
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
      this.costume = "purple";
    }
  }

  *whenGreenFlagClicked2() {
    this.effects.ghost = 100;
  }
}
