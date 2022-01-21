// Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем
//  возвращает день недели на русском языке. Данная функция должна обязательно 
//  содержать проверку входного параметра, потому что принимать она может только 
//  числа от 1 до 7.

// ```js
// f(1); // Воскресенье
// f(2); // Понедельник
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number

function f(){
    for (param of arguments){
        if (typeof param !== 'number'){
            throw new Error ('Error: параметр должен быть только числом ');
        }
        else if(param > 7 || param < 1){
            throw new Error ('Error: параметр должен быть числом от 1 до 7');
        }
        else {
            var rez = (param == 1) ? 'Воскресенье' :
                      (param == 2) ? 'Понедельник' :
                      (param == 3) ? 'Вторник' :
                      (param == 4) ? 'Среда' :
                      (param == 5) ? 'Четверг' :
                      (param == 6) ? 'Пятница' :
                      (param == 7) ? 'Суббота' :
                      '';                                
            console.log(rez);                
        }
    }
}

 f(1); 
 f(2); 
 f(8); 
 f('1'); 

