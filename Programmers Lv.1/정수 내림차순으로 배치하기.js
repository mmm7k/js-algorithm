function solution(n) {
  var answer = 0;
  answer = Number(n.toString().split('').sort().reverse().join(''));

  return answer;
}
