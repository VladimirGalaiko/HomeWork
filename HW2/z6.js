// Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: 
// чётное оно или нет. Если чётное — функция возвращает `true`, если нечётное — `false`. 
// Данная функция должна обязательно содержать проверку входного параметра, потому что
//  принимать она может только число.

// *Чётные числа могут делится на 2 без остатка.*

// ```js
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
// ```

function isEven(param){    
    if (typeof param !== 'number'){
        throw new Error ('Error: параметр должен быть только числом ');        
    }
    else if (param % 2 == 0){
        console.log(true);
    }
    else if (param % 2 !== 0 ){
        console.log(false);
    }    
}

 isEven(3); 
 isEven(4); 
 isEven('Content');