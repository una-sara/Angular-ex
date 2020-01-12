//类成员的访问修饰符
class Emp{
   protected  ename:string ='laowang'
   private  salary:number
   getEname(){
       return this.ename;
   }
}
class Coder extends Emp{
   private lang:string
   public  printInfo(){
       console.log('员工的姓名：',this.getEname());
       console.log('擅长的语言：', this.lang);
   }
}
let c2 =new Coder()
//  c2.ename ='tom'
// c2.salary =8000
// c2.lang ='sql'
c2.printInfo()