import axios from 'axios'

axios.defaults.baseURL=process.env.BASE_API
axios.defaults.timeout=5000
/*对响应拦截*/
axios.interceptors.response.use(function (response) {
	const res=response.data
	if(res.code !== 200){
		return Promise.reject(response.data)
	}else{
		return res;
	}
    
  }, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
  });

/*/tables   列表*/
const getTableList=(page)=>{
	return axios({
		url:"/tables",
		method:"get",
		params:{
			page
		}
	})
}
/*/login   登陆*/
const login=(loginForm)=>{
	return axios({
		url:"/login",
		method:"post",
		params:loginForm
	})

}
/*解锁*/
const openLock=(loginForm)=>{
	return axios({
		url:"/getLockPassword",
		method:"post",
		params:loginForm
	})

}
/*获取用户信息*/
const getInfo=(token)=>{
	return axios({
		url:"/info",
		method:"get",
		params:token
	})
}
/*获取新闻列表*/
const getNews=()=>{
	return axios({
		url:"/news",
		method:"get"
	})
}
/*获取新闻详情*/
const details=(token)=>{
	return axios({
		url:"/details",
		method:"get",
		params:token
	})
}

const getStopping=()=>{
	return axios({
		url:"/shopping",
		method:"get"
	})

}
export {
	getTableList,
	login,
	getInfo,
	getNews,
	details,
	openLock,
	getStopping
}