<template>
	<div class="tooltipBox">
		<!-- <div>
			<tool-tip content="tooltip 上" placement="top">
				<pj-button type="primary">tooltip 上</pj-button>
			</tool-tip>		
			<tool-tip content="tooltip 上 -- 右" placement="top-end">	
				<pj-button type="primary">tooltip 上 -- 右</pj-button>
			</tool-tip>	
			<tool-tip content="tooltip 上 -- 左" placement="top-star">
				<pj-button type="primary">tooltip 上 -- 左</pj-button>
			</tool-tip>				
		</div>
		<div>
			<tool-tip content="tooltip 下" placement="bottom">
				<pj-button type="primary">tooltip 下</pj-button>
			</tool-tip>		
			<tool-tip content="tooltip 下 -- 右" placement="bottom-end">	
				<pj-button type="primary">tooltip 下 -- 右</pj-button>
			</tool-tip>	
			<tool-tip content="tooltip 下 -- 左" placement="bottom-star">
				<pj-button type="primary">tooltip 下 -- 左</pj-button>
			</tool-tip>				
		</div>
		<div>			
			<tool-tip content="tooltip 左" placement="left">
				<pj-button type="primary">tooltip 左</pj-button>
			</tool-tip>		
			<tool-tip content="tooltip 左 -- 上" placement="left-star">	
				<pj-button type="primary">tooltip 左 -- 上</pj-button>
			</tool-tip>	
			<tool-tip content="tooltip 左 -- 下" placement="left-end">
				<pj-button type="primary">tooltip 左 -- 下</pj-button>
			</tool-tip>	
		</div>
		<div>			
			<tool-tip content="tooltip 右" placement="right">
				<pj-button type="primary">tooltip 右</pj-button>
			</tool-tip>		
			<tool-tip content="tooltip 右 -- 上" placement="right-star">	
				<pj-button type="primary">tooltip 右 -- 上</pj-button>
			</tool-tip>	
			<tool-tip content="tooltip 右 -- 下" placement="right-end">
				<pj-button type="primary">tooltip 右 -- 下</pj-button>
			</tool-tip>	
		</div> -->
		<div class="top">
			<tool-tip content="tooltip 上 -- 左" placement="top-star">
				<pj-button type="primary">tooltip 上 -- 左</pj-button>
			</tool-tip>				
			<tool-tip content="tooltip 上" placement="top">
				<pj-button type="primary">tooltip 上</pj-button>
			</tool-tip>		
			<tool-tip content="tooltip 上 -- 右" placement="top-end">	
				<pj-button type="primary">tooltip 上 -- 右</pj-button>
			</tool-tip>	
		</div>
		<div class="content">
			<div class="left">		
				<tool-tip content="tooltip 左 -- 上" placement="left-star">	
					<pj-button type="primary">tooltip 左 -- 上</pj-button>
				</tool-tip>					
				<tool-tip content="tooltip 左" placement="left">
					<pj-button type="primary">tooltip 左</pj-button>
				</tool-tip>	
				<tool-tip content="tooltip 左 -- 下" placement="left-end">
					<pj-button type="primary">tooltip 左 -- 下</pj-button>
				</tool-tip>	
			</div>
			<div class="right">		
				<tool-tip content="tooltip 右 -- 上" placement="right-star">	
					<pj-button type="primary">tooltip 右 -- 上</pj-button>
				</tool-tip>				
				<tool-tip content="tooltip 右" placement="right">
					<pj-button type="primary">tooltip 右</pj-button>
				</tool-tip>		
				<tool-tip content="tooltip 右 -- 下" placement="right-end">
					<pj-button type="primary">tooltip 右 -- 下</pj-button>
				</tool-tip>	
			</div>
		</div>
		<div class="bottom">	
			<tool-tip content="tooltip 下 -- 左" placement="bottom-star">
				<pj-button type="primary">tooltip 下 -- 左</pj-button>
			</tool-tip>			
			<tool-tip content="tooltip 下" placement="bottom">
				<pj-button type="primary">tooltip 下</pj-button>
			</tool-tip>		
			<tool-tip content="tooltip 下 -- 右" placement="bottom-end">	
				<pj-button type="primary">tooltip 下 -- 右</pj-button>
			</tool-tip>	
		</div>
	</div>
</template>
<style scoped lang="scss">
.tooltipBox{padding:30px;width:600px;
	.myTootip{margin-bottom:20px;}
	.button{margin-right:10px;}
	.top{text-align:center}
	.left{width:140px;float:left}
	.right{width:140px;float:right;text-align:right}
	.bottom{text-align:center;clear:both}
}
</style>