function solution(ingredient) {
    var answer = 0;
    var t = [];

    for (let i = 0; i < ingredient.length; i++) {
        t.push(ingredient[i]);

        // 배열 t의 마지막 4개의 값이 [1, 2, 3, 1] 인지 확인
        if (t.length >= 4 && t.slice(-4).join('') === '1231') {
            answer++;  // 햄버거 하나 완성
            t.splice(-4, 4);  // 햄버거 재료 삭제
        }
    }

    return answer;
}
