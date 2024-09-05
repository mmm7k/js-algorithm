function solution(n, lost, reserve) {
  var answer = n;

  // 여분의 체육복을 가진 학생이 도난당했을 경우, 미리 제외해줍니다.
  let actualLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  let actualReserve = reserve.filter((r) => !lost.includes(r)).sort((a, b) => a - b);

  for (let i = 0; i < actualLost.length; i++) {
    // 앞 번호 학생이 여분이 있는 경우
    if (actualReserve.includes(actualLost[i] - 1)) {
      actualReserve = actualReserve.filter((r) => r !== actualLost[i] - 1); // 빌려준 사람 제거
    }
    // 뒷 번호 학생이 여분이 있는 경우
    else if (actualReserve.includes(actualLost[i] + 1)) {
      actualReserve = actualReserve.filter((r) => r !== actualLost[i] + 1); // 빌려준 사람 제거
    } else {
      answer -= 1; // 빌려줄 수 없으면 학생 수 감소
    }
  }

  return answer;
}
