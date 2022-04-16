import { describe, expect, it } from 'vitest'
import compiler from '../src/utils/compiler'

describe('should', () => {
  it('exported', () => {
    // 解析template，传回vnode给h()
    const templateStr = '<div class="custom" click="hello()"><span>jij</span></div>'
    const vNodeNormal = compiler(templateStr)
    expect(vNodeNormal).toMatchInlineSnapshot(`
      [
        "div",
        {
          "class": "custom",
          "click": "hello()",
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

    // 嵌套children
    const templateStr1 = '<div class="custom" click="hello()"><span><p>aaa</p></span></div>'
    const vNodeChild = compiler(templateStr1)
    expect(vNodeChild).toMatchInlineSnapshot(`
      [
        "div",
        {
          "class": "custom",
          "click": "hello()",
        },
        [
          [
            "span",
            {},
            [
              [
                "p",
                {},
                "aaa",
              ],
            ],
          ],
        ],
      ]
    `)

    // 多个子children
    // FIXME：多个子元素同级的情况
    const templateStr2 = '<div class="custom" click="hello()"><span>aaaa</span><span>bbb</span></div>'
    const vNodeMulti = compiler(templateStr2)
    expect(vNodeMulti).toMatchInlineSnapshot(`
      [
        "div",
        {
          "class": "custom",
          "click": "hello()",
        },
        [
          [
            "span",
            {},
            "aaaa",
          ],
          [
            "span",
            {},
            "bbbb",
          ],
        ],
      ]
    `)
  })
})
