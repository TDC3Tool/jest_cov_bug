import foo from './foo.bad';

describe('foo', () => {
  it('checks if foo prop equals to bar', () => {
    expect(foo.prop).toEqual('bar');
  });
});

