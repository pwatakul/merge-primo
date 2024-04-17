// import {merge} from "./merge-array";
const { merge } = require('./merge-array');

describe('merge function', () => {
  it('should merge three arrays into one sorted array', () => {
    const collection1 = [5, 4, 3, 2, 1];
    const collection2 = [0, 1, 2, 3, 4];
    const collection3 = [0, 1, 2, 3, 4];
    const expected = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it('should merge arrays with different lengths', () => {
    const collection1 = [5, 3, 1];
    const collection2 = [2, 4];
    const collection3 = [0];
    const expected = [0, 1, 2, 3, 4, 5];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it('should merge arrays with duplicate values', () => {
    const collection1 = [5, 5, 3, 3, 1];
    const collection2 = [2, 2, 4, 4];
    const collection3 = [0, 0];
    const expected = [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it('should merge arrays with negative values', () => {
      const collection1 = [-3, -4, -5];
      const collection2 = [-2, -1, 0];
      const collection3 = [-1, 0, 1, 2];
      const expected = [-5, -4, -3, -2, -1, -1, 0, 0, 1, 2];
      const result = merge(collection1, collection2, collection3);
      expect(result).toEqual(expected);
  });

  it('should return empty array when all input arrays are empty', () => {
      const collection1 = [];
      const collection2 = [];
      const collection3 = [];
      const expected = [];
      const result = merge(collection1, collection2, collection3);
      expect(result).toEqual(expected);
  });

  it('should handle empty arrays and non-empty arrays', () => {
      const collection1 = [3, 2, 1];
      const collection2 = [];
      const collection3 = [0, 4, 5];
      const expected = [0, 1, 2, 3, 4, 5];
      const result = merge(collection1, collection2, collection3);
      expect(result).toEqual(expected);
  });
});