import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myc04-productlist',
  templateUrl: './myc04-productlist.component.html',
  styleUrls: ['./myc04-productlist.component.css']
})
export class Myc04ProductlistComponent implements OnInit {
  private productList: object[] = []
  //页号
  private pno:number = 0
  //在构造方法中依赖注入：HttpClient服务对象
  constructor(private http:HttpClient) {
     
   }
   
  public loadMore():void {
     this.pno++;
     let url ='http://www.codeboy.com/data/product/list.php?pno='+this.pno
     this.http.get(url).subscribe((res:any)=>{
      //  console.log('得到了订阅的响应消息:')
      //  console.log(res.data)
       // this.productList = res.data
       this.productList = this.productList.concat(res.data)
     })      
    
      //  this.http.get().subscribe()

  }
  ngOnInit() {
     ///组件初始化完成，立即请求一次服务端数据
     this.loadMore()
  }

}
