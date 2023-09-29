export const getSumOfMoney = (orders: []) => {
  var sum = 0;
  orders?.forEach((item: any) => {
    if (item) {
      sum = sum + item.totalPayment;
    }
  });
  return sum;
};

export const getAverageOfMoney = (orders: []) => {
  var sum = 0;
  orders?.forEach((item: any) => {
    if (item) {
      sum = sum + item.totalPayment;
    }
  });
  const result = sum / orders?.length;
  return result ? result : 0;
};
