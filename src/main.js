// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from "./store"

import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,  //加载时间
  error: 'dist/error.png',  //加载张数
  loading: 'dist/loading.gif',
  attempt: 1
})


import {  Carousel,CarouselItem} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Carousel)
Vue.use(CarouselItem)

import Axios  from 'axios'
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'



// axios 配置
// Axios.defaults.baseURL = 'http://www.wwtliu.com';
// Axios.defaults.headers.common['Authorzation']=AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


Vue.config.productionTip = false

//拦截器
// Axios.interceptors.request.use(function(config){
//  //在请求发出之前进行一些操作
//  if(config.method == 'post'){
//    config.data = qs.stringify(config.data)
//  }
//   return config
//  },function(error){
//    //对请求错误做些什么
//    return Promise.reject(error)
//  })
//  //定义一个响应拦截器
//  Axios.interceptors.response.use(function(config){
//  //在这里对返回的数据进行处理
//   return response;
//  },function(error){
//   //对请求错误做些什么
//   return Promise.reject(error)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
