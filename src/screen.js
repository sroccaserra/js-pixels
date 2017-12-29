export class Screen {
  constructor(w, h, data) {
    this.w = w;
    if (data) {
      this.pixels = data;
      return;
    }

    this.pixels = [];
    for (let i = 0; i < w * h * 4; ++i) {
      this.pixels[i] = 0;
    }
  }

  putPixel(x, y, r, g, b, a) {
    const offset = (x + this.w * y) * 4;
    this.pixels[offset] = r;
    this.pixels[offset + 1] = g;
    this.pixels[offset + 2] = b;
    this.pixels[offset + 3] = a;
  }

  putDoubledPixel(x, y, r, g, b, a) {
    if (x % 2 || y % 2) {
      return;
    }
    const firstOffset = (x + this.w * y) * 4;
    this.pixels[firstOffset] = r;
    this.pixels[firstOffset + 1] = g;
    this.pixels[firstOffset + 2] = b;
    this.pixels[firstOffset + 3] = a;

    this.pixels[firstOffset + 4] = r;
    this.pixels[firstOffset + 5] = g;
    this.pixels[firstOffset + 6] = b;
    this.pixels[firstOffset + 7] = a;

    const secondOffset = firstOffset + this.w * 4;
    this.pixels[secondOffset] = r;
    this.pixels[secondOffset + 1] = g;
    this.pixels[secondOffset + 2] = b;
    this.pixels[secondOffset + 3] = a;

    this.pixels[secondOffset + 4] = r;
    this.pixels[secondOffset + 5] = g;
    this.pixels[secondOffset + 6] = b;
    this.pixels[secondOffset + 7] = a;
  }
}
