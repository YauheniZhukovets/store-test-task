type SumOrderType = {
  price: number;
  count: number;
};

export const sumOrder = (order: SumOrderType[]) => {
  let sum = 0;

  order.forEach(el => {
    sum += el.price * el.count;
  });
  if (sum === 0) {
    return null;
  }

  return `${sum} BYN`;
};
