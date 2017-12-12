import cookies from "js-cookie"
import store from '@/store'
import Vue from 'vue'

const TokenKey = 'Admin-Token'

const getToken=()=>{
	return cookies.get(TokenKey)
}
const setToken=(token)=>{
	return cookies.set(TokenKey,token)
}
const LoginOut=()=>{	
  store.commit('LoginOut')
  cookies.remove(TokenKey)
}
/*锁屏*/
const locking=()=>{
	localStorage.setItem("lock",1)
}
/*解锁*/
const noLocking=()=>{
	localStorage.setItem("lock",0)
}
const getLocking=()=>{
	return localStorage.getItem("lock")==="1"
}

export {
	getToken,
	setToken,
	LoginOut,
	locking,
	noLocking,
	getLocking
}