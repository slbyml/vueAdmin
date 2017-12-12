<template>
	<div class="locking">
		<div class="center">
			<div class="head">
				<i class="iconfont icon-head"></i>
				<div class="open" @click="showInput">
					<i class="iconfont icon-open"></i>
					<p>解锁</p>
				</div>
			</div>
			<div class="lockInput" v-show="input">
				<el-input placeholder="密码同登陆密码" type="password" @keyup.enter.native="isLocking" class="lockPassword" v-model="password"></el-input>
				<pj-button type="primary" class="lockBtn" @click="isLocking">解 锁</pj-button>
			</div>
		</div>
	</div>
</template>
<script>
	import {noLocking,locking} from '@/untils/auth'
	import {openLock} from '@/untils/fetch'
	export default {
		name:"lock",
		data(){
			return {
				input:false,
				password:""
			}
		},
		created(){
			locking()
		},
		methods:{
			showInput(){
				this.input=true
			},
			isLocking(){
				openLock({password:this.password}).then(response=>{
					if(response.data===1){
						noLocking()
						this.$router.go(-1)						
					}else{
						this.password=""
						this.$Message.error("密码错误")
					}		
				})
			}
		}
	}
</script>
<style lang="scss">
	$lockingh:100px;
	.locking{background-color:#324157;position:absolute;left: 0;top: 0;width: 100%;height:100%;color: #fff;
		.center{position:absolute;left:50%;top:40%;transtion:all .2s linear;transform:translate(-50%,-50%);text-align:center}
		.head{ width:$lockingh;height:$lockingh;border:3px solid #4C9CFC;border-radius:50%;cursor: pointer;position:relative;display:inline-block;
			&>i{font-size:50px;color:#4C9CFC;line-height:$lockingh;}
			.open{position:absolute;left:0;top:0;width:$lockingh;height:$lockingh;border-radius:50%;background-color:rgba(0,0,0,.6);border-color:1px solid #000;opacity:0;transition:opacity .2s}
			&:hover{
				.open{opacity:1;				
					i{line-height:$lockingh - 20;font-size:40px;}
					p{margin-top:-10px;}
				}
			}
		}
		.lockPassword{margin:20px 0}
		.lockInput{
			input{text-align:center}
		}
		.lockBtn{width:100%}
	}
</style>