function solution(n, m, section) {
  let count = 0; // 페인트칠 횟수
  for (let i = 0; i < section.length; ) {
    let end = section[i] + m - 1; // 현재 구역에서 m만큼의 범위를 설정
    count++; // 페인트칠 횟수 증가

    // 현재 페인트칠 구역이 끝나는 지점까지 i를 증가시킴
    while (i < section.length && section[i] <= end) {
      i++;
    }
  }

  return count; // 페인트칠 횟수 반환
}
