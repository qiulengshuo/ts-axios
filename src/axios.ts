import Axios from './core/Axios.js'
import { extend } from './helpers/util.js'
import { AxiosInstance } from './types/index.js'

function createInstance(): AxiosInstance {
  const context = new Axios()
  // 实例本身作为 request
  const instance = Axios.prototype.request.bind(context)
  // 浅拷贝一份父类原型方法
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
