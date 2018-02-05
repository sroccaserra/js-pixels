import MainLoop from 'mainloop.js';


describe('test mainloop', () => {
  test('it is not null', () => {
    expect(MainLoop).not.toBeNull();
    expect(typeof MainLoop.setDraw).toEqual('function');
  })
});
