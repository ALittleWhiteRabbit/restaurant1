var customList = (function() {
    var custom = [];
    return {
        list: custom,
        joinIn: function(customer) {
            custom.push(customer);
        },
        stepIn: function() {
            let img = document.createElement('img');
            img.src = './img/customer.png';
            customer.insertBefore(img, customer.childNodes[0]);
            if (custom.length > 0) {
                custom[0].Seat();

            } else {
                console.log('没有客人了');
                return;
            }
        },
        finish: function() {
            custom.shift();

            if (this.list.length > 0) {
                console.log('下一位');

                this.list[0].Seat();
            } else {
                console.log('没有客人了');
            }


        }
    }



})()