function validate(obj) {
  let number = obj[0] && obj[0].number ? obj[0].number : '0';
  const padBy = obj[0] && obj[0].padBy ? obj[0].padBy : ',';
  let padHow = obj[0] && obj[0].padHow ? obj[0].padHow : 3;
  const minus = number < 0;
  let len = 0;

  if (isNaN(padHow)) {
    padHow = 3;
  }
  if (isNaN(number)) {
    number = '0';
  }
  if (typeof number !== 'string') {
    number = String(number);
  }
  if (minus) {
    number = number.replace('-', '');
  }
  if (number.length % padHow) {
    len = number.length / padHow + 1;
  } else {
    len = number.length / padHow;
  }

  return {
    number: String(number),
    padBy: String(padBy),
    padHow: Number(padHow),
    minus,
    len: Math.floor(len)
  };
}

function main(...obj) {
  const t = [];
  const { number, padBy, padHow, minus, len } = validate(obj);
  let i = 1;

  while (len >= i) {
    if (i === 1) {
      t.push(number.slice(Number('-' + i * padHow)));
    } else {
      t.push(
        number.slice(
          Number('-' + i * padHow),
          Number('-' + (i * padHow - padHow))
        )
      );
    }
    i++;
  }

  return (minus ? '-' : '') + t.reverse().join(padBy);
}

test('Return string with comma.', () => {
  expect(main({ number: 1000 })).toEqual('1,000');
  expect(main({ number: 10000000 })).toEqual('10,000,000');
  expect(main({ number: 10000000, padBy: ' ', padHow: 4 })).toEqual(
    '1000 0000'
  );
  expect(main({ number: 10000000, padHow: 'a' })).toEqual('10,000,000');
  expect(main({ number: '1000' })).toEqual('1,000');
  expect(main({ number: -1000 })).toEqual('-1,000');
  expect(main({ number: '-1000' })).toEqual('-1,000');
  expect(main({ number: '-100000' })).toEqual('-100,000');
  expect(main({ number: 0 })).toEqual('0');
  expect(main({ number: '0' })).toEqual('0');
  expect(main()).toEqual('0');
});

function mainFp(...obj) {
  const number = (obj[0] && obj[0].number) || 0;
  const padBy = obj[0] && obj[0].padBy ? obj[0].padBy : ',';
  const padHow = obj[0] && !isNaN(obj[0].padHow) ? obj[0].padHow : 3;
  const minus = Number(number) < 0;
  const s = v =>
    v.length > padHow
      ? [s(v.slice(0, Number('-' + padHow))), v.slice(Number('-' + padHow))]
      : v;

  return Promise.resolve(number)
    .then(p1 => String(p1))
    .then(p2 => (minus ? p2.replace('-', '') : p2))
    .then(p3 => s(p3))
    .then(p4 => p4.flat(Infinity))
    .then(p5 => (minus ? '-' : '') + p5.join(padBy))
    .catch(e => '0');
}

test('fp', async () => {
  expect(await mainFp({ number: 10000000 })).toEqual('10,000,000');
  expect(await mainFp({ number: 1000 })).toEqual('1,000');
  expect(await mainFp({ number: 10000000, padBy: ' ', padHow: 4 })).toEqual(
    '1000 0000'
  );
  expect(await mainFp({ number: 10000000, padHow: 'a' })).toEqual('10,000,000');
  expect(await mainFp({ number: '1000' })).toEqual('1,000');
  expect(await mainFp({ number: -1000 })).toEqual('-1,000');
  expect(await mainFp({ number: '-1000' })).toEqual('-1,000');
  expect(await mainFp({ number: '-100000' })).toEqual('-100,000');
  expect(await mainFp({ number: 0 })).toEqual('0');
  expect(await mainFp({ number: '0' })).toEqual('0');
  expect(await mainFp()).toEqual('0');
});
