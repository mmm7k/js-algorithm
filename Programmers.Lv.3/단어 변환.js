function solution(begin, target, words) {
  // target이 words에 없다면 변환할 수 없으므로 0을 반환합니다.
  if (!words.includes(target)) return 0;

  // BFS를 위한 큐와 방문 표시 배열을 초기화합니다.
  let queue = [[begin, 0]]; // 현재 단어와 변환 횟수를 함께 저장합니다.
  const visited = new Set();

  while (queue.length > 0) {
    const [currentWord, steps] = queue.shift();

    // 목표 단어에 도달하면 변환 횟수를 반환합니다.
    if (currentWord === target) return steps;

    // words에 있는 단어를 순회하며 변환 가능한 단어를 찾습니다.
    for (let word of words) {
      if (!visited.has(word) && isTransformable(currentWord, word)) {
        visited.add(word); // 변환한 단어를 방문 처리합니다.
        queue.push([word, steps + 1]); // 변환 횟수를 증가시켜 큐에 추가합니다.
      }
    }
  }

  // 목표 단어에 도달할 수 없는 경우 0을 반환합니다.
  return 0;
}

// 두 단어가 한 글자만 다른지 확인하는 함수입니다.
function isTransformable(word1, word2) {
  let diffCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diffCount++;
    if (diffCount > 1) return false;
  }

  return diffCount === 1;
}
