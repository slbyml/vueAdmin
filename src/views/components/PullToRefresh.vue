<template>
	<div>
		<pull-refresh id="contentApp" :pull-callback="pullCallback" :up-callback="upCallback">
			<ul>
				<li v-for="value in dataList" :key="value.title">
					<h5>{{value.title}}</h5>
					<p>{{value.text}}</p>
				</li>
			</ul>
		</pull-refresh>
		<div class="tip">第{{page}}次</div>
	</div>
</template>
<script>
	const appendTestData=()=>{
		let arr=[]
		for(let i=0;i<6;i++){
			arr.push({
				title:Math.floor(Math.random()*100000)+new Date().getTime(),
				text:"现在开始报时："+new Date()+Math.random()
			})
		}
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				resolve(arr)
			},1000)
		})
	}
	export default {
		data(){
			return {
				page:0,
				dataList:[]
			}
		},
		created(){
			//this.getList()
		},
		methods:{
			async getList(flag=false){
				const _data=await appendTestData()
				if(flag){
					this.dataList=_data
				}else{
					this.dataList=this.dataList.concat(_data)
				}
			},
			async pullCallback(next){
				this.page=1
				await this.getList(true)
				next()
			},
			async upCallback(next){
				await this.getList(false)
				this.page++
				if(this.page>5){
					next(false)
				}else{
					next(true)
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
#contentApp{position: fixed;left: 0;top: 0;width: 100%;height: 100%;overflow-y:auto;-webkit-overflow-scrolling: touch;background-color: #fff;z-index: 1000}
#contentApp ul{background-color: #fff;position: relative;z-index: 3;}
#contentApp  li{padding:10px 15px;border-bottom: 1px solid #ccc}
#contentApp h5{font-size: 20px;}
#contentApp li p{font-size: 14px;}
.tip{position: fixed;right:10px;top: 50px;width:60px;height: 50px;border-radius: 50%;background-color: #fff;box-shadow:0 0 5px #ccc;z-index: 10000;text-align: center;line-height: 50px;color: #666}
</style>