function solution(s) {
  var answer = [];
  let check = [];

  for (let i = 0; i < s.length; i++) {
    if (check.includes(s[i])) {
      answer.push(i - check.lastIndexOf(s[i]));
    } else {
      answer.push(-1);
    }
    check.push(s[i]);
  }

  return answer;
}
