<template>
	<div class="tabNews">
		<h6>页面/组件之间切换缓存当前页面，不清空输入框，不重新加载新闻列表</h6>
		<input type="text">
		<div class="pjTabs">
			<div class="tabHead">
				<template v-for="(item,index) of tabs">
					<div class="tabItem" :class="{'is-active':index == activeTab}" :key="item.key" @click="changeTab(index,item)">{{item.label}}</div>
				</template>
			</div>
			<div class="tabContent"> 
	        	<div v-for="(item,index) of tabs" class="content">	 
	        		<keep-alive>   			
						<news-list v-if="index == activeTab" :type="item.key"></news-list>
	       			</keep-alive>
	        	</div>
			</div>			
		</div>
	</div>
</template>
<script>
	import newsList from "./newslist"
	export default {
		name:"newslist",
  		components: { newsList },
		data(){
			return {
				activeTab:0,
				tabs:[
				        { label: '中国', key: 'CN' },
				        { label: '美国', key: 'US' },
				        { label: '日本', key: 'JP' },				        
				        { label: '俄罗斯', key: 'RUS' }
				    ]
			}
		},
		methods:{
			changeTab(index,lists){		//tab切换
				this.$Message.success(lists.label)
				this.activeTab=index;

			}
		},
		beforeRouteEnter(to, from, next){
			if(from.name!=="新闻详情"){
				next(vm => {
					vm.$Message.success("来自非新闻详情页进入")
				})
			}else(
				next(vm => {
					vm.$Message.success("从新闻详情页返回")
				})
			)
		}
	}
</script>
<style scoped lang="scss">
	.tabNews{width:80%;padding:15px 0 15px 10%;
		h6{font-size:16px;}
		&>input{margin:10px;}
		.pjTabs{background:#fff;border:1px solid #dcdfe6;box-shadow:0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);}
		.tabHead{background-color:#f5f7fa;border-bottom:1px solid #e4e7ed;font-size:0;
			.tabItem{position:relative;height:38px;line-height:38px;display:inline-block;padding:0 20px;color:#909399;font-size:14px;margin:0 -1px -1px;cursor: pointer;transition:all .2s;border:1px solid transparent;
				&:hover{color:#409eff}
				&.is-active{background-color:#fff;color:#409eff;border-left:1px solid #dcdfe6;border-right:1px solid #dcdfe6}
			}
		}

	}
	.tabContent{padding:14px;;min-height:30px;}
</style>