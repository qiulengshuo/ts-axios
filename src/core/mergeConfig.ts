import { isPlainObject, deepMerge } from '../helpers/util.js'
import { AxiosRequestConfig } from '../types/index.js'

const strats = Object.create(null)

// 其他字段使用 config2 / config1 的配置
function defaultStart(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1
}

function fromVal2Stat(val1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2
  }
}

// url params data 只使用 config2 自定义配置
const stratKeysFromVal2 = ['url', 'params', 'data']

stratKeysFromVal2.forEach((key) => {
  strats[key] = fromVal2Stat
})

// merge 两个 headers，优先保留 val2
function deepMergeStrat(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else if (typeof val1 !== 'undefined') {
    return val1
  }
}

const stratKeysDeepMerge = ['headers']

stratKeysDeepMerge.forEach((key) => {
  strats[key] = deepMergeStrat
})

export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }

  const config = Object.create(null)

  for (let key in config2) {
    mergeField(key)
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStart
    config[key] = strat(config1[key], config2![key])
  }

  return config
}
