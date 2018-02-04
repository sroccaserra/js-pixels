const TRANSPARENT_COLOR_INDEX = -1;
export const _ = TRANSPARENT_COLOR_INDEX;

export class Sprite {
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
        if (paletteIndex !== TRANSPARENT_COLOR_INDEX) {
          const color = this.palette[paletteIndex];
          screen.putPixel(this.x + xOffset, y, color[0], color[1], color[2], 255);
        }
      });
    });
  }
}

export class DoubledSprite extends Sprite{
  draw(screen) {
    this.data.forEach((row, yOffset) => {
      const y = this.y + yOffset;
      row.forEach((paletteIndex, xOffset) => {
        if (paletteIndex !== TRANSPARENT_COLOR_INDEX) {
          const color = this.palette[paletteIndex];
          screen.putDoubledPixel(this.x + xOffset, y, color[0], color[1], color[2], 255);
        }
      });
    });
  }
}
