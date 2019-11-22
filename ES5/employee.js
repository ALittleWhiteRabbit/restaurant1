(function(window) {
    function Employee(name, salary) {
        return new Employee.prototype.init(name, salary);
    }
    Employee.prototype = {
        constructor: Employee,
        init: function(name, salary) {

            this.name = name;
            this.salary = salary;
        },
        onework: function() {

        }
    }
    Employee.prototype.init.prototype = Employee.prototype;
    window.Employee = Employee;
})(window)