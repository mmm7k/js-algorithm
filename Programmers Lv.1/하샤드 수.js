function solution(x) {
  var answer = true;
  let tmp = 0;
  let sum = 0;
  tmp = x.toString().split('');
  for (let i = 0; i < tmp.length; i++) {
    sum += Number(tmp[i]);
  }
  if (x % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
