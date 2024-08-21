function solution(nums) {
  // 배열에서 고유한 포켓몬 종류의 수를 계산합니다.
  const uniqueTypes = new Set(nums).size;

  // 선택할 수 있는 포켓몬의 최대 수는 배열 길이의 절반입니다.
  const maxPick = nums.length / 2;

  // 고유한 포켓몬 종류의 수와 선택할 수 있는 포켓몬 수 중 더 작은 값을 반환합니다.
  return Math.min(uniqueTypes, maxPick);
}
