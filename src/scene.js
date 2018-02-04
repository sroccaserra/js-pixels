import { Mushroom, MUSHROOM_DATA, MUSHROOM_PALETTE } from "./mushroom";
import { DoubledSprite } from "./sprite";

export class Scene {
  draw(screen) {
  }
}

export class SceneWithSprites extends Scene {
  constructor() {
    super();
    this.sprites = [
      new Mushroom(0, 0),
      new Mushroom(16, 16),
      new DoubledSprite(MUSHROOM_DATA, MUSHROOM_PALETTE, 32, 32)
    ]
  }

  draw(screen) {
    screen.clear();
    this.sprites.forEach(sprite => {
      sprite.draw(screen);
    })
  }
}

