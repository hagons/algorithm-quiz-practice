function solution(data) {
  const rows = data.split(' ');
  const msgNum = rows[0];
  const times = rows[1]
    .split('\n')
    .filter(v => v !== '')
    .map(v => Number(v));
  const answer = Array(Number(times.shift())).fill(0);
  const sortedTimes = times.sort((a, b) => a - b);

  for (let i = 0; i < msgNum; i++) {
    if (i === 0) {
      answer[0] = sortedTimes[i];
    } else {
      if (answer[0] + sortedTimes[i] > answer[1] + sortedTimes[i]) {
        answer[1] = answer[1] + sortedTimes[i];
      } else {
        answer[0] = answer[0] + sortedTimes[i];
      }
    }
  }

  return answer[0] >= answer[1] ? answer[0] : answer[1];
}

test('메세지 큐 문제. 총 시간 반환.', () => {
  expect(solution('5 2\n4\n3\n2\n5\n8\n')).toEqual(14);
  // 2칸까지 비교하면 8이 나와야 하지만 단순 비교시 9가 나옴
  // expect(solution('5 2\n1\n2\n3\n4\n5\n')).toEqual(8);
});
