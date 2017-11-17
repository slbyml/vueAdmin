<template>
	<transition name='fade'>
		<div class="loadingMask" :class="{'fullscreen':fullscreen}" v-show="visible">
			<div class="loadingSpinner">
				<i class="iconfont icon-loading"></i>
				<p v-if="text">{{text}}</p>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		name:"loading",
		data(){
			return{
				visible:false,
				text:"加载中……",
				background:null,
				fullscreen:false
			}
		},
		methods:{
			setText(txt){
				this.text=txt
			}
		}
	}
</script>
<style lang="scss" scoped>
	.loadingMask{position:absolute;left:0;top:0;right:0;bottom:0;min-height:30px;text-align:center;background-color:rgba(255,255,255,.8);color:#409eff;
		.loadingSpinner{position: absolute;top:50%;padding:0 20%;transform:translateY(-60%);width:60%}
		.iconfont{line-height:1;display:inline-block;font-size:18px;animation: rotating 2s linear infinite;}
		p{padding-top:6px;font-size:12px;}
		&.fullscreen{position: fixed;z-index: 10000}
	}
</style>