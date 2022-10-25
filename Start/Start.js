/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("start", "./Start/costumes/start.png", { x: 480, y: 198 }),
      new Costume("start_hover", "./Start/costumes/start_hover.png", {
        x: 480,
        y: 198
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(16, -59);
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "start_hover";
      } else {
        this.costume = "start";
      }
      if (this.touching("mouse") && this.mouse.down) {
        this.broadcast("start");
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
  }
}
