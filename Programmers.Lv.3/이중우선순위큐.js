function solution(operations) {
  let queue = [];

  for (let operation of operations) {
    let [command, value] = operation.split(" ");
    value = parseInt(value);

    if (command === "I") {
      queue.push(value);
    } else if (command === "D" && queue.length > 0) {
      if (value === 1) {
        let max = Math.max(...queue);
        queue = queue.filter((num) => num !== max);
      } else if (value === -1) {
        let min = Math.min(...queue);
        queue = queue.filter((num) => num !== min);
      }
    }
  }

  if (queue.length === 0) return [0, 0];
  return [Math.max(...queue), Math.min(...queue)];
}
