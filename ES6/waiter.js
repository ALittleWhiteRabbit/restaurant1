var Waiter = (function(config) {
    var instance = null;
    class Waiter extends Employee {
        constructor(config) {
            super(config.name, config.salary);
            this.state = 'wait';
        }
        order(time) {
            let times = 0;
            let Time = time;
            return new Promise((resolve) => {
                var timer = setInterval(() => {
                    let restTime = ((Time - (++times) * 100) / 1000).toFixed(1);


                    if (restTime < 0) {
                        clearInterval(timer);
                        resolve();
                    } else
                        cusState.innerHTML = '点菜剩余:' + restTime + 's';
                }, 100);
            });
        }
        oneWork(course) {
            if (course instanceof Array) {
                //若是数组，则是记录点菜
                walk(0.5 * timeEle, 'back').then(() => {
                    console.log("服务员-" + this.name + "将订单交给厨师 " + new Date().getSeconds() + "");
                    Cook().getOrder(course);
                })
            } else {
                // 若不是，则是上菜
                walk(0.5 * timeEle, 'go').then(() => {
                    console.log("服务员-" + this.name + "上了【" + course.name + "】 " + new Date().getSeconds() + "");
                    customList.list[0].Eat(course.name);
                    if (cook.state === 'cooking') {
                        console.log(customList.list[0].course.length)
                        walk(0.5 * timeEle, 'back').then(() => {
                            this.state = 'wait'
                            console.log("服务员回到了厨师旁 " + new Date().getSeconds() + "");
                        })
                    } else {
                        this.state = 'wait'
                    }
                })
            }
        }
        callByCus(cus) {

            console.log("服务员-" + this.name + "被客人呼叫，开始点菜 " + new Date().getSeconds() + "");
            this.order(3 * timeEle).then(() => {
                var list = cus.OrderCourse();
                this.oneWork(list);
            })
        }
        callByCook(course) {
            this.state = 'work';
            console.log("服务员-" + this.name + "取到了【" + course.name + "】 " + new Date().getSeconds() + "");
            this.oneWork(course);
        }
    }
    return function(config) {
        if (!instance) {
            instance = new Waiter(config);
        }
        return instance;
    }
})()