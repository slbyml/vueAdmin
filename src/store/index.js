import Vue from 'vue';
import Vuex from 'vuex';
import {setToken,noLocking} from "@/untils/auth"
import cookies from "js-cookie"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		hidesidebar:localStorage.getItem("hidesidebar") === "1",
		token:"",
		info:null
	},
	getters:{
		info:state=> state.info
	},
	mutations:{
		changeSildbar(state){
			if(state.hidesidebar){
				localStorage.setItem("hidesidebar",0)
			}else{
				localStorage.setItem("hidesidebar",1)
			}
			state.hidesidebar = !state.hidesidebar
		},
		setToken(state,token){
			noLocking()
			setToken(token)
			state.token=token
		},
		setInfo(state,info){
			state.info=info
		},
		LoginOut(state){
			state.token="";
			state.info=null;
		}
	}
})