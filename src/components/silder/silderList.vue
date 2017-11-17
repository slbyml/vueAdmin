<template>
	<ul class="treeView">
		<li class="silderMenu" v-for="item in routers" :key="getNowPath(item.path)" :class="{isopend:submenus[nowComponentPath+item.path]}"  v-if="!item.hidden">
			<template v-if="item.children && item.children.length>0 && !item.noDropdown">
				<p class='menusTitle' :style="{paddingLeft:setPadding+'px'}" @click="changeMenuDrop(item)">
					<i class="iconfont" :class="setIconFont(item)"></i>
					{{item.name}}
					<i class="iconfont icon-down"></i>
				</p>
    			<el-collapse-transition>
					<silder-list :routers="item.children" :parentpath="getNowPath(item.path)" :parentMenuFlag="isOpendMenu" @changeMenu="emitChangeMenu" v-show="submenus[nowComponentPath+item.path]"></silder-list>
    			</el-collapse-transition>
			</template>
			<template v-else>				
				<router-link :to="getNowPath(item.path)" :style="{paddingLeft:setPadding+'px'}"><i class="iconfont" :class="setIconFont(item)"></i>{{item.name}}</router-link>
			</template>
		</li>
	</ul>
</template>

<script>	
	import ElCollapseTransition from '@/transitions/collapse-transition';
	export default {
		name:"SilderList",
		data(){
			return {
				isOpendMenu:false,		//当前组件是否是展开状态
				submenus:{}
			}
		},
		props:{
			routers:{
				type:Array,
				default:{}
			},
			parentpath:{
				type:String,
				default:""
			},
			parentMenuFlag:Boolean
		},	
		created(){
			this.routers.forEach((item)=>{		//设置每个有children得组件是否展开
				if(item.children && item.children.length>0){
					this.$set(this.submenus, this.nowComponentPath+item.path, false);
				}
			})
		},	
		computed:{
			setPadding(){	
				let n=15,parent=this.$parent;
				while(parent){
					if (parent.$options.name === 'SilderList') {
			            n += 15;
			          }
					parent=parent.$parent
				}
				return n
			},
			nowPath(){		//获取当前的url
				return this.$route.path
			},
			nowComponentPath(){		//如果当前还有children，会获取当前得path
				return this.parentpath===""?"":this.parentpath+"/"
			}
		},
		methods:{			
			getNowPath(path){
				const p=this.parentpath===""?path:this.parentpath+"/"+path;
				this.isOpened(p)
				return p		
			},
			changeMenuDrop(menus){			//鼠标点击得展开与折叠
				let path=this.nowComponentPath+menus.path;
				for(let item in this.submenus){
					if(path === item){
						this.submenus[item] = !this.submenus[item]
					}else{		//关闭出当前得所有兄弟tree
						this.submenus[item] = false
					}
				}
			},	
			emitChangeMenu(pathKey){		//通过子组件触发当前标签展开
				this.submenus[pathKey]=true
				this.$emit("changeMenu",this.parentpath)
			},
			isOpened(route){			//当前页面路径是否和当前数据得path匹配,
				if(route === this.nowPath){		//如果匹配，则默认当前组件得父组件是展开状态
					this.$emit("changeMenu",this.parentpath)					
				}
			},
			setIconFont(data){
				return data.icon ?"icon-"+data.icon:"icon-default"
			}
		},
	    components: { ElCollapseTransition }
	}
</script>

<style scoped lang="scss">
	.silderMenu{list-style: none;overflow: hidden;
		a{height: 44px;line-height: 44px;color: #bfcbd9;display:block;text-decoration:none;
			&:hover{color:#fff}
			&.isActive{color:#20a0ff;background-color:#48576a;
				i{font-weight:bold}
			}
		}
		p{line-height:44px;cursor:pointer;color:#bfcbd9;position:relative;
			.icon-down{position:absolute;right:15px;top:0;transition:.3s}
		}
		.treeView{background-color:#1f2d3d}
	}
	.treeView{
		.iconfont{margin-right:15px;}
		li{transition:border-color .3s,background-color .3s,color .3s}
		li:hover,p:hover{background-color:#48576a;color:#fff}
	}
	.isopend>p .icon-down{transform: rotate(180deg);}
</style>