function solution(price, money, count) {
  let firstprice = price;
  for (let i = 0; i < count; i++) {
    money = money - price;
    price += firstprice;
  }
  if (money < 0) {
    return -money;
  } else {
    return 0;
  }
}
