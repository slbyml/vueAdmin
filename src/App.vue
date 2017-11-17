<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
	  name: 'app'
	}
</script>

<style>
  	@import '~normalize.css/normalize.css';
  	@import '//at.alicdn.com/t/font_465165_j53lmi58igcr3sor.css';

  	*{padding:0;margin:0}
  	.fade-enter-active, .fade-leave-active {
	  transition: opacity .25s
	}
	.fade-enter, .fade-leave-to {
	  opacity: 0
	}
	.collapse-transition {
    	transition: height .3s ease-in-out,padding-top .3s ease-in-out,padding-bottom .3s ease-in-out
	}
	
	@keyframes rotating{
		from {transform:rotate(0)}
		to {transform:rotate(360deg)}
	}
</style>
