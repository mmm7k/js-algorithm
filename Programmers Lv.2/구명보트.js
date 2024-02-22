function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => b - a);
  let j = people.length - 1;
  for (let i = 0; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    answer++;
  }

  return answer;
}
