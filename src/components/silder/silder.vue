<template>
	<div class="silder">
		<silder-list :routers="getRoutes"></silder-list>
	</div>
</template>

<script>	
	import SilderList from "./silderList"
	export default {
		name:"silder",
		computed:{
			getRoutes(){
				return  this.$router.options.routes
			}
		},
	    components:{
	    	SilderList,
	    }
	}
</script>

<style scoped lang="scss">
	.silder{position: fixed;left: 0;top: 0;bottom: 0;z-index: 10;overflow: hidden;transition:width .3s;background-color:#324157;color:#bfcbd9;font-size: 14px;user-select: none;width:180px;overflow-y:auto;
		&>ul{width:180px}
	}
</style>