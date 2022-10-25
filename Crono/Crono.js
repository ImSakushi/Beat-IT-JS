/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crono extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Crono/costumes/costume1.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume2", "./Crono/costumes/costume2.svg", {
        x: 25.65625,
        y: 19.684365000000042
      }),
      new Costume("costume3", "./Crono/costumes/costume3.svg", {
        x: 25.65625,
        y: 19.684360000000055
      }),
      new Costume("costume4", "./Crono/costumes/costume4.svg", {
        x: 25.65625,
        y: 19.684365000000042
      }),
      new Costume("costume5", "./Crono/costumes/costume5.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume6", "./Crono/costumes/costume6.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume7", "./Crono/costumes/costume7.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume8", "./Crono/costumes/costume8.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume9", "./Crono/costumes/costume9.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume10", "./Crono/costumes/costume10.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume11", "./Crono/costumes/costume11.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume12", "./Crono/costumes/costume12.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume13", "./Crono/costumes/costume13.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume14", "./Crono/costumes/costume14.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume15", "./Crono/costumes/costume15.svg", {
        x: 25.65625,
        y: 19.684360000000027
      }),
      new Costume("costume16", "./Crono/costumes/costume16.svg", {
        x: 25.65625,
        y: 19.68435500000001
      })
    ];

    this.sounds = [
      new Sound("pop", "./Crono/sounds/pop.wav"),
      new Sound("mus_sfx_eyeflash", "./Crono/sounds/mus_sfx_eyeflash.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.costume = "costume16";
    this.stage.vars.gameover = 0;
    while (true) {
      if (this.stage.vars.introFin == 1) {
        while (true) {
          this.costume = "costume16";
          yield* this.wait(1);
          this.costume = "costume15";
          yield* this.wait(1);
          this.costume = "costume14";
          yield* this.wait(1);
          this.costume = "costume13";
          yield* this.wait(1);
          this.costume = "costume12";
          yield* this.wait(1);
          this.costume = "costume11";
          yield* this.wait(1);
          this.costume = "costume10";
          yield* this.wait(1);
          this.costume = "costume9";
          yield* this.wait(1);
          this.costume = "costume8";
          yield* this.wait(1);
          this.costume = "costume7";
          yield* this.wait(1);
          this.costume = "costume6";
          yield* this.wait(1);
          this.costume = "costume5";
          yield* this.wait(1);
          this.costume = "costume4";
          yield* this.wait(1);
          this.costume = "costume3";
          yield* this.wait(1);
          this.costume = "costume2";
          yield* this.wait(1);
          this.costume = "costume1";
          yield* this.startSound("mus_sfx_eyeflash");
          if (this.stage.vars.switch == 0) {
            this.stage.vars.switch = 1;
          } else {
            this.stage.vars.switch = 0;
          }
          yield* this.wait(1);
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.gameover = 0;
  }
}
