/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ProjectilesDroite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("purple", "./ProjectilesDroite/costumes/purple.png", {
        x: 51,
        y: 213
      }),
      new Costume("red", "./ProjectilesDroite/costumes/red.png", {
        x: 51,
        y: 213
      }),
      new Costume("blue", "./ProjectilesDroite/costumes/blue.png", {
        x: 51,
        y: 213
      }),
      new Costume("light blue", "./ProjectilesDroite/costumes/light blue.png", {
        x: 51,
        y: 213
      }),
      new Costume("yellow", "./ProjectilesDroite/costumes/yellow.png", {
        x: 51,
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
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *startAsClone() {
    while (true) {
      if (this.touching(this.sprites["BlockAttack"].andClones())) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.goto(177, 36);
    while (true) {
      if (this.stage.vars.attaqueD2 == 1) {
        yield* this.wait(0.1);
        this.createClone();
        this.stage.vars.attaqueD2 = 0;
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      null;
      yield;
    }
  }

  *startAsClone3() {
    this.effects.ghost = 0;
    while (true) {
      if (this.touching(this.sprites[undefined].andClones())) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *startAsClone4() {
    this.visible = true;
    this.stage.vars.tiredroiteRandom = this.random(1, 3);
    if (this.stage.vars.tir == 1) {
      this.goto(177, 42);
      while (true) {
        this.x += this.stage.vars.vitesseTirD;
        yield;
      }
    }
    if (this.stage.vars.tir == 2) {
      this.goto(177, -3);
      while (true) {
        this.x += this.stage.vars.vitesseTirD;
        yield;
      }
    }
    if (this.stage.vars.tir == 3) {
      this.goto(177, -43);
      while (true) {
        this.x += this.stage.vars.vitesseTirD;
        yield;
      }
    }
  }

  *startAsClone5() {
    if (this.stage.vars.sick == 1) {
      this.stage.vars.vitesseTirD = -4;
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
