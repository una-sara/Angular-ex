import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc02-user-register',
  templateUrl: './myc02-user-register.component.html',
  styleUrls: ['./myc02-user-register.component.css'],
  providers:[TimerService] //仅用于当前组件的服务提供者
})
export class Myc02UserRegisterComponent implements OnInit {

  timer:TimerService = null;
  constructor(timer:TimerService) { //声明依赖
    // console.log(timer);
    this.timer = timer;
  }

  doRegister(){
    this.timer.start();
    console.log('开始向服务器提交注册信息');
    console.log('服务器返回响应消息：注册成功');
    this.timer.end('注册');
  }


  ngOnInit() {
  }

}
