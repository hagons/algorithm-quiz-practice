function main(...obj) {
  if (Object.entries(obj).length === 0) return '0';
  let { number, padBy, padHow } = obj[0];
  number = number ? number : '0';
  padBy = padBy ? padBy : ',';
  padHow = padHow ? padHow : 3;

  if (isNaN(padHow)) return number;
  if (isNaN(number)) return '0';

  const getPadBy = String(padBy);
  const getPadHow = Number(padHow);
  let el = String(number);

  const minus = el < 0;
  if (minus) {
    el = el.replace('-', '');
  }

  const len = Math.floor(
    el.length % getPadHow ? el.length / getPadHow + 1 : el.length / getPadHow
  );
  const t = [];

  let i = 1;
  while (len >= i) {
    if (i === 1) {
      t.push(el.slice(Number('-' + i * getPadHow)));
    } else {
      t.push(
        el.slice(
          Number('-' + i * getPadHow),
          Number('-' + (i * getPadHow - getPadHow))
        )
      );
    }
    i++;
  }
  if (minus) {
    return '-' + t.reverse().join(getPadBy);
  } else {
    return t.reverse().join(getPadBy);
  }
}

test('It will return.', () => {
  expect(main({ number: 1000 })).toEqual('1,000');
  expect(main({ number: 10000000 })).toEqual('10,000,000');
  expect(main({ number: 10000000, padBy: ' ', padHow: 4 })).toEqual(
    '1000 0000'
  );
  expect(main({ number: 10000000, padHow: 'a' })).toEqual(10000000);
  expect(main({ number: '1000' })).toEqual('1,000');
  expect(main({ number: -1000 })).toEqual('-1,000');
  expect(main({ number: '-1000' })).toEqual('-1,000');
  expect(main({ number: '-100000' })).toEqual('-100,000');
  expect(main({ number: 0 })).toEqual('0');
  expect(main({ number: '0' })).toEqual('0');
  expect(main()).toEqual('0');
});
