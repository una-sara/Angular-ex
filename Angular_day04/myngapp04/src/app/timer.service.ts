import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TimerService {
  startTime =0; //记录到的操作开始执行时间
  endTime =0; //记录到的操作结束执行时间

  constructor() { 
    console.log('一个TimerService对象被创建了');
  }
   
  start(){//开始计时
     this.startime =new Date().getTime();
  }
  end(actionName){ //结束计时
    this.endtime =new Date().getTime();
    console.log(actionName+'操作耗时:',this.endTime -this.startTime);
  }
}
