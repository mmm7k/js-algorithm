function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    return [-1];
  }
  let tmp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (tmp > arr[i]) {
      tmp = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tmp) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}
