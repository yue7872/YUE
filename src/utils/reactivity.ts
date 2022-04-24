/* eslint-disable no-console */
// 响应式
// 先把obj.name的值赋给outName, 然后修改obj.name的值，期望outName也改变

export function reactivity(obj: { name: string }, outName: string, changedName: string) {
  const myProxy = new Proxy(obj, {
    get(target: Record<string, string>, key: string) {
      return target[key]
    },
    set(target, key: string, value): boolean {
      target[key] = value
      effect()
      console.log('setting into ', outName)
      return true
    },
  })

  function effect() {
    outName = myProxy.name
  }
  // 执行副作用函数
  effect()

  const res: Array<string> = []
  res.push(outName)
  // 改变myProxy.name 的值
  myProxy.name = changedName
  res.push(outName)
  return res
}
