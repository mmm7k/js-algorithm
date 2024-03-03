function solution(k, tangerine) {
  // 귤의 크기별 개수를 세어 저장할 객체
  const countMap = {};
  tangerine.forEach((size) => {
    if (countMap[size]) {
      countMap[size] += 1;
    } else {
      countMap[size] = 1;
    }
  });

  // 귤의 개수별로 내림차순 정렬
  const sortedCounts = Object.values(countMap).sort((a, b) => b - a);

  // k개를 선택하기 위해 필요한 종류의 최소 수를 찾음
  let total = 0;
  let types = 0;
  for (let count of sortedCounts) {
    total += count;
    types += 1;
    if (total >= k) break;
  }

  return types;
}
