import { describe, expect, it } from 'vitest'
import compiler from '../src/utils/compiler'

describe('should', () => {
  it('exported', () => {
    // TODO: 实现compiler
    // 解析template，传回vnode给h()
    const templateStr = '<div class="custom" click="hello()"><span>jij</span></div>'
    const vNodeNormal = compiler(templateStr)
    expect(vNodeNormal).toMatchInlineSnapshot(`
      [
        "div",
        {
          "class": "\\"custom\\"",
          "click": "\\"hello()\\"",
        },
        [
          [
            "span",
            {},
            "jij",
          ],
        ],
      ]
    `)
  })
})
