import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken,LoginOut,getLocking,noLocking} from '@/untils/auth'
import {getInfo} from "@/untils/fetch"

//是否锁屏
const lock=(to,from,next)=>{	
	if(getLocking()){	//锁屏
		if(to.path !== "/locking"){		
			next("/locking")
			NProgress.done()
			return true
		}else{
			next()
		}
		NProgress.done()
	}
}


/*必须放在  new Vue前面，否则第一次不触发*/
const whiteList=['/login']
router.beforeEach((to,from,next)=>{
	NProgress.start()
	const token=getToken()
	if(token){		//是否已经登陆
		if(lock(to,from,next)) return false;
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
		NProgress.done()
	}else{
		if(whiteList.includes(to.path)){
			next()
		}else{	
			LoginOut()		
			next("/login")
		}
		NProgress.done()
	}
})