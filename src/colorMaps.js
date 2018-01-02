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

export function colorMapBlue(v) {
  let c = 100 * (.5 + .5 * v * .8) + 155;
  if (Math.random() > 1.99) {
    c = 0;
  }
  return [
    c * 0.1,
    c * 0.1,
    c,
    255
  ];
}


