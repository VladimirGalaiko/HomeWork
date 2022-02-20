// Напишите свою имплементацию функции `bind`
// Принимает такие параметры:

// - Первый параметр — функция которую мы хотим привязать
// - Второй параметр — ссылка на this
// - Третий параметр до ...n — параметры для функции которую мы хотим привязать

const bind =
  (fn, context, ...array) =>
  () =>
    fn.apply(context, [...array])

const obj = {
  getName: function (message) {
    return `${message}: ${this.name}`
  },
}

const getName = obj.getName

const f = bind(getName, { name: 'Pitter' }, 'My name')
console.log(f()) // My name: Pitter
