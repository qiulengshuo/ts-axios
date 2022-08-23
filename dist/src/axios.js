import Axios from './core/Axios.js';
import { extend } from './helpers/util.js';
function createInstance() {
    var context = new Axios();
    // 实例本身作为 request
    var instance = Axios.prototype.request.bind(context);
    // 浅拷贝一份父类原型方法
    extend(instance, context);
    return instance;
}
var axios = createInstance();
export default axios;
