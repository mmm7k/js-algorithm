function solution(t, p) {
  var answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let num = t.substr(i, p.length);

    if (Number(num) <= Number(p)) answer++;
  }
  return answer;
}
