/*
ajax请求函数模块
返回值： prmise对象（异步返回的数据是：response.data）
*/
import axios from 'axios'
export default function ajax (url,data={},type='GET') {

  return new Promise(function (resolve,reject) {
    //执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      //成功的调用resolve
      resolve(response.data)
    }).catch(function (error) {
      //失败的调用reject
      reject(error)
    })


  })
}

