function solution(players, callings) {
  // 해시맵 생성 (선수 이름을 키로, 인덱스를 값으로)
  let playerMap = {};
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let call = callings[i];
    let index = playerMap[call];

    // 앞선 선수와 교체
    if (index > 0) {
      let prevPlayer = players[index - 1];

      // players 배열에서 선수 위치 교체
      [players[index], players[index - 1]] = [players[index - 1], players[index]];

      // 해시맵에서도 인덱스 갱신
      playerMap[call] = index - 1;
      playerMap[prevPlayer] = index;
    }
  }

  return players;
}
