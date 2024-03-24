function solution(a, b) {
  let answer = '';
  let sum_day = 0;
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < a - 1; i++) {
    sum_day += month[i];
  }
  sum_day += b;
  answer = day[(sum_day - 1) % 7];
  return answer;
}
