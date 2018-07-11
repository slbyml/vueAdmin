<template>
	<div class="refreshWrap">
		<div class="refresh" style="visibility: hidden;" ref="pullBox">
			<i class="loading" ref="progress"></i>
			<p class="loadTxt">{{pullDownTxt}}</p>
		</div>
		<slot></slot>
		<div class="loadingBox" ref="upBox">
			<i class="loading rotate"></i>
			<p class="loadTxt">{{upFreshTxt}}</p>
		</div>
	</div>
</template>
<script>
	import pullRefreshMixin from './mixins'
	export default {
		name:"pullRefresh",
		mixins: [pullRefreshMixin]
	}
</script>
<style lang="scss" scoped>
.refreshWrap .refresh{position: absolute;left: 0;top: 0;width: 100%;height:60px;line-height: 60px;text-align: center;}
.refreshWrap .loadingBox{width: 100%;height:40px;text-align: center;padding: 10px;position: relative;background-color: #fff;z-index: 2}
.refreshWrap .loading,.refreshWrap .loadTxt{vertical-align: middle;display: inline-block;}
.refreshWrap .loading{border-radius: 50%;width: 16px;height: 16px;border: 1px solid #666;border-top-color: transparent;margin-right: 8px;transform: translateZ(0);position: relative;}
.refreshWrap .noMore .loading{display:none;}
.refreshWrap .success{border-color: transparent;}
.refreshWrap .success:before{content:"";border:1px solid #666;border-top-color: transparent;border-left-color:transparent;position: absolute;left: 0;bottom: 0;width: 8px;height: 16px;}
.refreshWrap .rotate {
    -webkit-animation: refresh-rotate 0.6s linear infinite;
    animation: refresh-rotate 0.6s linear infinite;
}
@keyframes refresh-rotate {
    0% {
        transform: rotateZ(0deg);
        -moz-transform: rotate(0deg);
    }
    100% {
        transform: rotateZ(360deg);
        -moz-transform: rotate(360deg);
    }
}
</style>