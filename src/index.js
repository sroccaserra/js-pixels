import { Screen } from './screen'
import { requestAnimFrame } from "./animation";
import { SceneWithSprites } from "./scene";

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

  // const plasma = new Plasma(plasmaFinal, colorMap3);
  const scene = new SceneWithSprites();

  function animate() {
    drawFrame(context, scene);
    requestAnimFrame(animate);
  }

  requestAnimFrame(animate);
}

startAnimation("screen");
