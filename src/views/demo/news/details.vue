<template>
	<div class="details"  v-loading.fullscreen="loading" loading-text="拼命加载中……">
		<h5>{{title}}</h5>
		<div class="article">
			{{text}}
		</div>
	</div>
</template>
<script>
	import {details} from "@/untils/fetch"
	export default {	
		data(){
			return {
				loading:true,
				title:"",
				text:""
			}
		},
		created(){
			this.getDetails()
		},
		methods:{
			getDetails(){
				this.loading=true
				details({id:this.$route.params}).then((res)=>{
					this.loading=false
					this.title=res.wrap.title
					this.text=res.wrap.text
				})
			}
		}

	}
</script>
<style scoped lang="scss">
.details{padding:30px;
	h5{text-align:center;font-size:20px;padding-bottom:10px;}
	.article{text-indent:2em;line-height:26px;}
}
</style>