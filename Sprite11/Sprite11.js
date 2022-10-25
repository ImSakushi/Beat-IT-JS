/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BlueW", "./Sprite11/costumes/BlueW.svg", {
        x: 326.5,
        y: 229.6999969482422
      }),
      new Costume("RedW", "./Sprite11/costumes/RedW.svg", {
        x: 326.5,
        y: 229.6999969482422
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite11/sounds/pop.wav"),
      new Sound("fanfare", "./Sprite11/sounds/fanfare.mp3"),
      new Sound("player 1 win", "./Sprite11/sounds/player 1 win.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "press space" },
        this.whenIReceivePressSpace
      )
    ];
  }

  *whenIReceiveStart() {
    this.audioEffects.volume = 100;
    while (true) {
      if (this.stage.vars.viesJ1 == 0) {
        this.effects.ghost = 0;
        this.visible = true;
        this.costume = "BlueW";
        this.moveAhead();
        yield* this.startSound("player 1 win");
        yield* this.playSoundUntilDone("fanfare");
        this.broadcast("press space");
        return;
      }
      if (this.stage.vars.viesJ2 == 0) {
        this.effects.ghost = 0;
        this.visible = true;
        this.costume = "RedW";
        this.moveAhead();
        yield* this.startSound("player 1 win");
        yield* this.playSoundUntilDone("fanfare");
        this.broadcast("press space");
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.visible = false;
  }

  *whenIReceivePressSpace() {
    while (true) {
      if (this.keyPressed("space")) {
        this.broadcast("start");
      }
      yield;
    }
  }
}
