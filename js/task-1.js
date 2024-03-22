const isEnoughCapacity = function (products, containerSize) {
  let sum = 0;

  for (const product of Object.values(products)) {
    sum += product;
  }

  return sum <= containerSize;
};

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
