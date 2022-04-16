import h from './help.js'

interface VNode {
  tag?: string
  props?: any
  children?: any
}
export default function createVNode(tag: string, props?: any, children?: any) {
  const vNode: VNode = {}
  vNode.tag = tag
  if (props)
    vNode.props = props
  if (children) {
    if (Array.isArray(children)) {
      vNode.children = Array.from({ length: children.length })
      children.map((child: [string, any, any], idx) =>
        // eslint-disable-next-line no-param-reassign
        vNode.children[idx] = h(...child),
      )
    }
    else {
      vNode.children = children
    }
  }
  return vNode
}
