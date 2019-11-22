(function(window) {
    function Cooker(name, salary) {
        return new Cooker.prototype.init(name, salary);
    }
    Cooker.prototype = Employee.prototype;
    Cooker.prototype.constructor = Cooker;
    Cooker.prototype.init.prototype = Cooker.prototype;
    Cooker.prototype.oneWork = function(course) {
        cook();
    }
    window.Cooker = Cooker;
})(window)