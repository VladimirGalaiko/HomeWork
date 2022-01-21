// Напишите функцию `f` которая возвращает сумму всех параметров. 
//Количество параметров может быть любым. Данная функция должна обязательно 
//содержать проверку входных параметров, потому что принимать она может только числа.

// ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```

var i = 0;
var sum = 0;
function f(...param){
    var i = 0;
    for (i in param){        
        if (typeof param[i] !== 'number'){
            throw Error ('Error: all parameters type should be a Number');            
        }
        else {
            sum += param[i];
        }
    }
    console.log(sum);  
    sum = 0;
}

f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number




 






