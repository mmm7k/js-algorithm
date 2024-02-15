function solution(seoul) {
  var answer = '';
  let count = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      count = i;
      break;
    }
  }
  answer = '김서방은 ' + count + '에 있다';
  return answer;
}
