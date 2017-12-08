<template>
	<div class="loginContent">
		<div class="loginForm">			
			<h4>VUEADMIN</h4>
			<ul>
				<li>
					<el-input v-model="loginForm.name" placeholder="用户名" @keyup.enter.native="handleLogin"></el-input>
				</li>
				<li>					
					<el-input v-model="loginForm.password" placeholder="密码" @keyup.enter.native="handleLogin" type="password"></el-input>
				<li><pj-button  type="primary" @click="handleLogin" :loading="load">sign in</pj-button></li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.loginContent{position: relative;widows: 100%;height:100vh;background-color:#2d3a4b;
		.loginForm{position:absolute;left:50%;top:50%;transform:translate(-50%,-100%);color:#fff;width:260px;
			input{width:100%;padding:0 15px;box-sizing:border-box;height:35px;line-height:35px;border:1px solid #ccc}
			h4{text-align:center;font-size:20px;}
		}
		.button{width:100%}
	}
	li{list-style:none;padding-top:15px;}
</style>
<script>
	import {login} from "@/untils/fetch"
	import { mapMutations } from 'vuex'
	export default {
		data(){
			return {
				load:false,
				loginForm:{					
					name:"admin",
					password:"admin"
				}
			}
		},
		methods:{
			...mapMutations([
				'setToken'
			]),
			handleLogin(){
				if(this.loginForm.name==="" || this.loginForm.password === ""){
					this.$Message.warning("输入框不能为空")
					return false
				}
				this.load=true
				login(this.loginForm).then(response=>{
					this.load=false
					this.setToken(response.token)
					this.$router.push("/")
				}).catch((err)=>{
					this.load=false
					this.$Message.warning(err.token)
				})
			}
		}
	}
</script>