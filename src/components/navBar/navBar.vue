<template>
	<div class="NavBar">
		<div class="toggleSilder" @click="toggleSidebar">
			<i class="iconfont icon-toggleMenu"></i>
		</div>
		<crumbs-box class="levelbar"></crumbs-box>
		<div class="userMenu">
			<span @click.stop="changeMenu">{{myName}}</span>
			<transition name="fade">
				<ul v-show="userMenu">
					<li @click.stop="loginOut">退出</li>
				</ul>
			</transition>
		</div>
	</div>
</template>
<script>	
	import crumbsBox from "./crumbsbar"
	import {LoginOut} from "@/untils/auth"
	export default {
		name:"NavBar",
		data(){
			return {
				userMenu:false
			}
		},
		computed:{
			myName(){
				//return this.$store.state.info.name
				return "超级管理员23"
			}
		},
		methods:{
			toggleSidebar(){
				this.$store.commit("changeSildbar")
			},
			changeMenu(){
				this.userMenu=!this.userMenu
			},
			loginOut(){
				this.userMenu=false;
				LoginOut()
				this.$router.push("/login")
			}
		},
		components:{
			crumbsBox
		}
	}
</script>
<style scoped lang="scss">
li{list-style:none}
$h:50px;
.NavBar{background-color:#eef1f6;position: relative;height:$h;line-height:$h;}
.toggleSilder{text-align:center;float: left;cursor:pointer;width:46px;height:$h;
	&:hover{background-color:#e6ebf5}
	i{font-size:24px;transition:transform .3s;display: inline-block;transform:rotate(90deg)}
}
.levelbar{float: left;margin-left:10px;height:$h}
.userMenu{float:right;margin-right:10px;height:$h;position:relative;z-index: 10;
	&:hover span{background-color:#e6ebf5}
	&>span{cursor:pointer;display:inline-block;padding:0 15px;line-height:$h;min-width:50px;}
	ul{position:absolute;background-color:#fff;left:0;top:$h;box-shadow:0 0 5px 1px #ccc;width:100%;
		li{text-align:center;line-height:$h;cursor:pointer;
			&:hover{background-color:#e6ebf5}
		}
	}
}
</style>