function solution(s) {
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stackCount += 1;
    } else {
      stackCount += -1;
    }
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}
