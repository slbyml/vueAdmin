<template>
	<div class="shopping table table-border table-hover" v-loading.fullscreen="loading">
		<h6 class="head">VUE版的购物车写起来方便，简单，条理更清晰</h6>
		<table>
			<thead>
				<tr>
					<td style="width:50px"><el-checkbox v-model="allChe">全选</el-checkbox></td>
					<td style="text-align:left">商品信息</td>
					<td>单价</td>
					<td>数量</td>
					<td>金额</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in lists">
					<td><el-checkbox v-model="item.che"></el-checkbox></td>
					<td>
						<div class="pic">
							<img :src="item.img" alt="item.mes">
						</div>
						<div class="mes">
							{{item.mes}}
						</div>
						<div class="type">
							<p>号码：{{item.size}}</p>
							<p>颜色：{{item.color}}</p>
						</div>
					</td>
					<td><strong>￥{{item.price}}</strong></td>
					<td><el-input-number v-model="item.inner" :min="1" :max="10" class="inner" size="mini"></el-input-number></td>
					<td>{{item.price*item.inner}}</td>
					<td>
						<pj-button type="primary" size="mini" @click="del(index)">删除</pj-button>
					</td>
				</tr>
				<tr>
					<td colspan="5">总价</td>
					<td><strong class="allPrice">￥{{allPrice}}</strong></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import {getStopping} from "@/untils/fetch"
	export default {
		data(){
			return {
				lists:[],
				loading:false
			}
		},
		created(){
			this.getStopping()
		},
		computed:{
			allPrice(){
				return this.lists.reduce((prev,curr)=>{
					if(!curr.che) return prev
					return prev+curr.price*curr.inner
				},0)
			},
			allChe:{
				get(){
					return this.lists.every(item=>item.che)
				},
				set(val){					
					this.lists.forEach(item=>{
						item.che=val
					})
				}
			}
		},
		methods:{
			getStopping(){
				this.loading=true
				getStopping().then(response=>{
					this.loading=false
					this.lists=response.lists				
				})
			},
			del(index){
				this.lists.splice(index,1)
			}
		}
	}
</script>
<style scoped lang="scss">
	.head{text-align:center;padding-bottom:15px;font-size:18px}
	.shopping{padding:30px;}
	.pic{float: left;width:80px;height:80px;}
	.mes{float:left;width:200px;text-align:left;padding-top:15px;margin:0 10px}
	.type{float:left;padding-top:15px;;text-align:left}
	.inner{width:90px}
	.allPrice{color:#409eff}
</style>