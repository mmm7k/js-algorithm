function solution(n, m) {
  var answer = [];
  let min = Math.min(n, m);
  let d = 0;
  for (let i = min; i > 0; i--) {
    if (n % i == 0 && m % i == 0) {
      d = i;
      break;
    }
  }
  return [d, (n * m) / d];
}
