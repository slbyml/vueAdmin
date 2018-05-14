<template>
	<div>
		<p>type:进度条类型（line/circle）</p>
		<p>stroke-width:宽度</p>
		<p>percentage:进度条百分比（1-100）</p>
		<p></p>
		<Progress :percentage="num" type="circle" class="circle"/>
		<Progress :percentage="num" :stroke-width="16" class="line"/>
		<Progress :percentage="num" :stroke-width="6" class="line"/>
	</div>
</template>
<script>
	export default {
		created(){
			console.log("created")
			this.randomChange()
		},
		data(){
			return {
				num:50,
				time:null
			}
		},
		methods:{
			randomChange(){
				this.time=setInterval(()=>{
					let num=this.num
					num += this.getRandom()
					this.num=(num<0 || num > 100)?50:num
				},1000)
			},
			getRandom(min=-15,max=15){				
		        if(min>max){
		            [min,max]=[max,min]
		        }
		        return Math.floor(Math.random()*(max-min+1)+min) 
			}
		},
		destroyed(){
			clearInterval(this.time)
		}

	}
</script>
<style lang="scss" scoped>
	p{margin:15px;}
	.circle{width:200px;height:200px;margin:30px}
	.line{width:300px;margin:30px}	
</style>