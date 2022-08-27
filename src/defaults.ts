import { transformRequest, transformResponse } from './helpers/data.js'
import { processHeaders } from './helpers/headers.js'
import { AxiosRequestConfig } from './types/index.js'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  // 默认情况下，config 会对 data headers 做处理
  // 对 response data 会根据情况转化数据
  transformRequest: [
    function (data: any, headers: any): any {
      processHeaders(headers, data)
      return transformRequest(data)
    },
  ],
  transformResponse: [
    function (data: any): any {
      return transformResponse(data)
    },
  ],
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach((method) => {
  defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

// 上面三种方法默认 content-type
methodsWithData.forEach((method) => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

export default defaults
