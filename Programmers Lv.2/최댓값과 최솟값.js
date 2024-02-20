function solution(s) {
  var answer = '';
  let arr = s.split(' ');
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  answer = min + ' ' + max;

  return answer;
}
