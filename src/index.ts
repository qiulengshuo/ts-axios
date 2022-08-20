import { transformRequest } from './helpers/data.js'
import { processHeaders } from './helpers/headers.js'
import { buildURL } from './helpers/url.js'
import { AxiosRequestConfig } from './types/index.js'
import xhr from './xhr.js'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 对 config 参数数据做处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
