import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		hidesidebar:localStorage.getItem("hidesidebar") === "1"
	},
	mutations:{
		changeSildbar(state){
			if(state.hidesidebar){
				localStorage.setItem("hidesidebar",0)
			}else{
				localStorage.setItem("hidesidebar",1)
			}
			state.hidesidebar = !state.hidesidebar
		}
	}
})