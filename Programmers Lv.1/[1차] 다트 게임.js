function solution(dartResult) {
  let scores = [];
  let score = 0;
  let i = 0;

  while (i < dartResult.length) {
    if (!isNaN(dartResult[i])) {
      // 점수가 10일 경우 처리
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        score = 10;
        i++;
      } else {
        score = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] === 'S') {
      scores.push(score);
    } else if (dartResult[i] === 'D') {
      scores.push(Math.pow(score, 2));
    } else if (dartResult[i] === 'T') {
      scores.push(Math.pow(score, 3));
    } else if (dartResult[i] === '*') {
      let length = scores.length;
      scores[length - 1] *= 2;
      if (length > 1) {
        scores[length - 2] *= 2;
      }
    } else if (dartResult[i] === '#') {
      scores[scores.length - 1] *= -1;
    }
    i++;
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}
