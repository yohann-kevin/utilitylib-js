const {
  uuid,
  generateID,
} = require("../src/identifier");

describe('Test unit identifier method', () => {
  it('should method uuid return a uuid', () => {
    const id = uuid();

    expect(typeof id).toEqual('string');
    expect(id.length).toEqual(36);
  });

  it('should method generateID return id (default length 21)', () => {
    const id = generateID();

    expect(typeof id).toEqual('string');
    expect(id.length).toEqual(21);
  });

  it('should method generateID return id with a specific length', () => {
    const id = generateID(10);

    expect(typeof id).toEqual('string');
    expect(id.length).toEqual(10);
  });
});
