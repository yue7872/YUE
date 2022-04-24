/* eslint-disable no-console */
const obj = {
  name: 'Bob',
}
let outName = ''
const myProxy = new Proxy(obj, {
  get(target, key) {
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    console.log('setting')
    effect()
    console.log(outName)
  },
})

function effect() {
  outName = myProxy.name
}
effect()
console.log(outName)

for (var i = 0; i < 10; i++) {
  ;(() => {
    setTimeout(() => {
      myProxy.name = i
    }, i * 2000)
  })(i)
}
