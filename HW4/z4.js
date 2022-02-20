// Написать свою имплементацию функции `compose`. Функция принимает
//  неограниченное количество параметров. Каждый аргумент должен быть
//   функцией. Каждый аргумент принимает 1 параметр. Функция `compose`
//   возвращает другую функцию с одним параметром.
// Суть работы функции `compose` отображает данная формула
// `compose(f, g)(x) = f(g(x))`

function compose(...argsFun) {
  return function (param) {
    let acc = param
    for (let i = argsFun.length - 1; i >= 0; i--) {
      acc += argsFun[i]('')
    }
    return acc
  }
}

const rez = compose(
  (str) => {
    return str + 'c'
  },
  (str) => {
    return str + 'b'
  }
)('a')

console.log(rez) // abс
