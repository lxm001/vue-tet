/**
 * Created by liuxiaomeng on 2017/8/31.
 */
import axios from 'axios'

const actions = {
  //这个方法，我们说她返回了一个promise
  //但实际上，我们期待的是一个userInfo对象
  //无奈该函数是异步的，无法立刻返回userInfo对象
  //所以返回了一个Promise作为“承诺”
  //ES6语法
  getData({state}, obj) {
    console.log(state.domainName);
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: state.domainName + obj.url,
        //`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
        //他的类型必须是一个纯对象或者是URLSearchParams对象
        params: obj.data,
        timeout: 10000,
        headers: {},
        withCredentials: false,//`withCredentails`选项表明了是否是跨域请求
        responseType:'json',//default
      }).then(res => {
        console.log("成功");
        resolve(res);
      }).catch(res => {
        console.log("失败");
        reject(res);
      })
    })
  },
  postData({state}, obj) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: state.domainName + obj.url,
        //`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
        //他的类型必须是一个纯对象或者是URLSearchParams对象
        data: obj.data,
        timeout: 10000,
        headers: {},
        withCredentials: false,//`withCredentails`选项表明了是否是跨域请求
        responseType:'json',//default
      }).then(res => {
        console.log("成功");
        resolve(res);
      }).catch(res => {
        console.log("失败");
        reject(res);
      })
    })
  }
}

export default actions
