// Write a JavaScript function that merges two arrays and removes all duplicate elements.

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let arr = [...array1, ...array2]; // Output : [ 1, 2, 3, 2, 30, 1 ]
// let arr = array1.concat(array2); // Output : [ 1, 2, 3, 2, 30, 1 ]

console.log(arr); // menggabungkan dua array tetapi tidak menghapus element yang sama

// filter() --> membuat array baru dengan elemen-elemen yang unik
let uniqueArr = arr.filter((e, i, arr) => {
  // console.log("e:", e, "i:", i);
  // merged = arr.indexOf(e) === i;
  // console.log("merged", merged);
  // return merged;
  // indefOf() -->  mencari indeks pertama dari nilai elemen di dalam array
  return arr.indexOf(e) === i;
});

console.log(uniqueArr); // Output : [1, 2, 3, 30]

// CARA LAIN <-- pakai Object sets
let merged_array = [...new Set(arr)];
console.log(merged_array); // Output : [1, 2, 3, 30]
