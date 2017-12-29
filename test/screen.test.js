import { Screen } from '../src/screen'

describe('Screen', () => {
  test('an empty screen', () => {
    const screen = new Screen(1, 1);

    expect(screen.pixels).toEqual([0, 0, 0, 0]);
  });

  test('draw a pixel', () => {
    const screen = new Screen(1, 1);
    screen.putPixel(0, 0, 1, 2, 3, 4);

    expect(screen.pixels).toEqual([1, 2, 3, 4]);
  });

  describe('Simple pixels', () => {
    test('draw a pixel on 1x1 screen', () => {
      const screen = new Screen(1, 1);
      screen.putPixel(0, 0, 1, 2, 3, 4);

      expect(screen.pixels).toEqual([1, 2, 3, 4]);
    });

    test('draw a pixel on 2x2 screen', () => {
      const screen = new Screen(2, 2);
      screen.putPixel(0, 0, 1, 2, 3, 4);

      expect(screen.pixels).toEqual([1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    test('draw a pixel at 1, 0 on 2x2 screen', () => {
      const screen = new Screen(2, 2);
      screen.putPixel(1, 0, 1, 2, 3, 4);

      expect(screen.pixels).toEqual([0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    test('draw a pixel at 0, 1 on 2x2 screen', () => {
      const screen = new Screen(2, 2);
      screen.putPixel(0, 1, 1, 2, 3, 4);

      expect(screen.pixels).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0]);
    });
  });

  describe('Doubled pixels', () => {
    test('draw a doubled pixel', () => {
      const screen = new Screen(2, 2);
      screen.putDoubledPixel(0, 0, 1, 2, 3, 4);

      expect(screen.pixels).toEqual([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]);
    });
  });
});
