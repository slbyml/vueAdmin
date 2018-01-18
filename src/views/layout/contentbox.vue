<template>
	<transition name="fade" mode="out-in">
	   	<keep-alive include="newslist">   
			<router-view></router-view>
	    </keep-alive>
    </transition>
</template>
<script>	
	export default {
		name:"contetBox"
	}
</script>