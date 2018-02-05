import { Screen } from './screen'
import { SceneWithSprites } from "./scene";
import MainLoop from 'mainloop.js';


function drawFrame(context, scene) {
  const w = context.canvas.width;
  const h = context.canvas.height;
  const imageData = context.getImageData(0, 0, w, h);
  const screen = new Screen(w, h, imageData.data);

  scene.draw(screen);

  context.putImageData(imageData, 0, 0);
}

function startAnimation() {
  const canvas = document.getElementById("screen");
  const context = canvas.getContext('2d');

  const scene = new SceneWithSprites();

  MainLoop.setDraw(() => drawFrame(context, scene));
  MainLoop.start();
}

startAnimation();
