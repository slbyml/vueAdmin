import axios from 'axios'


axios.defaults.baseURL = process.env.BASE_API;

const getTableList=(page)=>{
	return axios({
		url:"/tables",
		method:"get",
		params:{
			page
		},
		timeout:5000
	})
}
export {
	getTableList
}