function reduce(arr, fn, init) {
   let acc = init;
   let start_index = 0;

   if(acc === undefined) { // stugum enq vor ete inite 0a poxancvel, arri 1in elemic sksenq
    acc = arr[0];
    start_index = 1;
   }
   const size = arr.length;

   for(let i = 0; i < size; i++) {
    acc = fn(acc, arr[i]);
   }
   return acc;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

function sum(acc, value) {
    return acc + value;
}

const sum_elements_of_array = reduce(arr, sum, 0);

console.log(sum_elements_of_array);
