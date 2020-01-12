import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc02-user-login',
  templateUrl: './myc02-user-login.component.html',
  styleUrls: ['./myc02-user-login.component.css'],
  providers: [ TimerService ] //仅用于当前组件的服务提供者
})
export class Myc02UserLoginComponent implements OnInit {
  timer:TimerService = null
  constructor(timer:TimerService) { //声明依赖
    // console.log(timer);
    this.timer = timer
  }
   
  doLogin(){
    this.timer.start()
    console.log('开始向服务器提交登录信息')
    console.log('服务器返回响应消息：登录成功')
    this.timer.end('登录')
  }
  
  ngOnInit() {
  
  }
}