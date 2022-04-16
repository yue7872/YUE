import h from './help.js'

export default function createVNode(tag, props, children) {
  const vNode = {}
  vNode.tag = tag
  if (props)
    vNode.props = props
  if (children) {
    if (Array.isArray(children)) {
      vNode.children = Array.from({ length: children.length })
      children.map((child, idx) =>
        vNode.children[idx] = h(...child),
      )
    }
    else {
      vNode.children = children
    }
  }
  return vNode
}
