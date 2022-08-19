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
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
