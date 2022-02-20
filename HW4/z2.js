// Напишите свою имплементацию функции `mix`. Данная функция
// принимает неограниченное количество аргументов. Каждый
// аргумент по своему типу должен быть функцией иначе генерировать
// ошибку. Функция `mix` запускает свои callback функции последовательно.
// В качестве параметра каждый callback принимает то что возвращает предыдущий
// callback. Первый сallback не принимает параметров.

function mix(...argsFun) {
  let temp = null
  for (i in argsFun) {
    if (typeof argsFun[i] === 'function') {
      temp = argsFun[i](temp)
    } else {
      throw new Error('Аргументы по своему типу должены быть функцией')
    }
  }
  return temp
}

const rez = mix(
  () => {
    return 0
  },
  (prev) => {
    return prev + 1
  },
  (prev) => {
    return prev * 2
  }
)

console.log(rez)
