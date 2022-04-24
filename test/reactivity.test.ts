import { describe, expect, it } from 'vitest'
import { reactivity } from '../src/utils/reactivity'

describe('reactivity', () => {
  it('exported', () => {
    const reactObj = reactivity()
    expect(reactObj).toMatchInlineSnapshot(`
      {
        "name": "Bob",
      }
    `)
  })
})
