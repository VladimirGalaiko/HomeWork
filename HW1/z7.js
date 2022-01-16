// Написать код который посчитает сумму всех четных элементов в массиве.

// var arr = [1,2,3,4];


var arr = [1,2,3,4];
var sum = 0;
var i;

for (i of arr){          
       if (i % 2 == 0) {
           sum = i + sum;  
       }           
}   
console.log(sum);
    
