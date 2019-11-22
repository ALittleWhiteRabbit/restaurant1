(function(window) {
    function Restaurant(item) {
        return new Restaurant.prototype.init(item);
    }
    Restaurant.prototype = {
        constructor: Restaurant,
        init: function(item) {
            this.cash = item.cash;
            this.seats = item.seats;
            this.staff = item.staff;
        },
        hire: function(person) {
            this.staff.push(person);

        },
        fire: function(person) {
            for (var i in this.staff) {
                if (this.staff[i] === person) {
                    this.staff.splice(i, 1);
                    return;
                }
            }



        }

    }
    Restaurant.prototype.init.prototype = Restaurant.prototype;
    window.Restaurant = Restaurant;
})(window)