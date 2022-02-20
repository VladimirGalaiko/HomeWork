// Задача-3

// Улучшите свою имплементацию функции `mix`. Если на каком то из уровней callback сгенерировал ошибку →
// отловите ее, а затем перейдите на следующий callback. Функция `mix` всегда должна возвращать объект в
// котором будет 2 поля `errors` и `value`. Обратите внимание что `value` содержит результат вызовов всех
// функций, а `errors` содержит массив с информацией про все ошибки а также индекс callback где он сгенерировался.

function mix(...argsFun) {
  let temp = {
    errors: [{}],
    value: null,
  }
  for (i in argsFun) {
    if (typeof argsFun[i] === 'function') {
      try {
        temp.value = argsFun[i](temp.value)
      } catch (e) {
        temp.errors[0].name = e.name
        temp.errors[0].message = e.message
        temp.errors[0].stack = e
        temp.errors[0].indexError = i
      }
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
    throw new RangeError('Range is wrong')
  },
  (prev) => {
    return prev * 3
  }
)

console.log(rez)
