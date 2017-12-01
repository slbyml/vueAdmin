// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {getToken,LoginOut} from '@/untils/auth'
import {getInfo} from "@/untils/fetch"
import "@/components"

Vue.config.productionTip = false


/*必须放在  new Vue前面，否则第一次不触发*/
const whiteList=['/login']
router.beforeEach((to,from,next)=>{
	const token=getToken()
	if(token){		//是否已经登陆
		if(store.state.info){		//有用户信息
			if(to.path==="/login"){
				next("/")
			}else{			
				next()
			}
		}else{								//获取用户信息
			getInfo({token:token}).then((response)=>{
				const d=response.data.data
				store.commit("setInfo",response.data)
				next()						
			}).catch(()=>{
				LoginOut()
				next("/login")
			})
		}
	}else{
		if(whiteList.includes(to.path)){
			next()
		}else{	
			LoginOut()		
			next("/login")
		}
	}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
