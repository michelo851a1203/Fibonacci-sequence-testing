export const factorial = (n : number) => {
  if(n === 0) return 1;

  let sum = 1
  for(let i = 1;i <= n;i++){
    sum *= i
  }
  return sum
}

export const fib = (n: number) => {
  if (n === 0) return 1;
  if (n === 1) return 1;

  let previous = 1, current = 1;
  for (let i = 2; i <= n; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}


export const fibNewBad = (n: number) => {
 if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibNewBad(n - 1) + fibNewBad(n - 2);
  }
}

export type CurriedSum = (a: number) => (b?: number) => number;

export const currySum  = (a: number)  => {
  return (b?: number) => {
    if (b === undefined)  return a;
    return currySum(a + b);
  };
};
