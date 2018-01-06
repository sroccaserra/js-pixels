export class Screen {
  constructor(w, h, data) {
    this.w = w;
    this.h = h;
    if (data) {
      this.pixels = data;
      return;
    }

    this.pixels = [];
    this.clear();
  }

  clear() {
    for (let i = 0; i < this.w * this.h * 4; i+=4) {
      this.pixels[i] = 0;
      this.pixels[i + 1] = 0;
      this.pixels[i + 2] = 0;
      this.pixels[i + 3] = 255;
    }
  }

  putPixel(x, y, r, g, b) {
    const offset = (x + this.w * y) * 4;
    this.pixels[offset] = r;
    this.pixels[offset + 1] = g;
    this.pixels[offset + 2] = b;
  }

  putDoubledPixel(x, y, r, g, b) {
    const firstOffset = (x + this.w * y) * 8;

    this.pixels[firstOffset] = r;
    this.pixels[firstOffset + 1] = g;
    this.pixels[firstOffset + 2] = b;

    this.pixels[firstOffset + 4] = r;
    this.pixels[firstOffset + 5] = g;
    this.pixels[firstOffset + 6] = b;

    const secondOffset = firstOffset + this.w * 4;

    this.pixels[secondOffset] = r;
    this.pixels[secondOffset + 1] = g;
    this.pixels[secondOffset + 2] = b;

    this.pixels[secondOffset + 4] = r;
    this.pixels[secondOffset + 5] = g;
    this.pixels[secondOffset + 6] = b;
  }
}
