import { colorMap3, plasmaFinal, Plasma } from './plasma'
import { Screen } from './screen'
import { requestAnimFrame } from "./animation";

function drawFrame(context, scene) {
  const w = context.canvas.width;
  const h = context.canvas.height;
  const imageData = context.getImageData(0, 0, w, h);
  const screen = new Screen(w, h, imageData.data);

  scene.draw(screen);

  context.putImageData(imageData, 0, 0);
}

function startAnimation(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  const plasma = new Plasma(plasmaFinal, colorMap3);

  function animate() {
    drawFrame(context, plasma);
    requestAnimFrame(animate);
  }

  requestAnimFrame(animate);
}

startAnimation("screen");
