<template>
	<div class="noPage">
		<img :src=img alt="" @click="back">
	</div>
</template>
<style scoped lang="scss">
	.noPage{text-align:center}
	img{max-width:99vw;max-height:99vh;cursor:pointer}
</style>
<script>
	import img_404 from '@/assets/404.jpg'
	export default {
		data(){
			return{
				img:img_404
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>