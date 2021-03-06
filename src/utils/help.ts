import createVNode from './createVNode.js'

// export default function h(){}  import h from
// or  export const h = function(){}  import {h} from
export default function h(tag: string, props?: any, children?: any) {
  if (!props && !children)
    return createVNode(tag, null, null)

  if (props && children)
    return createVNode(tag, props, children)
  if (!children) {
    if (typeof props === 'object') {
      if (props.length === 0)
        return createVNode(tag, null, null)
      if (Array.isArray(props))
        return createVNode(tag, null, props)
      else return createVNode(tag, props, null)
    }
    else if (typeof props === 'string') {
      return createVNode(tag, null, props)
    }
  }
}
