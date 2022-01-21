// Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
// Данная функция должна обязательно содержать проверку входных параметров, потому 
// что принимать она может только числа.

// ```js
// f(9,3,2); // 3
// f('s',9,3) // Error: all parameters type should be a Number
// ```


var rez = 0;

function f(a,b,c){
    for (param of arguments){
        if(typeof param !== 'number' ){
            throw Error ('Error: все параметры должны быть числовыми');
        }
        else {
            rez = (a - b)/c            
        }
    } 
    console.log(rez);    
}

f(9,3,2);
f('s',9,3);
