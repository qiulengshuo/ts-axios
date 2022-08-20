import { AxiosRequestConfig } from './types/index.js'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  // 添加请求头
  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    }
    request.setRequestHeader(name, headers[name])
  })
  // 发生请求体
  request.send(data)
}
