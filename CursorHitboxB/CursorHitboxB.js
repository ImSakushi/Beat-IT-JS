/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CursorHitboxB extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./CursorHitboxB/costumes/costume1.svg", {
        x: 4.358754841269814,
        y: -9.107868492063602
      })
    ];

    this.sounds = [new Sound("pop", "./CursorHitboxB/sounds/pop.wav")];

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
    this.stage.vars.hitboxfollowB = 0;
    this.goto(-96, -76);
    while (true) {
      if (this.stage.vars.hitboxfollowB == 1) {
        this.createClone();
        this.stage.vars.hitboxfollowB = 0;
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      this.y += 3.2;
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    if (this.stage.vars.randoAttaque == 3) {
      while (true) {
        if (this.touching(this.sprites["HitboxB"].andClones())) {
          this.stage.vars.bad = 1;
          this.broadcast("animation");
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["HitboxB2"].andClones())) {
          this.stage.vars.good = 1;
          this.broadcast("animation");
          this.stage.vars.attaqueB = 1;
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["HitboxB3"].andClones())) {
          this.stage.vars.sick = 1;
          this.broadcast("animation");
          this.stage.vars.attaqueB = 1;
          this.deleteThisClone();
        }
        if (this.touching(this.sprites["CloneDelG"].andClones())) {
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
