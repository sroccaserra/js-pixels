import Scene from '../src/scene';

function getScreenMock() {
  return {
    clear: jest.fn(),
    putPixel: jest.fn(),
    putDoubledPixel: jest.fn()
  };
}

function getSpriteMock() {
  return {
    draw: jest.fn(),
    update: jest.fn()
  };
}

describe('A scene', () => {
  test('can add a sprite', () => {
    const scene = new Scene();
    const spriteMock = getSpriteMock();
    scene.add(spriteMock);

    scene.draw(getScreenMock());

    expect(spriteMock.draw.mock.calls.length).toBeGreaterThan(0);
  });

  test('can update', () => {
    const scene = new Scene();
    const spriteMock = getSpriteMock();
    scene.add(spriteMock);

    let deltaTime = 166;
    scene.update(deltaTime);

    expect(spriteMock.update.mock.calls.length).toBeGreaterThan(0);
  })
});
