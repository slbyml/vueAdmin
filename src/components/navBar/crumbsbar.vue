<template>
	<div class="crumbsBox">
		<template v-for="item in crumbsList" v-if="item.path && item .name">
			<span v-if="isLink(item)">{{item.name}}</span>
			<router-link :to="item.path" v-else>{{item.name}}</router-link>
			<span class="breadSeparator">/</span>
		</template>
	</div>	
</template>

<script>
	export default {
		name:"crumbsBox",
		data(){
			return {
				crumbsList:{}
			}
		},
		created(){
			this.getCrubsList()
		},
		methods:{
			getCrubsList(){	
				let matcheds=this.$route.matched;
				const first=matcheds[0]
				if(first && (first.name !== '首页' || first.path !== '')){
					matcheds = [{ name: '首页', path: '/' }].concat(matcheds)
				}
				this.crumbsList=matcheds
			},
			isLink(item){
				return item.name !== "首页"
			}
		},
		watch:{
			'$route':'getCrubsList'
		}
	}
</script>

<style lang="scss" scoped>
	.crumbsBox{
		span,a{color:#48576a;font-size:14px;transition:color .2s}
		span:nth-last-child(2){
			color: #97a8be
		}
		a{text-decoration:none;
			&:hover{color:#20a0ff}
		}
		.breadSeparator{margin:0 8px;color:#bfcbd9;
			&:last-child{display:none}
		}
	}
</style>