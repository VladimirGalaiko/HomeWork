// Дано число `n=1000`. Делите его на 2 столько раз, пока результат
// деления не станет меньше 50. Какое число получится? Посчитайте
// количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную `num`.

let n = 1000;
let i = 0;
while(n >= 50){
      n = n/2
      i++;   
} 
console.log(`Количестов итераций : ${i}`);
console.log(`Результат :  ${n}`);  




