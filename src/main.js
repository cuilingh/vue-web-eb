// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'  //./router'./router' //????
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'

// import Banana from './components/banana'

// Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)//在所有的页面就可以使用this.$http
//实例化路由
let router=new VueRouter({
	mode:'history',
	routes:[{
		path:'/', //根目录
		component:IndexPage //主页面,!!!注意component不加s
	}]
});


/* eslint-disable no-new */
new Vue({
  el: '#app',//挂载到body里面
  router,//根节点实例化对象
  template: '<Layout/>',
  components: { Layout }
})
