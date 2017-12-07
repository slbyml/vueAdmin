<template>
	<ul  class="newsList" v-loading.fullscreen="loading" loading-text="拼命加载中……">
		<li><strong>页面从详情页返回时不清空输入框，不重新加载新闻列表</strong></li>
		<li><input type="text"></li>
		<li v-for="item in lists" :key="item.id">
			<router-link :to="{name:'新闻详情',params: {id:item.id}}">{{item.title}}<strong>（文章id:{{item.id}}）</strong></router-link>	
			
		</li>
	</ul>
</template>
<script>
	import {getNews} from "@/untils/fetch"
	export default {
		name:"newslist",
		data(){
			return {
				loading:true,
				lists:{}
			}
		},
		created(){
			this.getNews()
		},
		methods:{
			getNews(){
				this.loading=true
				getNews().then((res)=>{
					this.loading=false
					this.lists=res.lists

				})
			}
		},
		beforeRouteEnter(to, from, next){
			if(from.name!=="新闻详情"){
				next(vm => {
					vm.getNews()
				})
			}else(
				next()
			)
		}
	}
</script>
<style scoped lang="scss">
	.newsList{width:80%;padding:15px 0 15px 10%;
		li{line-height:24px;list-style:none;margin-top:15px;height:24px;overflow:hidden;
			a{color:#333;text-decoration:none;
				&:hover{color:#20a0ff}
			}
		}
	}
</style>