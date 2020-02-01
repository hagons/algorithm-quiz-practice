const star = data => {
  const n = data.split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);
  let print = '';

  if (a <= 0 || a > 1000) return console.log('error');
  if (b <= 0 || b > 1000) return console.log('error');

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      print += '*';
    }
    print += '\n';
  }
  // console.log(print);
  return print;
};

test('It will printing star.', () => {
  expect(star('5 3')).toBe('*****\n*****\n*****\n');
});
