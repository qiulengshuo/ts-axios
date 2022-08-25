import Axios from './core/Axios.js'
import defaults from './defaults.js'
import { extend } from './helpers/util.js'
import { AxiosInstance, AxiosRequestConfig } from './types/index.js'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  // 实例本身作为 request
  const instance = Axios.prototype.request.bind(context)
  // 浅拷贝一份父类原型方法
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
