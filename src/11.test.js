const test1 = ['EGG', 'FOO']; // E->F, G->O
const test1Expect = true;
const test2 = ['ABBCD', 'APPLE']; // A->A, B->P, C->L, D->E
const test2Expect = true;
const test3 = ['AAB', 'FOO'];
const test3Expect = false;

function main(arr) {
  return true;
}

test('good?', () => {
  expect(main(test1)).toEqual(test1Expect);
  // expect(main(test2)).toEqual(test2Expect);
  // expect(main(test3)).toEqual(test3Expect);
});
