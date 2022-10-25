import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Redmic2 from "./Redmic2/Redmic2.js";
import Redmic from "./Redmic/Redmic.js";
import Gauche from "./Gauche/Gauche.js";
import Bas from "./Bas/Bas.js";
import Droite from "./Droite/Droite.js";
import Haut from "./Haut/Haut.js";
import CursorHitboxG from "./CursorHitboxG/CursorHitboxG.js";
import CursorHitboxD from "./CursorHitboxD/CursorHitboxD.js";
import CursorHitboxH from "./CursorHitboxH/CursorHitboxH.js";
import CursorHitboxB from "./CursorHitboxB/CursorHitboxB.js";
import AttaqueHaut from "./AttaqueHaut/AttaqueHaut.js";
import ProjectilesHaut from "./ProjectilesHaut/ProjectilesHaut.js";
import AttaqueBas from "./AttaqueBas/AttaqueBas.js";
import ProjectilesBas from "./ProjectilesBas/ProjectilesBas.js";
import AttaqueGauche2 from "./AttaqueGauche2/AttaqueGauche2.js";
import ProjectilesGauche from "./ProjectilesGauche/ProjectilesGauche.js";
import AttaqueDroite2 from "./AttaqueDroite2/AttaqueDroite2.js";
import ProjectilesDroite from "./ProjectilesDroite/ProjectilesDroite.js";
import HitboxG from "./HitboxG/HitboxG.js";
import HitboxG2 from "./HitboxG2/HitboxG2.js";
import HitboxG3 from "./HitboxG3/HitboxG3.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import HitboxH from "./HitboxH/HitboxH.js";
import HitboxH2 from "./HitboxH2/HitboxH2.js";
import HitboxH3 from "./HitboxH3/HitboxH3.js";
import HitboxD from "./HitboxD/HitboxD.js";
import HitboxD2 from "./HitboxD2/HitboxD2.js";
import HitboxD3 from "./HitboxD3/HitboxD3.js";
import HitboxB from "./HitboxB/HitboxB.js";
import HitboxB2 from "./HitboxB2/HitboxB2.js";
import HitboxB3 from "./HitboxB3/HitboxB3.js";
import CloneDelG from "./CloneDelG/CloneDelG.js";
import CloneDelH from "./CloneDelH/CloneDelH.js";
import CloneDelB from "./CloneDelB/CloneDelB.js";
import CloneDelD from "./CloneDelD/CloneDelD.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Zonetir3 from "./Zonetir3/Zonetir3.js";
import Zonetir2 from "./Zonetir2/Zonetir2.js";
import Zonetir1 from "./Zonetir1/Zonetir1.js";
import Bspeaker3 from "./Bspeaker3/Bspeaker3.js";
import Crono from "./Crono/Crono.js";
import BadRemovebgPreview from "./BadRemovebgPreview/BadRemovebgPreview.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import BlockAttack3 from "./BlockAttack3/BlockAttack3.js";
import BlockAttack from "./BlockAttack/BlockAttack.js";
import BlockAttack2 from "./BlockAttack2/BlockAttack2.js";
import BlockAttack4 from "./BlockAttack4/BlockAttack4.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Start from "./Start/Start.js";

const stage = new Stage({ costumeNumber: 10 });

const sprites = {
  Redmic2: new Redmic2({
    x: -100,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 7.000000000000001,
    visible: true,
    layerOrder: 56
  }),
  Redmic: new Redmic({
    x: 100,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 7.000000000000001,
    visible: true,
    layerOrder: 1
  }),
  Gauche: new Gauche({
    x: -185,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Bas: new Bas({
    x: -96,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Droite: new Droite({
    x: -5,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Haut: new Haut({
    x: -96,
    y: 84,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  CursorHitboxG: new CursorHitboxG({
    x: -185,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  CursorHitboxD: new CursorHitboxD({
    x: -5,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  CursorHitboxH: new CursorHitboxH({
    x: -96,
    y: 84,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  CursorHitboxB: new CursorHitboxB({
    x: -96,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  AttaqueHaut: new AttaqueHaut({
    x: -84,
    y: 125,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 2
  }),
  ProjectilesHaut: new ProjectilesHaut({
    x: 98,
    y: 139,
    direction: 90,
    costumeNumber: 2,
    size: 10,
    visible: false,
    layerOrder: 27
  }),
  AttaqueBas: new AttaqueBas({
    x: -84,
    y: -46,
    direction: 90,
    costumeNumber: 1,
    size: 50.78126778244664,
    visible: false,
    layerOrder: 3
  }),
  ProjectilesBas: new ProjectilesBas({
    x: 98,
    y: -61,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 30
  }),
  AttaqueGauche2: new AttaqueGauche2({
    x: -117,
    y: 84,
    direction: 90,
    costumeNumber: 1,
    size: 50.78126778244664,
    visible: false,
    layerOrder: 14
  }),
  ProjectilesGauche: new ProjectilesGauche({
    x: 28,
    y: 42,
    direction: 90,
    costumeNumber: 2,
    size: 10,
    visible: false,
    layerOrder: 28
  }),
  AttaqueDroite2: new AttaqueDroite2({
    x: -37,
    y: 40.22486717586185,
    direction: 90,
    costumeNumber: 1,
    size: 50.78126778244664,
    visible: false,
    layerOrder: 4
  }),
  ProjectilesDroite: new ProjectilesDroite({
    x: 177,
    y: 36,
    direction: 90,
    costumeNumber: 3,
    size: 10,
    visible: false,
    layerOrder: 29
  }),
  HitboxG: new HitboxG({
    x: -67,
    y: -5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  HitboxG2: new HitboxG2({
    x: -64.7969494710935,
    y: -4.341951288519752,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  HitboxG3: new HitboxG3({
    x: -63.99476915087064,
    y: -2.8313562209321788,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Sprite1: new Sprite1({
    x: -7,
    y: -94,
    direction: 90.4549755019021,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  HitboxH: new HitboxH({
    x: 1.6504695094441786,
    y: 56,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 49
  }),
  HitboxH2: new HitboxH2({
    x: 3.3114520887013015,
    y: 54.04748415503299,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  HitboxH3: new HitboxH3({
    x: 4.2941303241439925,
    y: 53,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 48
  }),
  HitboxD: new HitboxD({
    x: 63.61239167214359,
    y: 9.889205201833072,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  HitboxD2: new HitboxD2({
    x: 60.596977015805976,
    y: 8.807999904326664,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  HitboxD3: new HitboxD3({
    x: 60.83074126747357,
    y: 8.986253587032536,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  HitboxB: new HitboxB({
    x: -7.011890554403635,
    y: -59.83834583514209,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  HitboxB2: new HitboxB2({
    x: -3.5528609311978414,
    y: -60.2687960357582,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 46
  }),
  HitboxB3: new HitboxB3({
    x: -4.387182005737756,
    y: -60.379808972044714,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 47
  }),
  CloneDelG: new CloneDelG({
    x: -97,
    y: -42,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 23
  }),
  CloneDelH: new CloneDelH({
    x: -77.64565784680542,
    y: -27.685860824509277,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 24
  }),
  CloneDelB: new CloneDelB({
    x: -76.92210652582287,
    y: -56.382769016293565,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 25
  }),
  CloneDelD: new CloneDelD({
    x: -50.73539265585083,
    y: -42.75118469823224,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 26
  }),
  Sprite9: new Sprite9({
    x: 106.18643993843995,
    y: 11.393781977623576,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 31
  }),
  Sprite8: new Sprite8({
    x: 105.00437582763743,
    y: -154.10767184462702,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 32
  }),
  Sprite7: new Sprite7({
    x: 146.28722565762916,
    y: -115.04961923670139,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 33
  }),
  Sprite6: new Sprite6({
    x: 146.33562065516736,
    y: -70.95421625972818,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 34
  }),
  Sprite5: new Sprite5({
    x: 146.12457331395697,
    y: -30.111485493135348,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 35
  }),
  Sprite4: new Sprite4({
    x: 64.41089627674205,
    y: -28.93534091387727,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 36
  }),
  Sprite3: new Sprite3({
    x: 63.09422618611811,
    y: -72.71569033741117,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 37
  }),
  Sprite2: new Sprite2({
    x: 62,
    y: -115,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 38
  }),
  Zonetir3: new Zonetir3({
    x: 99.50177883896042,
    y: -41.64285096708548,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 39
  }),
  Zonetir2: new Zonetir2({
    x: 99.56306787092873,
    y: 0.26017007883374443,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 40
  }),
  Zonetir1: new Zonetir1({
    x: 100,
    y: 44,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 41
  }),
  Bspeaker3: new Bspeaker3({
    x: 99,
    y: 139,
    direction: 90,
    costumeNumber: 5,
    size: 15,
    visible: true,
    layerOrder: 42
  }),
  Crono: new Crono({
    x: 26,
    y: -142,
    direction: 90,
    costumeNumber: 6,
    size: 150,
    visible: true,
    layerOrder: 43
  }),
  BadRemovebgPreview: new BadRemovebgPreview({
    x: -91,
    y: 143,
    direction: 90,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 44
  }),
  Sprite10: new Sprite10({
    x: 81,
    y: -123,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 45
  }),
  BlockAttack3: new BlockAttack3({
    x: 100.05173094304027,
    y: -113.46094631659082,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 50
  }),
  BlockAttack: new BlockAttack({
    x: 14,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 51
  }),
  BlockAttack2: new BlockAttack2({
    x: 185.38079158562527,
    y: 3.3674562005277124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 52
  }),
  BlockAttack4: new BlockAttack4({
    x: 99.7387494793909,
    y: 114.25208346155084,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 53
  }),
  Sprite11: new Sprite11({
    x: 49,
    y: 24,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 55
  }),
  Start: new Start({
    x: 16,
    y: -59,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 54
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
