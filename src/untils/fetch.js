import axios from 'axios'

axios.defaults.baseURL=process.env.BASE_API
axios.defaults.timeout=5000
/*对响应拦截*/
axios.interceptors.response.use(function (response) {
	const res=response.data
	if(res.code !== 200){
		return Promise.reject(response.data)
	}else{
		return response.data;
	}
    
  }, function (error) {
    // 对响应错误做点什么
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
/*获取用户信息*/
const getInfo=(token)=>{
	return axios({
		url:"/info",
		method:"get",
		params:token
	})
}
export {
	getTableList,
	login,
	getInfo
}