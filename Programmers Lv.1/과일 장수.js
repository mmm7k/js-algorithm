function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => a - b);
  while (1) {
    let t = k;
    if (score.length < m) {
      break;
    }
    for (let i = 0; i < m; i++) {
      let current = score.pop();
      if (t > current) {
        t = current;
      }
    }
    answer += m * t;
  }
  return answer;
}
