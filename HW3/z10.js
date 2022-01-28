
// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра,
// а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```

function reverse(arr, callback){
    
    if(!Array.isArray(arr) ){
        throw new Error('Не верный один из параметров!')
    }
    if (arr.length == 0){
        throw new Error ('Массив не должен быть пустым')
    }

    else {
          let newArr = new Array()
          for(let i = arr.length-1; i >=0; i--){            
              newArr.push(arr[i]) 
              
           }
    return newArr
    }
}


const arr = [1,2,3];
let rez = reverse(arr)

console.log(rez)