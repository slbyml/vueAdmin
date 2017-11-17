import axios from 'axios'

const getTableList=(page)=>{
	return axios({
		url:"/api/tables",
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