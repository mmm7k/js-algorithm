function solution(n) {
  const answer = String(n)
    .split('')
    .map((str) => Number(str))
    .reverse();
  return answer;
}
