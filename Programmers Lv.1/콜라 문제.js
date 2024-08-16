function solution(a, b, n) {
  let change = 0;

  while (n >= a) {
    change += Math.floor(n / a) * b;
    // 교환한 콜라 수와 교환하고 남은 빈병 수를 더해준다.
    n = Math.floor(n / a) * b + (n % a);
  }
  return change;
}
