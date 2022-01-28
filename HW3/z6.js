// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);



function reduceRight(arr, callback,acc){
    if(!Array.isArray(arr) || typeof callback !== "function"
        || typeof acc !== "number" && typeof acc !== "string"){
        throw new Error('Не верный один из параметров!')
    }
    else {
        for(let i = arr.length-1; i >=0; i--){
            acc = callback(acc, arr[i], i, arr)
            }
        }
        return acc
    }


const arr = ['a','b','c'];  // rez = abc
const acc = '';

// const arr = [1,2,3];
// const acc = 0;
let rez = reduceRight(arr, function(acc, element, i, arr) {
    return element + acc
}, acc);

console.log(rez)