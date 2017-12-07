<style scoped lang="scss">
	.messageBox{padding:20px;
		.list{padding:10px;display:inline-block}
	}
</style>
<template>
	<div class="messageBox">	
		<div class="list">
			<pj-button @click="handleClick('info')"  v-waves>消息</pj-button>
		</div>
		<div class="list">
			<pj-button type="primary" @click="handleClick('success')"  v-waves>成功</pj-button>
		</div>
		<div class="list">
			<pj-button type="warning" @click="handleClick('warning')"  v-waves>警告</pj-button>
		</div>
		<div class="list">
			<pj-button type="danger" @click="handleClick('error')"  v-waves>错误</pj-button>
		</div>
		<div class="list">
			<pj-button  @click="handleClick('loading')"  v-waves>加载中</pj-button>
		</div>
	</div>
</template>
<script>
	import waves from '@/directive/waves/index.js' // 水波纹指令
	export default {
		data(){
			return{

			}
		},
		directives:{
			waves
		},
		methods:{
			handleClick(type){
				if(type==="info"){
					this.$Message.info("这是一条提示信息")
				}else if(type==="success"){
					this.$Message.success("这是一条正确信息")
				}else if(type==="warning"){					
					this.$Message.warning("这是一条警告信息")
				}else if(type==="error"){					
					this.$Message.error({
						message:"这是一条错误信息",
						duration:4000
					})
				}else if(type==="loading"){					
					this.$Message.loading("这是一条加载信息……")
				}
			}
		}
	}
</script>