// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});



function every(arr, callback){

    if(!Array.isArray(arr) || typeof callback !== "function"){
          throw new Error('Не верный один из параметров!')
     }
      else {
          for(i in arr){
             if(callback(arr[i],i,arr)){
                return true
              }
           }
      }
      return false
  
  }
  
//const arr = [1,2,4] //false
const arr = [1,2,3]
let rez = every(arr, (element, i, arr) => {     
                  return element === 3
              });
              
  console.log(rez)
  