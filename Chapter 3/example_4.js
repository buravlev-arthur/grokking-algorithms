const fact = (x) => x === 1 ? 1 : x * fact(x - 1);

//tail recursion
const fact_iterative = (x, production) => {
  if (x > 0) {
    return fact_iterative(x - 1, production * x);
  }
  
  return production;
};

console.log(fact(5));
console.log(fact_iterative(5, 1));