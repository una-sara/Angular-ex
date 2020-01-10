import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-myc01-user',
  templateUrl: './myc01-user.component.html',
  styleUrls: ['./myc01-user.component.css']
})
export class Myc01UserComponent implements OnInit {
  // timer:TimerService = null;
  // constructor(timer:TimerService) { //声明依赖
  //   // console.log(timer);
  //   this.timer = timer;
  constructor(private timer:TimerService){
    
  }
}
   
  doLogin(){
    // let start =new Date().getTime();
    this.timer.start();
    console.log('开始向服务器提交登录信息');
    console.log('服务器返回响应消息：登录成功');
    // let end =new Date().getTime();
    // console.log('登录功能耗时:', end - start);
    this.timer.end('登录');
  }
  doRegister(){
    // let start =new Date().getTime();
    this.timer.start();
    console.log('开始向服务器提交注册信息');
    console.log('服务器返回响应消息：注册成功');
    // let end =new Date().getTime();
    // console.log('注册功能耗时：',end - start);
    this.timer.end('注册');
  }
  ngOnInit() {
  }

}
