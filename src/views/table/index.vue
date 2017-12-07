<template>
	<div class="appContent">
		<div class="table table-border table-hover" v-loading="loading" loading-text="拼命加载中……">
			<table cellspacing="0" cellpadding="0" border="0"  v-loading.fullscreen="aaa">
				<thead>
					<tr>
						<th>文章ID</th>
						<th>作者</th>
						<th>标题</th>
						<th>简介</th>
						<th>阅读量</th>
						<th>发布日期</th>
						<th>设置</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in dataList">
						<td>{{item.id}}</td>
						<td>{{item.brief}}</td>
						<td>										
							<tool-tip placement="top">
								{{item.title}}
								<template slot="content">文章ID：{{item.id}}</template>
							</tool-tip>
						</td>
						<td>{{item.author}}</td>
						<td>{{item.number}}</td>
						<td>{{item.data}}</td>
						<td><pj-button type="primary" size="mini" @click.native="delList(index)" :loading="item.loading">删除</pj-button></td>
					</tr>
				</tbody>
			</table>	
			<div class="paginationBox">
				<el-pagination
				 	@current-change="handleCurrentChange" 
				    layout="prev, pager, next"
				    :total="50">
				</el-pagination>	
			</div>
		</div>
	</div>
</template>
<script>
	import {getTableList} from "@/untils/fetch"
	export default {
		data(){
			return {
				dataList:{},
				page:1,
				loading:false,
				aaa:false
			}
		},
		created(){
			this.getTableLists()
		},
		methods:{
			handleCurrentChange(val){
				this.page=val
				this.getTableLists()
			},
			getTableLists(){
				this.loading=true
				getTableList(this.page).then(response=>{
					response.lists.forEach((item)=>{
						item.loading=false
					})
					this.dataList=response.lists
					this.loading=false
				})
			},
			delList(index){
				this.dataList[index].loading=true
				setTimeout(()=>{
					this.dataList.splice(index,1)
					this.$Message.success("删除成功")
				},1000)
			}
		}
	}
</script>
<style lang="scss">
	.table{box-sizing:border-box;
		table{width:100%;border-collapse:collapse;}
		tr{background-color:#fff}
		td , th{border-bottom:1px solid #dfe6ec;padding:10px;text-align:center;font-size:14px;}
	}
	.table-border{
		thead tr{background-color:#eef1f6;}
		th,td{border:1px solid #dfe6ec}
	}
	.table-hover{
		tbody tr td{transition:background-color .25s}
		tbody tr:hover td{background-color:#eef1f6}		
	}
	.paginationBox{margin-top:10px;
		li,button{border:1px solid #d1dbe5;margin-left:-1px;
			&.active{background-color: #20a0ff;color:#fff;}
		}
		button{padding:0 6px;}
	}
</style>