// Отсортировать массив по возрастанию.

// var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]

var arr = [6,5,4,3,2,1];
let i = 0;
let j = i;

for (i in arr){
    for(j in arr){
        if (arr[i] < arr[j]){
            let obmen = arr[i];
            arr[i] = arr[j];
            arr[j] = obmen;
        }
    }
}
console.log(arr);