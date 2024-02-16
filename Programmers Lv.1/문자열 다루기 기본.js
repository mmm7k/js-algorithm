function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      count++;
    } else {
      return false;
    }
  }
  if (count === s.length) {
    return true;
  }
}
