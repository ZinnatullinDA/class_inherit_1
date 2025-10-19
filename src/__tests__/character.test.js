import { Character } from "../Character.js";

describe('Character', () => {
  test('should create valid character', () => {
    const c = new Character('Bob', 'Bowman');
    expect(c).toEqual({
      name: 'Bob',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined,
    });
  });

  test('should throw error for short name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
  });

  test('should throw error for long name', () => {
    expect(() => new Character('VeryLongNameHere', 'Bowman')).toThrow();
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Bob', 'Ninja')).toThrow();
  });
});
