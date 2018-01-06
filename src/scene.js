export class Scene {
  draw(screen) {
  }
}

const TRANSPARENT_COLOR = -1;
const _ = TRANSPARENT_COLOR;

const crossData = [
  [0, _, _, _, 0],
  [_, 0, _, 0, _],
  [_, _, 0, _, _],
  [_, 0, _, 0, _],
  [0, _, _, _, 0]
];

const palette = [[0, 255, 0]];

export class SceneWithSprites extends Scene {
  constructor() {
    super();
    this.sprites = [
      new Sprite(crossData, palette, 0, 0),
      new DoubledSprite(crossData, palette, 5, 0)
    ]
  }

  draw(screen) {
    screen.clear();
    this.sprites.forEach(sprite => {
      sprite.draw(screen);
    })
  }
}

class Sprite {
  constructor(data, palette, x, y) {
    this.data = data;
    this.palette = palette;
    this.x = x;
    this.y = y;
  }

  draw(screen) {
    this.data.forEach((row, yOffset) => {
      const y = this.y + yOffset;
      row.forEach((paletteIndex, xOffset) => {
        if (paletteIndex !== TRANSPARENT_COLOR) {
          const color = this.palette[paletteIndex];
          screen.putPixel(this.x + xOffset, y, color[0], color[1], color[2], 255);
        }
      });
    });
  }
}

class DoubledSprite extends Sprite{
  draw(screen) {
    this.data.forEach((row, yOffset) => {
      const y = this.y + yOffset;
      row.forEach((paletteIndex, xOffset) => {
        if (paletteIndex !== TRANSPARENT_COLOR) {
          const color = this.palette[paletteIndex];
          screen.putDoubledPixel(this.x + xOffset, y, color[0], color[1], color[2], 255);
        }
      });
    });
  }
}
