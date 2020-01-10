//类成员的访问修饰符的特殊用法
class Student {
    // private sname:string = null
    // constructor(sname){
    //    this.sname =sname;
    // }
    constructor(private sname:string){}
}
let s2 =new Student('tom');