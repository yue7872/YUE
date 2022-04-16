export default function compiler(templateStr: string): any {
  // <div class="custom">my div</div>
  type Props = Record<string, string>
  // ?表示0次或1次 可以匹配第一次出现的
  const regx = /<.*?>/
  const firstTag = templateStr.match(regx)![0].replace('<', '').replace('>', '')
  const tagArr = firstTag.split(' ')
  const tagName: string = tagArr[0]
  tagArr.shift()
  const props: Props = {}
  tagArr.forEach((item) => {
    const objKey: any = item.split('=')[0]
    const objValue: string = item.split('=')[1]
    props[objKey] = objValue
  })
  let nodeChildren
  const children = templateStr.match(/>.*</)![0].substring(1, templateStr.match(/>.*</)![0].length - 1)
  if (children.includes('<') && children.includes('</'))
    nodeChildren = [compiler(children)]
  else
    nodeChildren = children
  return [tagName, props, nodeChildren]
}
