const {
  isConsumn,
  isVowel,
  isVowels,
  isConsumns,
  getInitialName,
  isString,
  toKebabCase,
  toSnakeCase,
  camelCaseToOtherCase,
  toPascalCase,
  uuid
} = require("../src/letter");

describe("Test unit letter method", () => {
  it("should method vowel return true", () => {
    expect(isVowel("a")).toEqual(true);
    expect(isVowel("A")).toEqual(true);
  });

  it("should method vowel return false", () => {
    expect(isVowel("b")).toEqual(false);
  });

  it("should method vowels return array of boolean", () => {
    const letterSample = ["a", "c", "e"];
    const arrayExpected = [true, false, true];
    const vowels = isVowels(letterSample);
    expect(vowels).toEqual(arrayExpected);
  });

  it("should method consumn return true", () => {
    expect(isConsumn("b")).toEqual(true);
    expect(isConsumn("B")).toEqual(true);
  });

  it("should method consumn return false", () => {
    expect(isConsumn("a")).toEqual(false);
  });

  it("should method consumns return array of boolean", () => {
    const letterSample = ["a", "c", "e", "f"];
    const arrayExpected = [false, true, false, true];
    const consumns = isConsumns(letterSample);
    expect(consumns).toEqual(arrayExpected);
  });

  it('should method getIntialName return initial without separator', () => {
    const fullName = 'john snow';
    const initialExpected = 'J S';
    const initial = getInitialName(fullName);
    expect(initial).toEqual(initialExpected);
  });

  it('should method getIntialName return initial with separator', () => {
    const fullName = 'john snow';
    const initialExpectedOne = 'J.S';
    const initialExpectedTwo = 'J-S';

    const initialOne = getInitialName(fullName, '.');
    const initialTwo = getInitialName(fullName, '-');
    
    expect(initialOne).toEqual(initialExpectedOne);
    expect(initialTwo).toEqual(initialExpectedTwo);
  });

  it('should method is string return true if entry is string', () => {
    expect(isString('string')).toBeTruthy();
    expect(isString('s')).toBeTruthy();
  });

  it('should method is string return false if entry is not a string', () => {
    expect(isString(2)).toBeFalsy();
    expect(isString({ object: 'sample' })).toBeFalsy();
    expect(isString(['array', 'sample'])).toBeFalsy();
  });

  it('should method toKebabCase convert value in camelCase to kebab-case', () => {
    const valueSample = 'testTest';

    const result = toKebabCase(valueSample);

    expect(result).toEqual('test-test');
  });

  it('should method toSnakeCase convert value in camelCase to snake_case', () => {
    const valueSample = 'testTest';

    const result = toSnakeCase(valueSample);

    expect(result).toEqual('test_test');
  });

  it('should method camelCaseToOtherCase convert value in camelCase to other case with separator', () => {
    const valueSample = 'testTest';

    const resultSnakeCase = camelCaseToOtherCase(valueSample, '_');
    const resultKebabCase = camelCaseToOtherCase(valueSample, '-');

    expect(resultSnakeCase).toEqual('test_test');
    expect(resultKebabCase).toEqual('test-test');
  });

  it('should method toPascalCase convert value in camelCase to PascalCase', () => {
    const valueSample = 'testTest';

    const result = toPascalCase(valueSample);

    expect(result).toEqual('TestTest');
  });

  it('should method uuid return a uuid', () => {
    const id = uuid();
    expect(id.length).toEqual(36);
  });
});
