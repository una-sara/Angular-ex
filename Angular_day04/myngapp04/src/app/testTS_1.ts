//ts是强类型语言
//let uname ='tom'
class User {
    // uname ='tom'
    uname:string
    age:number
    //isMarried:boolean
    isMarried:any
    userList:string[]
    jobList:any[]
    
    f1(n1:string,n2:number):void{
        this.uname = 'tom';
        this.age = 20;
        this.isMarried =true;
        this.userList = ['tom','mary'];
        this.jobList = ['tom',20,true];
       // return 20;
    }
}

let u1 = new User()
u1.f1('tom',20);
