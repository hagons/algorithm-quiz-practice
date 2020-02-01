function solution(data) {
  let maxSum = data[0];
  let currentSum = data[0];

  for (let i = 1; i < data.length; i++) {
    currentSum = Math.max(currentSum + data[i], data[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

test('정수 배열 이어지는 가장 큰 원소.', () => {
  expect(solution([-1, 3, -1, 5])).toBe(7); // 3 + (-1) + 5
  expect(solution([-5, -3, -1])).toBe(-1); // -1
  expect(solution([2, 4, -2, -3, 8])).toBe(9); // 2 + 4 + (-2) + (-3) + 8
});
