<style scoped lang="scss">	
.messageList>div{display: inline-block;padding:6px 16px 6px 10px;background-color: #fff;box-shadow: 0 1px 8px rgba(0,0,0,.15);margin-bottom: 10px;border-radius: 3px;
	i{display:inline-block;}
	span{font-size: 14px;}
}
.messageList .icon-suc{color:#409eff}
.messageList .icon-warn{color:#eb9e05}
.messageList .icon-err{color:#fa5555}
.messageList .icon-suc{color:#409eff}
.messageList .icon-loading{animation:rotating 2s linear infinite;font-size:12px;}
</style>
<template>
	<transition name="move-up" @after-leave="doDestory">
		<div class="messageList"  v-show="visible">
			<div :class="messageClass">				
				<i class="iconfont" :class="inconClass"></i>
				<span>{{message}}</span>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		data(){
			return {
				message:"",
				duration:2500,
				closed:false,
        		type: 'info',
				timer:null,
				visible:false,
				onClose:null
			}
		},
		computed:{
			inconClass(){
				const classArr = {
			          'success': 'icon-suc',
			          'error': 'icon-err',
			          'warning': 'icon-warn',
			          'info': 'icon-info',
			          'loading': 'icon-loading'					
				}
				return classArr[this.type]
			},
			messageClass(){
				return `message-${this.type}`
			}
		},
		watch:{
			closed(val){
				if(val){
					this.visible=false
				}
			}
		},
		methods:{
			doDestory(){
        		this.$destroy(true)
        		this.$el.parentNode.removeChild(this.$el)
			},
			close(){
				this.closed=true
				if(typeof this.onclose==="funciton"){
					this.onclose(this)
				}
			},
			startTime(){
				if(this.duration){
					this.timer=setTimeout(()=>{
						!this.closed && this.close()
 					},this.duration)
				}
			}
		},
		mounted(){
			this.startTime()
		}
	}
</script>