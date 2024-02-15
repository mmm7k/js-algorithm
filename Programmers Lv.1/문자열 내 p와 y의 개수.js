function solution(s) {
  let countp = 0;
  let county = 0;
  s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') {
      countp++;
    } else if (s[i] === 'y' || s[i] === 'Y') {
      county++;
    }
  }
  return countp === county ? true : false;
}
