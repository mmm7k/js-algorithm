function solution(k, score) {
  var answer = [];
  //명예의 전당 배열
  let t = [];
  for (let i = 0; i < score.length; i++) {
    if (t.length < k) {
      t.push(score[i]);
    } else if (score[i] > t[k - 1]) {
      t[k - 1] = score[i];
    }
    t.sort((a, b) => b - a);
    answer.push(Math.min(...t));
  }
  return answer;
}
