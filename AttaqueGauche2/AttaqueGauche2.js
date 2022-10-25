/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AttaqueGauche2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AttaqueGauche2/costumes/costume1.svg", {
        x: 4.972013673222278,
        y: 12.019974261561885
      })
    ];

    this.sounds = [new Sound("pop", "./AttaqueGauche2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveStart() {}
}
