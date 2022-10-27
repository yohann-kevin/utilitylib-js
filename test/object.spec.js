const { isEqual, clone, clones, isEmpty, merge, isObject } = require("../src/object");

describe("Test unit object method,", () => {
  it("should method isEqual return true if two object is equal", () => {
    const obj1 = {
      name: 'Snow',
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    const obj2 = {
      name: "Snow",
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    expect(isEqual(obj1, obj2)).toEqual(true);
  });

  it("should method isEqual return false if two object is not equal", () => {
    const obj1 = {
      name: "Snow",
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    const obj2 = {
      name: "Snow",
      age: 22,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    expect(isEqual(obj1, obj2)).toEqual(false);
  });

  it("should method clone return new object cloned", () => {
    const objSample = {
      name: "Snow",
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    const objCloned = clone(objSample);

    expect(objSample === objCloned).toEqual(false);
    expect(objSample).toEqual(objCloned);
  });

  it("should method clones return array of object cloned", () => {
    const objectsSample = [
      {
        name: "Snow",
        age: 20,
        location: {
          city: "NY",
          state: "NY",
        },
      },
      {
        name: "Snow",
        age: 22,
        location: {
          city: "NY",
          state: "NY",
        },
      },
    ];

    const objectsCloned = clones(objectsSample);
    const objectEqual = objectsSample[0] === objectsCloned[0];

    expect(objectEqual).toEqual(false);
    expect(objectsSample).toEqual(objectsCloned);
  });

  it("should method isEmpty return true if object is empty", () => {
    const objEmptySample = {};

    const objIsEmpty = isEmpty(objEmptySample);

    expect(objIsEmpty).toEqual(true);
  });

  it("should method isEmpty return false is object is not empty", () => {
    const objSample = {
      name: "Snow",
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    const objIsEmpty = isEmpty(objSample);

    expect(objIsEmpty).toEqual(false);
  });

  it("should method merge return object merged", () => {
    const obj = {
      name: "Snow",
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    const objToMerge = {
      firstname: "Jhon",
      birthday: "1 January",
    };

    const objMergedExpected = {
      name: "Snow",
      age: 20,
      birthday: "1 January",
      location: {
        city: "NY",
        state: "NY",
      },
      firstname: "Jhon",
    };

    const objMerged = merge(obj, objToMerge);

    expect(objMerged).toEqual(objMergedExpected);
  });

  it('should method is object return true if entry is object', () => {
    const obj = {
      name: "Snow",
      age: 20,
      location: {
        city: "NY",
        state: "NY",
      },
    };

    expect(isObject(obj)).toBeTruthy();
  });

  it('should method is object return false if entry is not a object', () => {
    expect(isObject('string')).toBeFalsy();
    expect(isObject(2)).toBeFalsy();
    expect(isObject(['string', 'sample'])).toBeFalsy();
  });
});
