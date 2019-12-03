function solution(data) {
  const rows = data.split('\n');
  // const gridNum = rows[0].split(' ').map(v => Number(v));
  const target = rows[1].split(' ').map(v => Number(v) - 1);

  // const grid = Array(gridNum[0])
  //   .fill(null)
  //   .map(() => Array(gridNum[1]).fill(0));

  function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) result *= i;
    return result;
  }

  // grid[target[0]][target[1]] = 1;

  const way =
    factorial(target[0] + target[1]) /
    (factorial(target[0]) * factorial(target[1]));
  const time = target.reduce((a, c) => a + c);

  return `${way} ${time}`;
}

test('[경우의 수, 이동거리].', () => {
  expect(solution('9 9\n3 2')).toEqual('3 3');
  expect(solution('3 3\n2 2')).toEqual('2 2');
});
