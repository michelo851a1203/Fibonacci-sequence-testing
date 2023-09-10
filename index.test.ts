import { bench, describe, expect, test } from 'vitest';
import { factorial, fib, currySum } from '.'

describe.skip('factorial', () => {
  test('0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('10', () => {
    expect(factorial(10)).toBe(3628800);
  });
})

describe.skip('fibinacci', () => {
  test('0', () => {
    expect(fib(0)).toBe(1);
  });

  test('1', () => {
    expect(fib(1)).toBe(1);
  });
  //
  test('2', () => {
    expect(fib(2)).toBe(2);
  });
  
  test('3', () => {
    expect(fib(3)).toBe(3);
  });
  
  test('4', () => {
    expect(fib(4)).toBe(5);
  });

  test('5', () => {
    expect(fib(5)).toBe(8);
  });

  test('11', () => {
    expect(fib(11)).toBe(144);
  });

  test('80', () => {
    expect(fib(80)).toBe(37889062373143906);
  });
})

describe.skip('sum', () => {
  test('single value', () => {
    expect(currySum(10)()).toBe(10);
  });

  test('two sum', () => {
    expect((currySum(10)(15) as () => number)()).toBe(10 + 15);
  });

  test('three sum', () => {
    type ResultType = (a: number) => () => number;
    expect((currySum(10)(15) as ResultType)(15)()).toBe(10 + 15 + 15);
  });


  test('more sum', () => {
    type ResultType = (a: number) => (b: number) => (c: number) => () => number;
    expect((currySum(10)(15) as ResultType)(15)(12)(18)()).toBe(10 + 15 + 15 + 12 + 18);
  });

})
