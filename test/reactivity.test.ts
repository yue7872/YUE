import { describe, expect, it } from 'vitest'
import { reactivity } from '../src/utils/reactivity'

describe('reactivity', () => {
  it('exported', () => {
    const studentA = {
      name: 'yue',
    }
    const storeName = ''
    const changedName = 'output'
    const reactObj = reactivity(studentA, storeName, changedName)
    expect(reactObj).toMatchInlineSnapshot(`
      [
        "yue",
        "output",
      ]
    `)
  })
})
