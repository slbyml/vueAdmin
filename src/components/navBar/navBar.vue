<template>
	<div class="NavBar">
		<div class="toggleSilder" @click="toggleSidebar">
			<i class="iconfont icon-toggleMenu"></i>
		</div>
		<crumbs-box class="levelbar"></crumbs-box>
	</div>
</template>
<script>	
	import crumbsBox from "./crumbsbar"

	export default {
		name:"NavBar",
		methods:{
			toggleSidebar(){
				this.$store.commit("changeSildbar")
			}
		},
		components:{
			crumbsBox
		}
	}
</script>
<style scoped lang="scss">
$h:50px;
.NavBar{background-color:#eef1f6;position: relative;height:$h;line-height:$h;}
.toggleSilder{text-align:center;float: left;cursor:pointer;width:46px;height:$h;
	&:hover{background-color:#e6ebf5}
	i{font-size:24px;transition:transform .3s;display: inline-block;transform:rotate(90deg)}
}
.levelbar{float: left;margin-left:10px;height:$h}
</style>