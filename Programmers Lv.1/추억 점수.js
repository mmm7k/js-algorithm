function solution(name, yearning, photo) {
  const matching = {};
  for (let i = 0; i < name.length; i++) {
    matching[name[i]] = yearning[i];
  }

  var answer = [];

  answer = photo.map((i) => i.reduce((arr, cur) => arr + (matching[cur] || 0), 0));

  return answer;
}
