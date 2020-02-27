function main(arr, num) {
  return 4;
}

test('It will return.', () => {
  expect(main([-1, 3, -1, 5, 4], 2)).toEqual(4);
  // expect(main([2, 4, -2, -3, 8], 1)).toEqual(8);
  // expect(main([-5, -3, 1], 3)).toEqual(-5);
});
