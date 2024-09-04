function solution(participant, completion) {
  // 완주자 명단을 정렬합니다.
  participant.sort();
  completion.sort();
  console.log(participant);
  console.log(completion);

  // 정렬된 명단을 비교하면서 다른 선수를 찾습니다.
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]; // 완주하지 못한 사람 반환
    }
  }
}
