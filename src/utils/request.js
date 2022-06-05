//封装axios拦截器
import Vue from 'vue'
let vue = new Vue()
import axios from "axios";
axios.defaults.baseURL = "/api/v1"
axios.defaults.timeout = 2000
let instance = axios.create()

//请求拦截器，在请求接口之前执行
instance.interceptors.request.use(function (config) {
    //拦截之前的业务逻辑
    //token
    let manager = JSON.parse(sessionStorage.getItem("manager"))
    if (manager) {
        config.headers["token"] = manager.token
    }
    return config
}, function (err) {
    return Promise.reject(err)
})


instance.interceptors.response.use(function (res) {
    return res
}, function (err) {
    console.log(err.response)
    //401 404 500
    switch (err.response.status) {
        case 401:
            console.log("401")
            vue.$alert('请设置token', '错误提示', {
                confirmButtonText: '确定'
            });
            break;
        case 403:
            console.log("403")
            vue.$alert('token失效', '错误提示', {
                confirmButtonText: '确定',
                callback: action => {
                    sessionStorage.removeItem("manager")
                    location.href = "/login"
                }
            });
            break;
        case 404:
            console.log(res)
            vue.$alert('404页面未找到', '错误提示', {
                confirmButtonText: '确定',
                callback: action => {
                    location.href = "/home"
                }
            });
            break;
        case 500:
            console.log(res)
            vue.$alert('服务端错误', '错误提示', {
                confirmButtonText: '确定'
            });
            break;
    }


    // return Promise.reject(err.response)

})



export {
    instance
}