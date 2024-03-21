function solution(strings, n) {
    return strings.sort((a, b) => {
        // a[n]이 b[n]보다 크면 1을 반환하고 // 내림차순
      if (a[n] > b[n]) return 1;
 
        // a[n]이 b[n]보다 작으면 -1을 반환하고 // 오름차순
      else if (a[n] < b[n]) return -1;
 
        // a[n]이 b[n]과 같으면 사전순으로 정렬한다.
      else return a > b ? 1 : -1;
    });
  }