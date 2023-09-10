import { describe, bench } from "vitest";
import { fib, fibNewBad } from ".";

describe('fibinacci 2', () => {
  bench('better', () => {
    fib(2)
  });

  bench('not good', () => {
    fibNewBad(2)
  });
})


describe('fibinacci 5', () => {
  bench('better', () => {
    fib(5)
  });

  bench('not good', () => {
    fibNewBad(5)
  });
})

describe('fibinacci 10', () => {
  bench('better', () => {
    fib(10)
  });

  bench('not good', () => {
    fibNewBad(10)
  });
})

describe('fibinacci 20', () => {
  bench('better', () => {
    fib(20)
  });

  bench('not good', () => {
    fibNewBad(20)
  });
})


describe('fibinacci 30', () => {
  bench('better', () => {
    fib(30)
  });

  bench('not good', () => {
    fibNewBad(30)
  });
})

