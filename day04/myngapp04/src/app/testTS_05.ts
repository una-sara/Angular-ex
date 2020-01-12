//使用接口
/**
 *要求小汽车必须提供start和stop两个方法
 */
interface Runnable {
    start();//接口中的方法没有主体
    stop();
}
class Car implements Runnable {
   start(){
       console.log('汽车启动');
   }
   stop(){
       console.log('汽车停止');
   }
   
}