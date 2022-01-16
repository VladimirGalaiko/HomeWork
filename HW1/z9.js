// Отсортировать массив по убыванию.

// var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]

var arr = [1,2,3,4,5,6];
let i = 0;
let j = i;

for(i  in arr ) {    
    for(j in arr) {
       if (arr[i] > arr[j]) {
           let obmen = arr[i];
           arr[i] = arr[j];
           arr[j] = obmen;
       }
   }
}
console.log(arr);