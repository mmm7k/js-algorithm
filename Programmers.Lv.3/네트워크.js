function solution(n, computers) {
  let answer = 0; // 네트워크 개수
  const visited = []; // 방문 여부 배열

  // DFS 함수 정의
  const dfs = (node) => {
    visited[node] = true; // 현재 컴퓨터 방문 표시
    for (let i = 0; i < computers.length; i++) {
      // 연결되어 있고 방문하지 않은 컴퓨터가 있으면 DFS 재귀 호출
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i); // i번 컴퓨터 방문
      }
    }
  };

  // 모든 컴퓨터에 대해 DFS 탐색 시작
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 컴퓨터가 있다면 새로운 네트워크 시작
      dfs(i); // 해당 컴퓨터와 연결된 모든 컴퓨터 방문
      answer++; // 새로운 네트워크 개수 증가
    }
  }

  return answer; // 최종 네트워크 개수 반환
}
