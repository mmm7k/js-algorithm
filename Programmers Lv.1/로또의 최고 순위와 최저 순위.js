function solution(lottos, win_nums) {
  let answer = [];
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = 0;
  let count = 0;
  for (let i = 0; i < 6; i++) {
    if (lottos[i] == 0) {
      zeroCount++;
    } else if (win_nums.includes(lottos[i])) {
      count++;
    }
  }
  let maxRank = rank[zeroCount + count];
  let minRank = rank[count];

  answer.push(maxRank, minRank);
  return answer;
}
