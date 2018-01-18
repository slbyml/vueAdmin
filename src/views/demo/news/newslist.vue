<template>	
	<ul  class="newsList" v-loading="loading" loading-text="拼命加载中……">
		<li v-for="item in lists" :key="item.id">
			<router-link :to="{name:'新闻详情',params: {id:item.id}}">{{item.title}}<strong>（文章id:{{item.id}}）</strong><span class="tag">{{type}}</span></router-link>	
			
		</li>
	</ul>
	
</template>
<script>
	import {getNews} from "@/untils/fetch"
	export default {
		name:"newsList",
		props:{			
	      type: String
		},
		data(){
			return {	
				lists:{},			
				loading:true,
			}
		},
		created(){
			this.getNews()
		},
		methods:{
			getNews(){		//获取新闻列表
				this.loading=true
				getNews().then((res)=>{
					this.loading=false
					this.lists=res.lists

				})
			}
		}
	}
</script>
<style coped lang="scss">	
	.newsList{
		li{line-height:32px;list-style:none;margin-top:6px;height:32px;overflow:hidden;
			a{color:#333;text-decoration:none;
				&:hover{color:#20a0ff}
			}
		}
		.tag{border:1px solid rgba(64,158,255,.2);border-radius:4px;color:#409eff;font-size:14px;display:inline-block;height:28px;line-height:28px;padding:0 5px;background-color:rgba(64,158,255,.1)}
	}
</style>