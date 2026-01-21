// // 'use strict'
// // let value = 10;
// // console.log(delete value);

// // //split
// // const str = 'abc';
// // console.log(str);
// // console.log(str.split('', 2));
// // console.log(str.split(''));
// // console.log(str.split());

// // //reverse
// // const arr = ['h', 'e', 'l', 'l', 'o'];
// // console.log(arr.reverse());
// // const str = "he.l.lo";
// // console.log(str.split('.').reverse());

// // //join
// // const arr = ['a', 'b', 'c'];
// // console.log(arr.join());
// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.join());
// // console.log(numbers.join('-'));
// // console.log(typeof numbers.join('..')); // -> string

// // const string = 'methods';
// // console.log(string.split('').reverse().join(''));

// // // trim

// // const str = '     hello world  ';
// // console.log(str.trim());
// // console.log(str);
// // console.log(str.trimStart());
// // console.log(str.trimEnd());

// // padStart
// // const str = '555';
// // console.log(str.padStart(6));
// // console.log(str.padStart(3));
// // console.log(str.padStart(2));
// // console.log(str.padStart(7, '$'));
// // console.log(str);

// const arr = [1, NaN, 2, 4];
// const result1 = arr.indexOf(NaN);
// console.log(result1);

// const arr = ['hello', 'hi', 'hello', 'world', 'how', 'link'];
// console.log(arr.indexOf('hello', -4));

// includes
// const arr = [1, 2, 1, 3, 4, 5];
// console.log(arr.includes(1, -4));

// some
// const arr = [1, 2, 3, 4];
// console.log(arr.some(elem => elem > 0));

// concat
// const arr1 = [1, 2];
// const arr2 = [3];
// const result = arr1.concat(arr2, 4, [5, [6]]);

// console.log(result);

// console.log(arr1.concat({a: 12}));

// const word = 'hello work';
// console.log(word.substr(2));

// function foo(word) {
//     if(word === "") return "";
//     return foo(word.substr(1)) + word[0];
// }

// console.log(foo('abc'));