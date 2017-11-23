<style scoped lang="scss">
	.loadingM{padding:20px;}
	.loadingBox{width:300px;min-height:400px;border:1px solid #000;padding:20px;margin:20px;
		p{line-height:26px}
	}
</style>
<template>
	<div class="loadingM">
		<pj-button type="primary" @click.native="btn1" v-loading.fullscreen="loading1" loading-text="拼命加载中……">加载1</pj-button>
		<div class="loadingBox" v-loading="loading2">			
			<pj-button type="primary" @click.native="btn2" >加载2</pj-button>
			<p>sefesfsdfdsa <br>士大夫大师傅<br>士大夫大师傅但是<br>是广泛大使馆反对<br>首付多少分分威威<br>是分文氛围分为我<br>啊非费网费枉费我哦i<br>是菲菲问我丰富</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				loading1:false,
				loading2:false
			}
		},
		methods:{
			btn1(){
				this.loading1=true;
				setTimeout(()=>{
					this.loading1=false
				},3000)
			},			
			btn2(){
				this.loading2=true;
				setTimeout(()=>{
					this.loading2=false
				},3000)
			}
		}
	}
</script>