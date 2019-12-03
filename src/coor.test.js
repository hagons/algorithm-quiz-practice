function coorValidate(v) {
  if (v.length != 3) return false;
  const isNumCondition = !v
    .map(coor => {
      return coor.map(v => v < 1 || v > 100000000) || coor.length != 2;
    })
    .some(bool => bool === false);
  if (isNumCondition) return false;
  return true;
}
function getUnique(e, i, a) {
  return a.filter(v => e === v).length === 1 ? e : null;
}
function solution(v) {
  if (coorValidate(v)) return console.log('error');

  const answer = [
    v
      .map(coor => coor.shift())
      .map(getUnique)
      .filter(n => n !== null)
      .pop(),
    v
      .map(coor => coor.pop())
      .map(getUnique)
      .filter(n => n !== null)
      .pop()
  ];
  return answer;
}

test('It will return.', () => {
  expect(solution([[1, 2], [2, 4], [2, 2]])).toEqual([1, 4]);
});
