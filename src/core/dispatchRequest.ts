import { transformRequest, transformResponse } from '../helpers/data.js'
import { flattenHeaders, processHeaders } from '../helpers/headers.js'
import { buildURL } from '../helpers/url.js'
import {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from '../types/index.js'
import xhr from './xhr.js'

export default function dispatchRequest(
  config: AxiosRequestConfig
): AxiosPromise {
  //  默认情况下，前端与服务器交互的对象都是 json 字符串。
  //  (对象) axios 会对 post data 数据 string 化; 对返回 body 数据 JSON.parse 对象化。
  //  如果有 content-type，以 content-type 为准；responseType 同理。
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}

// 对 config 参数数据做处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
  // 覆盖掉 headers，生成最终扁平化过后的 headers。
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
