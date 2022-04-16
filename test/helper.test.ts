import { describe, expect, it } from 'vitest'
import h from '../src/utils/help.js'

describe('should', () => {
  it('exported', () => {
    const vNodeNormal = h('div', { class: 'custom' }, 'my div')
    expect(vNodeNormal).toMatchInlineSnapshot(`
      {
        "children": "my div",
        "props": {
          "class": "custom",
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
        "props": {},
        "tag": "div",
      }
    `)
    const vNodeOnly = h('div')
    expect(vNodeOnly).toMatchInlineSnapshot(`
      {
        "children": "",
        "props": {},
        "tag": "div",
      }
    `)
  })
})
