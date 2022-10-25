/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Redmic2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("redmic", "./Redmic2/costumes/redmic.png", {
        x: 160,
        y: 290
      }),
      new Costume("bluemic", "./Redmic2/costumes/bluemic.png", {
        x: 160,
        y: 290
      })
    ];

    this.sounds = [];

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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      if (
        this.touching(this.sprites["AttaqueHaut"].andClones()) &&
        this.stage.vars.attaqueH == 0
      ) {
        this.stage.vars.attaqueH = 1;
        yield* this.wait(0.02);
        this.goto(-83, 39);
      }
      if (
        this.touching(this.sprites["AttaqueBas"].andClones()) &&
        this.stage.vars.attaqueB == 0
      ) {
        this.stage.vars.attaqueB = 1;
        yield* this.wait(0.02);
        this.goto(-83, 39);
      }
      if (
        this.touching(this.sprites["AttaqueGauche2"].andClones()) &&
        this.stage.vars.attaqueG2 == 0
      ) {
        this.stage.vars.attaqueG2 = 1;
        yield* this.wait(0.02);
        this.goto(-83, 39);
      }
      if (
        this.touching(this.sprites["AttaqueDroite2"].andClones()) &&
        this.stage.vars.attaqueD2 == 0
      ) {
        this.stage.vars.attaqueD2 = 1;
        yield* this.wait(0.02);
        this.goto(-83, 39);
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.moveAhead();
    this.goto(-100, 0);
    while (true) {
      if (this.stage.vars.switch == 0) {
        if (this.keyPressed("d")) {
          yield* this.glide(0.05, this.x + 20, this.y);
          this.stage.vars.hitd = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
        if (this.keyPressed("q")) {
          yield* this.glide(0.05, this.x - 20, this.y);
          this.stage.vars.hitg = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
        if (this.keyPressed("s")) {
          yield* this.glide(0.05, this.x, this.y - 15);
          this.stage.vars.hitb = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
        if (this.keyPressed("z")) {
          yield* this.glide(0.05, this.x, this.y + 15);
          this.stage.vars.hith = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
      }
      if (this.stage.vars.switch == 1) {
        if (this.keyPressed("right arrow")) {
          yield* this.glide(0.05, this.x + 20, this.y);
          this.stage.vars.hitd = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
        if (this.keyPressed("left arrow")) {
          yield* this.glide(0.05, this.x - 20, this.y);
          this.stage.vars.hitg = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
        if (this.keyPressed("down arrow")) {
          yield* this.glide(0.05, this.x, this.y - 15);
          this.stage.vars.hitb = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
        if (this.keyPressed("up arrow")) {
          yield* this.glide(0.05, this.x, this.y + 15);
          this.stage.vars.hith = 1;
          yield* this.wait(0.1);
          this.goto(-100, 0);
        }
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.stage.vars.switch == 0) {
        this.costume = "bluemic";
      } else {
        this.costume = "redmic";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
