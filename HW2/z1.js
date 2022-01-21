// Напишите функцию `f`, которая возвращает куб числа. Число передается параметром.
// Данная функция должна обязательно содержать проверку входного параметра, 
// потому что принимать она может только число.

// ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```

var f = function(n){
    if (typeof n === 'number' ){
       var  rez = n * n * n;
        console.log(rez);
    }
    else {
        throw Error('Error: parameter type is not a Number');
    }
}

f(2);