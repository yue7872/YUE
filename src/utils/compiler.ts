export default function compiler(templateStr: string): any {
  // <div class="custom">my div</div>
  type Props = Record<string, string>
  // ?表示0次或1次 可以匹配第一次出现的
  const firstTag = templateStr.match(/<.*?>/)![0].replace('<', '').replace('>', '')
  const tagArr = firstTag.split(' ')
  const tagName: string = tagArr[0]
  const props: Props = {}
  let nodeChildren

  tagArr.shift()
  tagArr.forEach((item) => {
    const objKey: any = item.split('=')[0]
    const objValue: string = item.split('=')[1].replace(/\"/g, '')
    props[objKey] = objValue
  })
  const childrenStr = templateStr.match(/>.*</)![0]
  const children = childrenStr.substring(1, childrenStr.length - 1)
  if (children.includes('<') && children.includes('</'))
    nodeChildren = [compiler(children)]
  else
    nodeChildren = children
  return [tagName, props, nodeChildren]
}
