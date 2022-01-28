// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными 
// значениями. Первым параметром функция принимает значение, которым заполнять массив,
//  а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

// ```javascript
// arrayFill('x',5); // [x,x,x,x,x]
// ```

function arrayFill(param,number){

    if(typeof param !== 'number' && typeof param !== 'string' && typeof param !== 'object'){
          throw new Error ('Второй параметр обязателен и может принимать только число')
    } 

    if (typeof number !== 'number'){
         throw new Error ('Второй параметр обязателен и может принимать только число')
    }

    else { 
            let massiv = new Array(number)  
    
            for(let i = 0; i < massiv.length; i++){       
                    massiv[i] = param
            } 
            return massiv  
    }            
}

console.log(arrayFill('x',5)) // [x,x,x,x,x]
