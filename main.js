import Vue from 'vue'
import App from './App'

import store from './store'
// import Router, { Route, NextFn } from 'uni-vue-router';
// router.js
import {RouterMount,createRouter} from 'uni-simple-router';
import router from '@/common/router'




Vue.config.productionTip = false

// Vue.use(Router);
/*
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
*/

// 通过 pages.json 转换路由信息
// console.log(PAGES_JSON);
// const router = new Router({
//     pagesJSON: PAGES_JSON // PAGES_JSON 在 build的时候会被 webpack 替换
// });




Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111"

App.mpType = 'app'

const app = new Vue({
	store,
	// router,
	...App
	// route = 后台返回
})
// app.$mount()

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
