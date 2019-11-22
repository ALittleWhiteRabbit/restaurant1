(function(window) {
    function Customer(id, name, salary) {
        return new Customer.prototype.init();
    }
    Customer.prototype = {
        constructor: Customer,
        init: function() {

        },
        OrderCourse: function(courses) {
            console.log('点菜');

        },
        Eat: function() {
            console.log('吃');

        }
    }
    Customer.prototype.init.prototype = Customer.prototype;
    window.Customer = Customer;
})(window)