function solution(triangle) {
  // 삼각형 배열의 맨 아래층부터 시작하여, 꼭대기 층까지 올라오며 각 위치의 최댓값을 계산합니다.
  for (let i = triangle.length - 1; i >= 0; i--) {
    // 현재 층에서 각 숫자에 대해 대각선 방향으로 이동 가능한 두 가지 선택지 중 큰 값을 선택해 윗층에 더해줍니다.
    for (let j = 0; j < triangle[i].length - 1; j++) {
      triangle[i - 1][j] = Math.max(
        triangle[i - 1][j] + triangle[i][j], // 왼쪽 대각선으로 이동했을 때
        triangle[i - 1][j] + triangle[i][j + 1] // 오른쪽 대각선으로 이동했을 때
      );
    }
  }
  // 꼭대기 층의 값이 최대 합 경로의 값이 됩니다.
  return triangle[0][0];
}
