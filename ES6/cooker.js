var Cook = (function(config) {
    var instance = null;
    class Cooker extends Employee {
        constructor(config) {
            super(config.name, config.salary);
            this.courseList = [];
            this.state = 'wait'
        }
        work(name, time) {
            let times = 0;
            let Time = time;
            let div = cookToDoList.querySelectorAll('div')[0];
            cookToDoList.removeChild(div);
            to_serve_list.push(name);
            cookState.innerHTML = '正在做：' + name;
            return new Promise((resolve) => {
                var timer = setInterval(() => {
                    let restTime = ((Time - (++times) * 100) / 1000).toFixed(1);

                    if (restTime < 0) {
                        clearInterval(timer);
                        resolve();
                    } else
                        cookRestTime.innerHTML = restTime + 's';
                }, 100);
            });
        }
        oneWork(course) {
            //做菜  
            // var time = 4;
            // console.log(" " + new Date().getSeconds() + "");

            this.work(course.name, course.time).then(() => {

                let courses = this.courseList.shift();
                console.log("厨师-" + this.name + "做好了【" + courses.name + "】 " + new Date().getSeconds() + "");

                if (Waiter().state === 'wait')
                    Waiter().callByCook(courses);
                else {
                    console.log("服务员正在工作");

                }
                //呼叫服务员上菜

                if (this.courseList.length == 0) {
                    this.state = 'wait';
                    cookState.innerHTML = this.state;
                    return;
                }
                //继续做下一道菜
                this.oneWork(this.courseList[0]);
            })



            // var timer = setInterval(() => {

            //     qwe.innerHTML = time;
            //     time--;
            //     if (time < 0)
            //         clearInterval(timer);
            // }, 1000);
        }
        getOrder(arr) {
            console.log("厨师-" + this.name + "收到了订单 " + new Date().getSeconds() + "");
            this.courseList = arr;

            //whiel 不行 因为异步
            this.state = 'cooking';

            this.oneWork(this.courseList[0]);



        }
    }
    return function(config) {
        if (!instance) {
            instance = new Cooker(config);
        }
        return instance;
    }
})()