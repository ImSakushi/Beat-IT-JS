/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Redmic extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("redmic", "./Redmic/costumes/redmic.png", { x: 160, y: 290 }),
      new Costume("bluemic", "./Redmic/costumes/bluemic.png", {
        x: 160,
        y: 290
      })
    ];

    this.sounds = [
      new Sound("snd_damage", "./Redmic/sounds/snd_damage.wav"),
      new Sound("mus_sfx_gunshot", "./Redmic/sounds/mus_sfx_gunshot.wav"),
      new Sound("mus_sfx_gigapunch", "./Redmic/sounds/mus_sfx_gigapunch.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Dégat" }, this.whenIReceiveDGat),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart3)
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.goto(100, 0);
    while (true) {
      if (this.stage.vars.switch == 0) {
        if (this.keyPressed("right arrow")) {
          if (
            !this.touching(this.sprites["Sprite5"].andClones()) &&
            !this.touching(this.sprites["Sprite6"].andClones()) &&
              !this.touching(this.sprites["Sprite7"].andClones()) &&
            !this.touching(this.sprites["Sprite8"].andClones()) &&
              !this.touching(this.sprites["Sprite9"].andClones())
          ) {
            yield* this.glide(0.05, this.x + 38, this.y);
            yield* this.wait(0.07);
          }
        }
        if (this.keyPressed("left arrow")) {
          if (
            !this.touching(this.sprites["Sprite2"].andClones()) &&
            !this.touching(this.sprites["Sprite3"].andClones()) &&
              !this.touching(this.sprites["Sprite4"].andClones()) &&
            !this.touching(this.sprites["Sprite8"].andClones()) &&
              !this.touching(this.sprites["Sprite9"].andClones())
          ) {
            yield* this.glide(0.05, this.x - 38, this.y);
            yield* this.wait(0.07);
          }
        }
        if (this.keyPressed("down arrow")) {
          if (
            !this.touching(this.sprites["Sprite2"].andClones()) &&
            !this.touching(this.sprites["Sprite3"].andClones()) &&
              !this.touching(this.sprites["Sprite4"].andClones()) &&
            !this.touching(this.sprites["Sprite5"].andClones()) &&
              !this.touching(this.sprites["Sprite6"].andClones()) &&
                !this.touching(this.sprites["Sprite7"].andClones()) &&
            !this.touching(this.sprites["Sprite8"].andClones())
          ) {
            yield* this.glide(0.05, this.x, this.y - 38);
            yield* this.wait(0.07);
          }
        }
        if (this.keyPressed("up arrow")) {
          if (
            !this.touching(this.sprites["Sprite2"].andClones()) &&
            !this.touching(this.sprites["Sprite3"].andClones()) &&
              !this.touching(this.sprites["Sprite4"].andClones()) &&
            !this.touching(this.sprites["Sprite5"].andClones()) &&
              !this.touching(this.sprites["Sprite6"].andClones()) &&
                !this.touching(this.sprites["Sprite7"].andClones()) &&
            !this.touching(this.sprites["Sprite9"].andClones())
          ) {
            yield* this.glide(0.05, this.x, this.y + 38);
            yield* this.wait(0.07);
          }
        }
      }
      if (this.stage.vars.switch == 1) {
        if (this.keyPressed("d")) {
          if (
            !this.touching(this.sprites["Sprite5"].andClones()) &&
            !this.touching(this.sprites["Sprite6"].andClones()) &&
              !this.touching(this.sprites["Sprite7"].andClones()) &&
            !this.touching(this.sprites["Sprite8"].andClones()) &&
              !this.touching(this.sprites["Sprite9"].andClones())
          ) {
            yield* this.glide(0.05, this.x + 38, this.y);
            yield* this.wait(0.07);
          }
        }
        if (this.keyPressed("q")) {
          if (
            !this.touching(this.sprites["Sprite2"].andClones()) &&
            !this.touching(this.sprites["Sprite3"].andClones()) &&
              !this.touching(this.sprites["Sprite4"].andClones()) &&
            !this.touching(this.sprites["Sprite8"].andClones()) &&
              !this.touching(this.sprites["Sprite9"].andClones())
          ) {
            yield* this.glide(0.05, this.x - 38, this.y);
            yield* this.wait(0.07);
          }
        }
        if (this.keyPressed("s")) {
          if (
            !this.touching(this.sprites["Sprite2"].andClones()) &&
            !this.touching(this.sprites["Sprite3"].andClones()) &&
              !this.touching(this.sprites["Sprite4"].andClones()) &&
            !this.touching(this.sprites["Sprite5"].andClones()) &&
              !this.touching(this.sprites["Sprite6"].andClones()) &&
                !this.touching(this.sprites["Sprite7"].andClones()) &&
            !this.touching(this.sprites["Sprite8"].andClones())
          ) {
            yield* this.glide(0.05, this.x, this.y - 38);
            yield* this.wait(0.07);
          }
        }
        if (this.keyPressed("z")) {
          if (
            !this.touching(this.sprites["Sprite2"].andClones()) &&
            !this.touching(this.sprites["Sprite3"].andClones()) &&
              !this.touching(this.sprites["Sprite4"].andClones()) &&
            !this.touching(this.sprites["Sprite5"].andClones()) &&
              !this.touching(this.sprites["Sprite6"].andClones()) &&
                !this.touching(this.sprites["Sprite7"].andClones()) &&
            !this.touching(this.sprites["Sprite9"].andClones())
          ) {
            yield* this.glide(0.05, this.x, this.y + 38);
            yield* this.wait(0.07);
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.stage.vars.invincibilit = 0;
    this.stage.vars.viesJ1 = 3;
    this.stage.vars.viesJ2 = 3;
    while (true) {
      if (this.stage.vars.invincibilit == 0) {
        if (this.stage.vars.switch == 0) {
          if (this.touching(this.sprites["ProjectilesDroite"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ1 += -1;
            yield* this.wait(1);
          }
          if (this.touching(this.sprites["ProjectilesGauche"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ1 += -1;
            yield* this.wait(1);
          }
          if (this.touching(this.sprites["ProjectilesBas"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ1 += -1;
            yield* this.wait(1);
          }
          if (this.touching(this.sprites["ProjectilesHaut"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ1 += -1;
            yield* this.wait(1);
          }
        }
        if (this.stage.vars.switch == 1) {
          if (this.touching(this.sprites["ProjectilesDroite"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ2 += -1;
            yield* this.wait(1);
          }
          if (this.touching(this.sprites["ProjectilesGauche"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ2 += -1;
            yield* this.wait(1);
          }
          if (this.touching(this.sprites["ProjectilesBas"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ2 += -1;
            yield* this.wait(1);
          }
          if (this.touching(this.sprites["ProjectilesHaut"].andClones())) {
            this.broadcast("Dégat");
            yield* this.startSound("snd_damage");
            this.stage.vars.viesJ2 += -1;
            yield* this.wait(1);
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDGat() {
    this.stage.vars.invincibilit = 1;
    this.effects.ghost = 50;
    yield* this.wait(0.15);
    this.effects.ghost = 0;
    yield* this.wait(0.15);
    this.effects.ghost = 50;
    yield* this.wait(0.15);
    this.effects.ghost = 0;
    yield* this.wait(0.15);
    this.effects.ghost = 50;
    yield* this.wait(0.15);
    this.effects.ghost = 0;
    yield* this.wait(0.15);
    this.effects.ghost = 50;
    yield* this.wait(0.15);
    this.effects.ghost = 0;
    yield* this.wait(0.15);
    this.effects.ghost = 50;
    yield* this.wait(0.15);
    this.effects.ghost = 0;
    this.stage.vars.invincibilit = 0;
  }

  *whenIReceiveStart3() {
    while (true) {
      if (this.stage.vars.switch == 0) {
        this.costume = "redmic";
      } else {
        this.costume = "bluemic";
      }
      yield;
    }
  }
}
