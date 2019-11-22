(function(window) {
    function Waiter(name, salary) {
        return new Waiter.prototype.init(name, salary);
    }
    Waiter.prototype = Employee.prototype;
    Waiter.prototype.constructor = Waiter;
    Waiter.prototype.init.prototype = Waiter.prototype;
    Waiter.prototype.oneWork = function(course) {
        if (course instanceof Array) {
            //若是数组，则是记录点菜
            console.log('点菜');


        } else {
            //若不是，则是上菜
            console.log("上菜");


        }
    }
    window.Waiter = Waiter;
})(window)