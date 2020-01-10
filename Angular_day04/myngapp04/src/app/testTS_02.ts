//类成员的访问修饰符
class User {
private age:number = 20;

  public setAge(age){
      if(age<18 || age>60){
          console.log("非法的年龄");
      }else{
          this.age = age;
      }
  }
  public getAge(){
      return this.age;
  }
}

let u2 = new User();
// u2.age='tom';
// u2.age = 200; //类成员不应该让外界随意赋值
// u2.age = -2;
// console.log(u2.age);
u2.setAge(30);
let a =u2.getAge();

