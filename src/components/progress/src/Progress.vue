<template>
	<div class="progessBar">
		<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" v-if="type==='circle'">
			<path :d="circleWPath" fill="none" stroke="#e5e9f2" :stroke-width="strokeWidth" />
			<path :d="circleWPath" fill="none" stroke="#f56c6c" :stroke-width="moveWidth" stroke-linecap="round" class="path" :style="{strokeDashoffset:dashoffset+'px',strokeDasharray:cirlong+'px'}" ref="path"/>
			<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">{{percentage}}%</text>
		</svg>
		<div v-else class="progessLine" :class="isSmall" :style="{height:strokeWidth+'px'}">
			<div class="move" :style="{width:percentage+'%'}"><span>{{percentage}}%</span></div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"Progress",
		data(){
			return {
				cirlong:295.5
			}
		},
		props:{
			type:{
				dafault:"line",
				type:String
			},
			percentage:{
				default:0,
				type:Number,
				validator(value){
					return value>=0 && value<=100
				}
			},
			strokeWidth:{
				default:6,
				type:Number
			}
		},
		computed:{
			isSmall(){
				if(this.strokeWidth<14){
					return "small"
				}else{
					return ""
				}
			},
			dashoffset(){
				const offset=this.cirlong*this.percentage/100
				return Math.ceil(this.cirlong-offset)
			},
			moveWidth(){
				return this.strokeWidth>4?this.strokeWidth-2:this.strokeWidth
			},
			circleWPath(){
				const num=this.strokeWidth/2
				const r=Math.floor(50-num)
				return `M50 50m0 -${r}a${r} ${r} 0 1 1 0 ${r*2}a${r} ${r} 0 1 1 0 -${r*2}`
			}
		}
	}
</script>
<style scoped>	
	.path{transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;}
	.progessLine{background-color:#ebeef5;position:relative;vertical-align: middle;border-radius: 50px}
	.progessLine .move{height: 100%;text-align: right;white-space:nowrap;border-radius: 50px;background-color:#f56c6c;color: #fff;font-size: 12px;line-height: 1;transition:width .6s;}
	.progessLine .move span{display: inline-block;vertical-align: middle;margin: 0 4px;}
	.progessLine.small span{position: absolute;left: 100%;top:50%;color: #000;transform: translateY(-50%);}
</style>