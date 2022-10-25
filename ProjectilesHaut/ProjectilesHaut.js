/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ProjectilesHaut extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("purple", "./ProjectilesHaut/costumes/purple.svg", {
        x: 106.46492154329925,
        y: 25.108396181011017
      }),
      new Costume("yellow", "./ProjectilesHaut/costumes/yellow.svg", {
        x: 106.46492154329925,
        y: 25.10839246981135
      }),
      new Costume("blue", "./ProjectilesHaut/costumes/blue.svg", {
        x: 106.46492154329925,
        y: 25.108396181011017
      }),
      new Costume("red", "./ProjectilesHaut/costumes/red.svg", {
        x: 106.46492154329925,
        y: 25.108396181011017
      }),
      new Costume("light blue", "./ProjectilesHaut/costumes/light blue.svg", {
        x: 106.46492154329925,
        y: 25.108396181011017
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
      if (this.touching(this.sprites["BlockAttack3"].andClones())) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.goto(98, 139);
    while (true) {
      if (this.stage.vars.attaqueH == 1) {
        yield* this.wait(0.1);
        this.createClone();
        this.stage.vars.attaqueH = 0;
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      this.y += this.stage.vars.vitesseTirH;
      yield;
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
    this.effects.ghost = 0;
    if (this.stage.vars.sick == 1) {
      this.stage.vars.vitesseTirH = -4;
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
