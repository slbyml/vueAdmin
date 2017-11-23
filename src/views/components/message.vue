<style scoped lang="scss">
	.messageBox{padding:20px;
		.list{padding:10px;display:inline-block}
	}
</style>
<template>
	<div class="messageBox">	
		<div class="list">
			<pj-button @click="aaa">消息</pj-button>
		</div>
		<div class="list">
			<pj-button type="primary">成功</pj-button>
		</div>
		<div class="list">
			<pj-button type="warning">警告</pj-button>
		</div>
		<div class="list">
			<pj-button type="danger">错误</pj-button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		methods:{
			aaa(){
				console.log('1')
			}
		}
	}
</script>