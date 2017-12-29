import  { colorMap3 } from './colorMaps'

test('adds 1 + 2 to equal 3', () => {
  const pixel = [0, 1, 2, 3]
  colorMap3(pixel, 0, 1)
  expect(pixel).toEqual([127.50000000000003, 17.081761017484023, 237.9182389825159, 255]);
});

