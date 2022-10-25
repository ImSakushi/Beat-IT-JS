/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BadRemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bad", "./BadRemovebgPreview/costumes/bad.png", {
        x: 262,
        y: 148
      }),
      new Costume("good", "./BadRemovebgPreview/costumes/good.png", {
        x: 263,
        y: 109
      }),
      new Costume("sick", "./BadRemovebgPreview/costumes/sick.png", {
        x: 324,
        y: 129
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "animation" },
        this.whenIReceiveAnimation
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveAnimation() {
    this.effects.ghost = 0;
    if (this.stage.vars.sick == 1) {
      this.visible = true;
      this.costume = "sick";
      yield* this.wait(0.3);
      this.visible = false;
    }
    if (this.stage.vars.good == 1) {
      this.visible = true;
      this.costume = "good";
      yield* this.wait(0.3);
      this.visible = false;
    }
    if (this.stage.vars.bad == 1) {
      this.visible = true;
      this.costume = "bad";
      yield* this.wait(0.3);
      this.visible = false;
    }
  }
}
