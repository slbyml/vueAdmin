<template>
	<div class="wrap" :class="{hideSidebar:!!$store.state.hidesidebar}">
		<silder></silder>
		<div class="container">
			<nav-bar></nav-bar>
			<div class="main">
				<content-box></content-box>
			</div>
		</div>
	</div>
</template>

<script>
	/*左菜单*/
	import silder from "@/components/silder/silder"
	/*上面得导航*/
	import NavBar from "@/components/NavBar/NavBar"
	/*承放主体内容*/
	import ContentBox from "./contentbox"
	
	export default {
	  name: 'layer',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  	silder,
	  	NavBar,
	  	ContentBox
	  }
	}
</script>

<style lang="scss">
	$hideWidth:46px;
	$silderWidth:180px;
	.wrap{
		width: 100%;min-height: 100vh;
	}
	.container{
		position:relative;
		height:100vh;
		transition:margin .3s;
		margin-left:$silderWidth;
	}
	.hideSidebar{
		.silder{width:$hideWidth!important}
		.container{margin-left:$hideWidth;}		
		.silder:hover{width:$silderWidth;}
		.toggleSilder .iconfont{transform:rotate(0deg)}
	}
	.appContent{clear:both;padding:15px;}
	.main{position:absolute;left:0;top:50px;width:100%;bottom:0;overflow-y:auto}
</style>
