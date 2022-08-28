var Cancel = /** @class */ (function () {
    function Cancel(message) {
        this.message = message;
    }
    return Cancel;
}());
export default Cancel;
export function isCancel(value) {
    return value instanceof Cancel;
}
