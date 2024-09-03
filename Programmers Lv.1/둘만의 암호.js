function solution(s, skip, index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  // skip 문자열에 있는 문자들을 제거한 새로운 알파벳 문자열을 생성합니다.
  let availableAlphabet = '';
  for (let char of alphabet) {
    if (!skip.includes(char)) {
      availableAlphabet += char;
    }
  }

  for (let char of s) {
    // 현재 문자(char)의 위치를 찾습니다.
    let currentIndex = availableAlphabet.indexOf(char);

    // index만큼 뒤로 이동한 새로운 위치를 계산합니다.
    let newIndex = (currentIndex + index) % availableAlphabet.length;

    // 결과 문자열에 변환된 문자를 추가합니다.
    result += availableAlphabet[newIndex];
  }

  return result;
}
