<template>
	<div class="appContent">
		<dl class='list'>
			<dt>常用按钮：</dt>
			<dd><pj-button type="default">默认按钮</pj-button></dd>
			<dd><pj-button type="primary">主要按钮</pj-button></dd>
			<dd><pj-button type="success">成功按钮</pj-button></dd>
			<dd><pj-button type="info">信息按钮</pj-button></dd>
			<dd><pj-button type="warning">警告按钮</pj-button></dd>
			<dd><pj-button type="danger">危险按钮</pj-button></dd>
		</dl>
		<dl class='list'>
			<dt>禁用按钮：</dt>
			<dd><pj-button type="default" disabled>默认按钮</pj-button></dd>
			<dd><pj-button type="primary" disabled>主要按钮</pj-button></dd>
			<dd><pj-button type="success" disabled>成功按钮</pj-button></dd>
			<dd><pj-button type="info" disabled>信息按钮</pj-button></dd>
			<dd><pj-button type="warning" disabled>警告按钮</pj-button></dd>
			<dd><pj-button type="danger" disabled>危险按钮</pj-button></dd>
		</dl>
		<dl class="list">
			<dt>按钮大小：</dt>
			<dd><pj-button type="primary" size="medium">默认按钮</pj-button></dd>
			<dd><pj-button type="primary" size="small">默认按钮</pj-button></dd>
			<dd><pj-button type="primary" size="mini">默认按钮</pj-button></dd>
		</dl>
		<dl class="list">
			<dt>加载中……：</dt>
			<dd><pj-button type="primary" loading>加载中</pj-button></dd>
		</dl>
		<dl class="list">
			<dt>水波纹指令：</dt>
			<dd><pj-button type="primary" v-waves>水波纹指令</pj-button></dd>
		</dl>
	</div>
</template>
<script>
	import waves from '@/directive/waves/index.js' // 水波纹指令
	export default{
		directives:{
			waves
		}
	}
</script>
<style scoped lang="scss">
.list{margin:15px 15px 25px 10px;clear:both;width:100%;overflow:hidden;
	dt{margin-bottom:10px;font-weight:bold;font-size:16px;}
	dd{float:left;margin-right:15px;}
}
</style>