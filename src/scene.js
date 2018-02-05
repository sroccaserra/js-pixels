import Mushroom, { MUSHROOM_DATA, MUSHROOM_PALETTE } from "./mushroom";
import { DoubledSprite } from "./sprite";

export default class Scene {
  constructor() {
    this.sprites = [
      new Mushroom(0, 0),
      new Mushroom(16, 16),
      new DoubledSprite(MUSHROOM_DATA, MUSHROOM_PALETTE, 32, 32)
    ]
  }

  add(sprite) {
    this.sprites.push(sprite);
  }

  draw(screen) {
    screen.clear();
    this.sprites.forEach(sprite => {
      sprite.draw(screen);
    })
  }

  update(delta) {
    this.sprites.forEach(sprite => {
      sprite.update(delta);
    })
  }
}
