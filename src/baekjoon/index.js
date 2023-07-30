var fs = require("fs");
var input = fs
  .readFileSync("/home/hagon/2project/test/baekjoon/1000/inputs.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" "))
  .flat()
  .filter((v) => !!v);

console.log(input);
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);

console.log(1 / 3);
