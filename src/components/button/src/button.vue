<template>
	<button class="button" 
	@click="handleClick" 
	:class="[
		'button-'+type,
		size?'button-'+size:'',
		{
			'btn-disabled':disabled,
			'btn-loading':loading,

		}
	]">
		<i class="iconfont icon-loading" v-if="loading" @click="stopClick"></i>
		<span  @click="stopClick"><slot></slot></span>
	</button>
</template>
<script>
	export default {
		name:"PjButton",
		props:{
			type:{
				type:String,
				default:"default"
			},
			size:String,
			loading:Boolean,
			disabled:Boolean
		},
		methods:{
			handleClick(evt){
				this.$emit("click",evt)
			},
			stopClick(evt){				
		        if (this.disabled) {
		          evt.stopPropagation();
		        }
			}
		}
	}
</script>
<style lang="scss" scoped>
	/* 样式部分摘自element ui */
	.button{display:inline-block;line-height:1;white-space: nowrap;cursor:pointer;color:#fff;text-align:center;box-sizing:border-box;outline:none;transition:.1s;padding:12px 20px;font-size:14px;border-radius:4px;border:1px solid #333;
		&:active,&:hover{opacity:.8}
		&.button-medium{padding:10px 20px;}
		&.button-small{padding:9px 15px;font-size:12px;
			.icon-loading{font-size:12px}
		}
		&.button-mini{padding:7px 12px;font-size:12px;
			.icon-loading{font-size:12px}
		}
	}
	.btn-disabled{cursor:not-allowed;
		&.btn-disabled{opacity:.8}
	}
	.button-default{background:#fff;border-color:#d8dce5;color:#5a5e66;
		&:active{    color: #3a8ee6;border-color: #3a8ee6;}
	}
	.button-primary{background-color: #409eff;border-color: #409eff;
		&:active{background: #3a8ee6;border-color: #3a8ee6;}
	}
	.button-success{background-color: #67c23a;border-color: #67c23a;
		&:active{background-color: #67c23a;border-color: #67c23a;}
	}
	.button-info{background-color: #878d99;border-color: #878d99;
		&:active{background-color: #878d99;border-color: #878d99;}
	}
	.button-warning{background-color: #eb9e05;border-color: #eb9e05;
		&:active{background-color: #878d99;border-color: #878d99;}

	}
	.button-danger{background-color: #fa5555;border-color: #fa5555;
		&:active{background-color: #878d99;border-color: #878d99;}
	}
	.icon-loading{line-height:1;display:inline-block;vertical-align: baseline;font-size:14px;animation: rotating 2s linear infinite;-webkit-font-smoothing: antialiased;}
	.btn-loading{pointer-events: none;opacity:.8}
</style>