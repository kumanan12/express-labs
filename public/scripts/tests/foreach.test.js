// @ts-nocheck
const forEach = require('../foreach');
const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

describe('mock test data', () => {
  test('custom foreach function tests', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    
    const result = [11, 12].filter(num => filterTestFn(num));
    
    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls[0][0]); // 11
    console.log(filterTestFn.mock.calls[0][1]); // 12
    // > 10, 'x', true, true
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
