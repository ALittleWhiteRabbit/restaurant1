  class Customer {
      constructor() {
          this.course = [];
          this.state = 'wait';

      }
      Seat() {
          var childs = CuslList.childNodes;
          CuslList.removeChild(childs[1]);

          this.course = [];
          this.state = 'wait';

          var childs = List.childNodes;
          for (var i = childs.length - 1; i >= 0; i--) {
              List.removeChild(childs[i]);
          }


          console.log("客人入座，呼叫服务员 " + new Date().getSeconds() + "");
          Waiter().callByCus(this);
      }
      oneEat(time) {
          let times = 0;
          let Time = time;
          return new Promise((resolve) => {
              var timer = setInterval(() => {
                  let restTime = ((Time - (++times) * 100) / 1000).toFixed(1);


                  if (restTime < 0) {
                      clearInterval(timer);
                      resolve();
                  } else
                      cusState.innerHTML = '吃菜剩余:' + restTime + 's';
              }, 100);
          });
      }
      OrderCourse() {
          //点菜
          let list = [];
          this.order = menuList.Select();
          for (var i in this.order) {
              let order = {
                  name: this.order[i].name,
                  state: 'undo'
              }
              list.push(this.order[i].name);
              this.course.push(order);
              ifeRestaurant.cash += this.order[i].price - this.order[i].cost;
              let p = document.createElement('div');
              p.innerHTML = this.order[i].name;
              cookToDoList.appendChild(p);
              let div = document.createElement('div');
              let p1 = document.createElement('p');
              let p2 = document.createElement('p');
              p1.innerHTML = this.order[i].name;
              p2.innerHTML = '待做';
              div.name = this.order[i].name;
              div.appendChild(p1);
              div.appendChild(p2);
              List.appendChild(div);

          }
          list = list.join(',');
          totalCash.innerHTML = ifeRestaurant.cash;
          console.log("客人点了【" + list + "】" + new Date().getSeconds() + "");


          return this.order;
      }

      Eat(name) {
          //吃
          if (this.state === 'eat') {
              let cour = List.querySelectorAll('div');
              for (let i in cour) {
                  if (cour[i].name === name) {
                      cour[i].querySelectorAll('p')[1].innerHTML = '已上'
                  }
              }
              for (let i in this.course) {
                  if (this.course[i].name === name) {
                      this.course[i].state = 'done'
                  }
              }
              return
          }

          let cour = List.querySelectorAll('div');
          for (let i in cour) {
              if (cour[i].name === name) {
                  var a = cour[i].querySelectorAll('p')[1];
                  a.innerHTML = '在吃'
              }
          }


          this.state = 'eat';

          this.oneEat(3 * timeEle).then(() => {
              a.innerHTML = '已吃完';
              this.state = 'wait';
              this.course.shift();
              if (this.course[0] && this.course[0].state === 'done')
                  this.Eat(this.course[0].name);
              if (this.course.length == 0) {
                  console.log("客人用餐完毕，离开 " + new Date().getSeconds() + "");
                  customList.finish();
                  return
              }
          })



      }
  }