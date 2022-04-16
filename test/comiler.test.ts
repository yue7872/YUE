import { describe, expect, it } from 'vitest'
import h from '../src/utils/help.js'
describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

describe('should', () => {
  it('exported', () => {
    const vNodeNormal = h('div', { class: 'cunstom' }, 'my div')
    expect(vNodeNormal).toMatchInlineSnapshot(`
      {
        "children": "my div",
        "props": {
          "class": "cunstom",
        },
        "tag": "div",
      }
    `)
    const vNodeAll = h('div', [['span', { class: 'a' }, 'meme']])
    expect(vNodeAll).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": "meme",
            "props": {
              "class": "a",
            },
            "tag": "span",
          },
        ],
        "tag": "div",
      }
    `)
    const vNodeOnly = h('div')
    expect(vNodeOnly).toMatchInlineSnapshot(`
      {
        "tag": "div",
      }
    `)
  })
})
