/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bspeaker3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bspeaker_3", "./Bspeaker3/costumes/bspeaker_3.png", {
        x: 360,
        y: 360
      }),
      new Costume("bspeaker_2", "./Bspeaker3/costumes/bspeaker_2.png", {
        x: 360,
        y: 360
      }),
      new Costume("bspeaker_1", "./Bspeaker3/costumes/bspeaker_1.png", {
        x: 360,
        y: 360
      }),
      new Costume("b_mute_speaker", "./Bspeaker3/costumes/b_mute_speaker.png", {
        x: 360,
        y: 360
      }),
      new Costume("rspeaker_3", "./Bspeaker3/costumes/rspeaker_3.png", {
        x: 360,
        y: 360
      }),
      new Costume("rspeaker_2", "./Bspeaker3/costumes/rspeaker_2.png", {
        x: 360,
        y: 360
      }),
      new Costume("rspeaker_1", "./Bspeaker3/costumes/rspeaker_1.png", {
        x: 360,
        y: 360
      }),
      new Costume("r_mute_speaker", "./Bspeaker3/costumes/r_mute_speaker.png", {
        x: 360,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "switch" },
        this.whenIReceiveSwitch2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      if (this.stage.vars.switch == 0) {
        if (this.stage.vars.viesJ1 == 3) {
          this.costume = "rspeaker_3";
        }
        if (this.stage.vars.viesJ1 == 2) {
          this.costume = "rspeaker_2";
        }
        if (this.stage.vars.viesJ1 == 1) {
          this.costume = "rspeaker_1";
        }
        if (this.stage.vars.viesJ1 == 0) {
          this.costume = "r_mute_speaker";
        }
      }
      if (this.stage.vars.switch == 1) {
        if (this.stage.vars.viesJ2 == 3) {
          this.costume = "bspeaker_3";
        }
        if (this.stage.vars.viesJ2 == 2) {
          this.costume = "bspeaker_2";
        }
        if (this.stage.vars.viesJ2 == 1) {
          this.costume = "bspeaker_1";
        }
        if (this.stage.vars.viesJ2 == 0) {
          this.costume = "b_mute_speaker";
        }
      }
      yield;
    }
  }

  *whenIReceiveSwitch() {
    if (this.stage.vars.switch == 0) {
      0;
    }
  }

  *whenIReceiveStart2() {
    this.stage.vars.switch = 0;
  }

  *whenIReceiveSwitch2() {
    yield* this.wait(2);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
