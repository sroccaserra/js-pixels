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
    this.pixels[0] = r;
    this.pixels[1] = g;
    this.pixels[2] = b;
    this.pixels[3] = a;

    this.pixels[4] = r;
    this.pixels[4 + 1] = g;
    this.pixels[4 + 2] = b;
    this.pixels[4 + 3] = a;

    this.pixels[2 * 4] = r;
    this.pixels[2 * 4 + 1] = g;
    this.pixels[2 * 4 + 2] = b;
    this.pixels[2 * 4 + 3] = a;

    this.pixels[3 * 4] = r;
    this.pixels[3 * 4 + 1] = g;
    this.pixels[3 * 4 + 2] = b;
    this.pixels[3 * 4 + 3] = a;
  }
}
