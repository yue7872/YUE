import { describe, expect, it } from 'vitest'
import renderer from '../src/utils/renderer'

describe('should', () => {
  it('exported', () => {
    // TODO: 实现renderer
    const vNode: object = {
      children: 'my div',
      props: {
        class: 'custom',
      },
      tag: 'div',
    }
    const trueDom = renderer(vNode)
    expect(trueDom).toMatchInlineSnapshot('<div class="custom">my div</div>')
  })
})
