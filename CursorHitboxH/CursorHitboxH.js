/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CursorHitboxH extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CursorHitboxH/costumes/costume1.svg", {
        x: 3.777233102139377,
        y: 11.951914116631997
      })
    ];

    this.sounds = [new Sound("pop", "./CursorHitboxH/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.effects.ghost = 100;
    this.stage.vars.bad = 0;
    this.stage.vars.good = 0;
    this.stage.vars.sick = 0;
    this.stage.vars.hitboxfollowH = 0;
    this.goto(-96, 84);
    while (true) {
      if (this.stage.vars.hitboxfollowH == 1) {
        this.createClone();
        this.stage.vars.hitboxfollowH = 0;
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      this.y += -3.2;
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    if (this.stage.vars.randoAttaque == 1) {
      while (true) {
        if (this.touching(this.sprites["HitboxH"].andClones())) {
          this.stage.vars.bad = 1;
          this.broadcast("animation");
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["HitboxH2"].andClones())) {
          this.stage.vars.good = 1;
          this.broadcast("animation");
          this.stage.vars.attaqueH = 1;
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["HitboxH3"].andClones())) {
          this.stage.vars.sick = 1;
          this.broadcast("animation");
          this.stage.vars.attaqueH = 1;
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["CloneDelH"].andClones())) {
          this.deleteThisClone();
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
  }
}
