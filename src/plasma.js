import { Scene } from "./scene";

export class Plasma extends Scene {
  constructor(plasmaFunction, colorMap) {
    super();
    this.plasmaFunction = plasmaFunction;
    this.colorMap = colorMap;
  }

  draw(screen) {
    const time = new Date().getTime() * 0.003;

    const kx = screen.w / screen.h;
    for (let y = 0; y < screen.h; y++) {
      const yy = y / screen.h - .5;
      for (let x = 0; x < screen.w; x++) {
        const xx = kx * x / screen.w - kx / 2;

        const v = this.plasmaFunction(xx, yy, time);
        const pixel = this.colorMap(v);

        screen.putDoubledPixel(x, y, pixel[0], pixel[1], pixel[2], pixel[3]);
      }
    }
  }
}

export function plasmaFinal(x, y, time) {
  let v = 0;
  v += Math.sin((x * 10 + time));
  v += Math.sin((y * 10 + time) / 2.0);
  v += Math.sin((x * 10 + y * 10 + time) / 2.0);
  const cx = x + .5 * Math.sin(time / 5.0);
  const cy = y + .5 * Math.cos(time / 3.0);
  v += Math.sin(Math.sqrt(100 * (cx * cx + cy * cy) + 1) + time);
  v = v / 2.0;
  return v;
}

export function colorMap1(v) {
  return [
    255 * (.5 + .5 * Math.sin(Math.PI * v)),
    255 * (.5 + .5 * Math.cos(Math.PI * v)),
    0,
    255
  ];
}

export function colorMap2(v) {
  return [
    255,
    255 * (.5 + .5 * Math.cos(Math.PI * v)),
    255 * (.5 + .5 * Math.sin(Math.PI * v)),
    255
  ];
}

export function colorMap3(v) {
  return [
    255 * (.5 + .5 * Math.sin(Math.PI * v)),
    255 * (.5 + .5 * Math.sin(Math.PI * v + 2 * Math.PI / 3)),
    255 * (.5 + .5 * Math.sin(Math.PI * v + 4 * Math.PI / 3)),
    255
  ];
}

export function colorMap4(v) {
  const c = .5 + .5 * Math.sin(Math.PI * v * 5);
  return [
    255 * c,
    255 * c,
    255 * c,
    255
  ];
}
