// requestAnim shim layer by Paul Irish
export const requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (/* function */ callback, /* DOMElement */ element) {
    window.setTimeout(callback, 1000 / 60);
  };
