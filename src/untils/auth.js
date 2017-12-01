import cookies from "js-cookie"
import store from '@/store'

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

export {
	getToken,
	setToken,
	LoginOut
}