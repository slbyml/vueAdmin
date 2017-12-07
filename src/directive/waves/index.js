import waves from "./src/waves"

waves.install=(Vue)=>{
	Vue.directive("waves",waves)
}
export default waves