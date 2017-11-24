<style scoped lang="scss">
	.myTootip{display: inline-block;position: relative;}
	.tooltipContent{position: absolute;padding:5px;z-index: 100;
		.arrow{border-color: transparent;border-style: solid;border-width: 5px;position:absolute;}
	}	
	.tooltipInner{background-color:rgba(70,76,91,.9);padding: 8px 12px;border-radius:4px;color: #fff;font-size: 13px;    white-space: nowrap;}
	.tooltip-top{
		.arrow{left:50%;margin-left:-5px;bottom:0;border-top-color: rgba(70,76,91,.9);border-bottom:0}
	}
	.tooltip-top-star{
		.arrow{left:10px;bottom:0;border-top-color: rgba(70,76,91,.9);border-bottom:0}
	}
	.tooltip-top-end{
		.arrow{right:10px;bottom:0;border-top-color: rgba(70,76,91,.9);border-bottom:0}
	}	
	.tooltip-bottom{
		.arrow{left:50%;margin-left:-5px;top:0;border-bottom-color: rgba(70,76,91,.9);border-top:0}
	}
	.tooltip-bottom-star{
		.arrow{left:10px;top:0;border-bottom-color: rgba(70,76,91,.9);border-top:0}
	}
	.tooltip-bottom-end{
		.arrow{right:10px;top:0;border-bottom-color: rgba(70,76,91,.9);border-top:0}
	}
	.tooltip-left{
		.arrow{top:50%;margin-top:-5px;right:0;border-left-color: rgba(70,76,91,.9);border-right:0}
	}
	.tooltip-left-star{
		.arrow{top:10px;right:0;border-left-color: rgba(70,76,91,.9);border-right:0}
	}
	.tooltip-left-end{
		.arrow{bottom:10px;right:0;border-left-color: rgba(70,76,91,.9);border-right:0}
	}
	.tooltip-right{
		.arrow{top:50%;margin-top:-5px;left:0;border-right-color: rgba(70,76,91,.9);border-left:0}
	}
	.tooltip-right-star{
		.arrow{top:10px;left:0;border-right-color: rgba(70,76,91,.9);border-left:0}
	}
	.tooltip-right-end{
		.arrow{bottom:10px;left:0;border-right-color: rgba(70,76,91,.9);border-left:0}
	}
</style>
<template>
	<div class="myTootip">
		<div class="tootipTrigger" @mouseenter="handleShowtip" @mouseleave="handleClosetip" ref="trigger">
			<slot></slot>	
		</div>
		<transition name="fade">
			<div class="tooltipContent"
        		 :class="'tooltip-' + placement"
				 v-show="show"
				 ref="tipover">
				<i class="arrow"></i>
				<div class="tooltipInner">
					<slot name="content">{{content}}</slot>
				</div>				
			</div>
		</transition>
	</div>
</template>
<script>
	import PopoverMixin from './mixins'
	export default {
		name:"toolTip",
		mixins: [PopoverMixin]
	}
</script>