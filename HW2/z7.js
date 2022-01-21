// Сделайте функцию `getDivisors`, которая параметром принимает число
// и возвращает массив его делителей (чисел, на которое делится данное число начиная
// от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку
// входного параметра, потому что принимать она может только число больше 0.

// ```js
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors('Content'); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0


var arr = new Array;

function getDivisors(param){
    if (typeof param !== 'number'){
        throw new Error ('Error: параметр должен быть только числом ');        
    }
    else if (param == 0){
        throw new Error ('Error: параметр не может быть 0');  
    }
    else {
        for (var i = 0 ; i <= param; i++ ){                 
            var rez = param / i;             
            if (rez % 1  == 0 ){
                arr.push(i);                                             
            }                          
       }     
    }   
    console.log(arr); 
}
getDivisors(12);
//getDivisors('Content'); 
//getDivisors(0); 