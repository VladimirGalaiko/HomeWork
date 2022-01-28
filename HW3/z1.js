// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});
// ```

function forEach(arr, callback) {  

    if(!Array.isArray(arr) || typeof callback !== "function"){
        throw new Error('Не верный один из параметров!')
    }
    else{
    for (i in arr) {    
        callback(arr[i], i, arr);              
      }      
    }
}    
 const arr = [1,2,3];

forEach(arr, (element, i, arr) => {  
     console.log(`index : ${i}`, `element = ${element}`,`Из массива : [${arr}]`)
     })   





  

