<template>
	<div class="appContent">
		<div class="sketch">
			<h5>这只是首页！一个用vue写的首页！仅此而已！！</h5>
			<dl>
				<dt>权限:</dt>
				<dd>{{info.introduction}}</dd>
			</dl>
			<br>
			<dl>
				<dt>名字:</dt>
				<dd>{{info.name}}</dd>
			</dl>
			<br>
			<dl>
				<dt>性别:</dt>
				<dd>{{info.sex}}</dd>
			</dl>
			<br>
			<dl>
				<dt>年龄:</dt>
				<dd>{{info.age}}</dd>
			</dl>
			<br>
			<dl>
				<dt>工作:</dt>
				<dd>{{info.work}}</dd>
			</dl>
			<br>
			<dl>
				<dt>用了啥：</dt>
				<dd>vue+部分element-ui+各种借鉴</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default {
		name:"sketch",
		computed:{
			info(){
				return this.$store.state.info
			}
		}

	}
</script>
<style lang="scss" scoped>
	.sketch{padding:15px;background:#eef1f6;text-align:center;
		h5{text-align:left;font-size:20px;}
		dl{width:350px;height:34px;line-height:34px;display:inline-block;text-align:left}
		dt{float:left}
		dd{margin-left:48px;}
	}
</style>