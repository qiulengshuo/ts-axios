import Axios from './core/Axios.js';
import mergeConfig from './core/mergeConfig.js';
import defaults from './defaults.js';
import { extend } from './helpers/util.js';
function createInstance(config) {
    var context = new Axios(config);
    // 实例本身作为 request
    var instance = Axios.prototype.request.bind(context);
    // 浅拷贝一份父类原型方法
    extend(instance, context);
    return instance;
}
var axios = createInstance(defaults);
axios.create = function create(config) {
    return createInstance(mergeConfig(defaults, config));
};
export default axios;
