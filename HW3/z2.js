// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
// Функция должна содержать проверки:
// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```

function filter(arr,callback){
  if(!Array.isArray(arr) || typeof callback !== "function"){
    throw new Error('Не верный один из параметров!')
  }
  else {
         let newArr = new Array()
         for (i in arr) {    
              if(callback(arr[i], i, arr)){
              newArr.push(arr[i]) 
              }
         }    
      return newArr  
  }
}

const arr = [1,2,3]
let rez = filter(arr, (element, i, arr) => { 
                      return element > 1
                })   
        
console.log(rez)
           

   