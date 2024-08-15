function solution(food) {
  var answer = '';
  for (let i = 0; i < food.length; i++) {
    if (food[i] === 1) continue;
    else if (food[i] % 2 === 0) {
      for (let j = 0; j < food[i] / 2; j++) {
        answer += i;
      }
    } else {
      for (let j = 0; j < food[i] / 2 - 1; j++) {
        answer += i;
      }
    }
  }
  return answer + '0' + answer.split('').reverse().join('');
}
