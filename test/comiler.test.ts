import { describe, expect, it } from 'vitest'
import compiler from '../src/utils/compiler'

describe('should', () => {
  it('exported', () => {
    // TODO: 实现compiler
    const templateStr = '<template><div class="custom">my div</div></template>'
    const vNodeNormal = compiler(templateStr)
    expect(vNodeNormal).toMatchInlineSnapshot('["div", { class: "custom" }, "my div"]')
  })
})
