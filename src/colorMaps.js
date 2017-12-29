export function colorMap1(screen, x, y, v) {
  const r = 255 * (.5 + .5 * Math.sin(Math.PI * v));
  const g = 255 * (.5 + .5 * Math.cos(Math.PI * v));
  const b = 0;
  const a = 255;
  screen.putPixel(x, y, r, g, b, a);
}

export function colorMap2(screen, x, y, v) {
  const r = 255;
  const g = 255 * (.5 + .5 * Math.cos(Math.PI * v));
  const b = 255 * (.5 + .5 * Math.sin(Math.PI * v));
  const a = 255;
  screen.putPixel(x, y, r, g, b, a);
}

export function colorMap3(screen, x, y, v) {
  const r = 255 * (.5 + .5 * Math.sin(Math.PI * v));
  const g = 255 * (.5 + .5 * Math.sin(Math.PI * v + 2 * Math.PI / 3));
  const b = 255 * (.5 + .5 * Math.sin(Math.PI * v + 4 * Math.PI / 3));
  const a = 255;
  screen.putDoubledPixel(x, y, r, g, b, a);
}

export function colorMap4(screen, x, y, v) {
  const c = .5 + .5 * Math.sin(Math.PI * v * 5);
  const r = 255 * c;
  const g = 255 * c;
  const b = 255 * c;
  const a = 255;
  screen.putPixel(x, y, r, g, b, a);
}

export function colorMapBlue(screen, x, y, v) {
  let c = 100 * (.5 + .5 * v * .8) + 155;
  if (Math.random() > 1.99) {
    c = 0;
  }
  const r = c * 0.1;
  const g = c * 0.1;
  const b = c;
  const a = 255;
  screen.putPixel(x, y, r, g, b, a);
}


