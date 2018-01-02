import { colorMap3 } from './colorMaps'
import {Screen} from './screen'

// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (/* function */ callback, /* DOMElement */ element) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function drawFrame(context, plasmaMap, colorMap) {
  const time = new Date().getTime() * 0.003;

  const w = context.canvas.width;
  const h = context.canvas.height;
//  context.imageSmoothingEnabled = false;
//  context.mozImageSmoothingEnabled = false;
  const imageData = context.getImageData(0, 0, w, h);
  const screen = new Screen(w, h, imageData.data);

  const kx = w / h;
  for (let y = 0; y < h; y++) {
    const yy = y / h - .5;
    for (let x = 0; x < w; x++) {
      const xx = kx * x / w - kx / 2;
      const v = plasmaMap(xx, yy, time);
      const pixel = colorMap(v);
      screen.putDoubledPixel(x, y, pixel[0], pixel[1], pixel[2], pixel[3]);
    }
  }
  context.putImageData(imageData, 0, 0);
}

function drawStill(canvasId, plasmaMap, colorMap) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  drawFrame(context, plasmaMap, colorMap);
}

function drawAnimated(canvasId, plasmaMap, colorMap) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  function animate() {
    drawFrame(context, plasmaMap, colorMap);
    requestAnimFrame(animate);
  }

  requestAnimFrame(animate);
}

function plasmaFinal(x, y, time) {
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

drawAnimated("screen", plasmaFinal, colorMap3);
