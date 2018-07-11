let _PTFuntil={
    throttle(that, fn, delay, atleast){         //函数节流
        let timer = null;
        let previous = null;
        return function() {
            var now = +new Date();
            if (!previous) previous = now;
            if (atleast && now - previous > atleast) {
                fn.call(that)
                // 重置上一次开始时间为本次结束时间
                previous = now;
                clearTimeout(timer);
            } else {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn.call(that)
                    previous = null;
                }, delay);
            }
        }
    },
    deepMerge:(function(){  //深度合并object
        const merge = (obj1,obj2={})=>{
            let key="";
            for(key in obj2) {
                // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
                obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
                _PTFuntil.deepMerge(obj1[key], obj2[key]) : obj1[key] = obj2[key];
            }
        }
        return function(...arr){
            let obj={};
            arr.forEach((item)=>{
                merge(obj,item)
            })
            return obj
        }
    })(),
    prefixStyle:(function(){        //css3兼容      
        const _elementStyle = document.createElement('div').style;
        const _vendor = (function() {
            let vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                transform,
                i = 0,
                l = vendors.length;

            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
            }
            return false;
        })();
        return style =>{
            if (_vendor === false) return false;
            if (_vendor === '') return style;
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);

        }
    })()
}

const transform = _PTFuntil.prefixStyle('transform');
const transitionDuration = _PTFuntil.prefixStyle('transitionDuration');

export default {	
	props:{
		dampRate: {
			type: Number,
			default: 0.4
		},
		pullSet: {
			type: Boolean,
			default: true
		},
		pullHeight: {
			type: Number,
			default: 60
		},
		pullDown: {
			type: String,
			default: '下拉刷新'
		},
		pullOver: {
			type: String,
			default: '释放刷新'
		},
		pullFresh: {
			type: String,
			default: '刷新中……'
		},
		pullCallback: {
			type: Function,
			default: null
		},
		pullSuccess: {
			type: String,
			default: '刷新成功'
		},
		upSet: {
			type: Boolean,
			default: true
		},
		upHeight: {
			type: Number,
			default: 120
		},
		upFresh: {
			type: String,
			default: '正在加载……'
		},
		upNomore: {
			type: String,
			default: '没有更多数据了'
		},
		upCallback: {
			type: Function,
			default: null
		},
	},
	data(){
		return {
			pullDownTxt:this.pullDown,
			upFreshTxt:this.upFresh,
			domHeight:0,
			scrollBox:null,
			data:{             //存放数据和状态
	            upLoading:false,    //是否增在加载更多
	            firstFull:false,    //第一次调用加载时内容是否大于容器，false则继续加载，知道大于为止
	            canPull:true,       //是否可以下拉
	            pullLoadding:false, //当前是否正在刷新
	            preY:0,             //存放上一次的Y坐标
	            starX:0,            //存放开始滑动时的坐标
	            starY:0,
	            pullHeight:0,       //存放下拉的高度
	            canRefresh:false,  //能否刷新
	        } 
		}
	},
	mounted(){
		this.domHeight=this.$el.offsetHeight
		this.pullBox=this.$refs.pullBox
		this.progress=this.$refs.progress
		this.upBox=this.$refs.upBox
		this.scrollBox=this.$slots.default[0].elm
		this._firstLoad()
        this._loadMoreEvent();
        this._pullEvent()
	},
	methods:{
		handleClick(evt){
			this.$emit("click",evt)
		},
		_firstLoad(){			
	        const childHeight=this.scrollBox.offsetHeight;
	        if(childHeight<this.domHeight+this.upHeight && !this.data.firstFull){      //滚动元素小于滚动容器
	            this._loadMore(true)
	        }else{
	            this.data.firstFull=true;
	        }
		},
	    _loadMoreEvent(){//上拉加载
	        this.$el.onscroll=_PTFuntil.throttle(this, this._scrollCallback, 150, 250)
	    },
	    _scrollCallback(){
	        if(!this.data.firstFull) return false;    //  当不是由下拉或上拉改变得容器里面所有内容时,如果改变之前有滚动条，改变之后没有，则可能会触发一次scroll,会造成两次请求
	        this._loadMore()
	    },
	    _loadMore(flag=false){   //加载更多  flag为true是可以跳过判断，直接加载更多
	        if(this.data.upLoading) return false;
	        const scrollTop=this.$el.scrollTop,
	              scrollHeight=this.$el.scrollHeight;
	        if(flag || scrollTop+this.domHeight+this.upHeight>=scrollHeight){
	            this.data.upLoading=true
	            this.upCallback && this.upCallback(this.endUpLoading)
	        }
	    },
	    endUpLoading(flag=true){        //更新上拉状态,flag判断是否还有更多
	        if(flag){
	            this.data.upLoading=false;
	            if(!this.data.firstFull) this._firstLoad();          
	        }else{      //没有数据
	            this._UpNoMore()
	        }
	    },
	    endPullRefresh(flag=true){       //刷新成功（外部调用）
	        this._showPullSuc(flag)
	    },
	    _showPullSuc(flag){
	        //显示刷新成功并更改图标
	        this.progress.classList.add("success")
	        this.progress.style[transform] = `rotate(45deg)`
	        this.upFreshTxt=this.pullSuccess

	        this.progress.classList.remove("rotate")

	        setTimeout(()=>{
	            this._refreshSuccess(flag)
	        },1000)
	    },
	    _refreshSuccess(flag){      //刷新成功，重置参数
	        this.data.pullLoadding=false;
	        this._translate(0,300)
	        this.data.pullHeight=0
	        this.$el.scrollTop=0
	        setTimeout(()=>{
            	this.pullDownTxt=this.pullDown
	        	this.progress.classList.remove("success")
	        },100)     //移除刷新成功的√
	        
	        if(!flag){      //刷新时没有数据
	            this.pullBox.style.visibility="hidden" //隐藏下拉刷新
	            this._UpNoMore();
	            return false;
	        }
	        /*重置上拉加载的参数*/
	        this.initUpLoading()
	        setTimeout(()=>{     
	            this._firstLoad();   //下一次渲染的时候判断是否需要加载更多
	            this.pullBox.style.visibility="hidden" //隐藏下拉刷新
	        },100)
	    },
	    _UpNoMore(){
	        this.upBox.classList.add("noMore")
	        this.upFreshTxt=this.upNomore
	    },
	    _pullEvent(){            //为下拉刷新绑定事件
	        if(!this.pullSet) return false;
	        const start = e => {
	            this.data.canRefresh=false
	            const scrollTop=this.$el.scrollTop;
	            this.data.canPull=scrollTop>0?false:true       //根据滚动到顶部判断是否可以启用下拉
	            this.data.preY=this.data.starY = e.changedTouches[0].clientY || e.clientY
	            this.data.starX = e.changedTouches[0].clientX || e.clientX
	        }   
	        const move = e =>{
	            const scrollTop=this.$el.scrollTop;
	            if(this.data.pullLoadding || !this.data.canPull) return false;      //当前不是下拉状态活不是正在刷新状态
	            this.pullBox.style.visibility="visible"; //隐藏下拉刷新
	            const toucheX=e.changedTouches[0].clientX || e.clientX,
	                  toucheY=e.changedTouches[0].clientY || e.clientY;
	            const diff=toucheY-this.data.preY;  //当前移动点相对于上一次移动点的位移
	            this.data.preY=toucheY
	            const moveX=toucheX-this.data.starX,    //记录移动的距离
	                  moveY=toucheY-this.data.starY;
	            if(Math.abs(moveX)>Math.abs(moveY)){        //左右滑动
	                return false
	            }
	            if(moveY<0){        //向上移动 
	                this.data.canPull=false
	                return false 
	            }   
	            e.preventDefault();
	            if(this.data.pullHeight<this.pullHeight){       //没有到达可以刷新的距离
	                this.data.pullHeight+=diff
	            }else{                  //到达可以刷新的高度
	                if(diff<0){     
	                    this.data.pullHeight+=diff
	                }else{
	                    this.data.pullHeight+=diff*this.dampRate
	                }               
	            }
	            this.data.pullHeight=Math.round(this.data.pullHeight)
	            this._translate(this.data.pullHeight)
	            this._progressRote(this.data.pullHeight)
	        }   
	        const end = e =>{
	            //const scrollTop=this.$el.scrollTop;
	            if(this.data.pullLoadding) return false;  //当前是正在刷新状态
	            if(!this.data.canPull){       //当前不是下拉状态
	                if(this.data.pullHeight!=0){
	                    this.data.pullHeight=0;
	                    this._translate(0,0)
	                }
	                return false
	            }
	            this.data.preY=0;
	            this.data.starY=0;
	            this.data.starX=0;
	            if(this.data.canRefresh){       //刷新
	                this._pullRefresh()
	            }else{      //不刷新
	                this.pullBox.style.visibility="hidden"; //隐藏下拉刷新
	                this.data.pullHeight=0;
	                this._translate(0,300)
	                this.$el.scrollTop=0
	            }
	        }
	        this.$el.addEventListener('touchstart',e=>{
	            start(e)
	        }, false)
	        this.$el.addEventListener('touchmove',e=> {
	            move(e)
	        }, false);
	        this.$el.addEventListener('touchend',e => {
	            end(e)
	        }, false)
	    },
	    _pullRefresh(){          //刷新
	        this.data.pullLoadding=true
	        this._translate(this.pullHeight,300)
	        this.data.pullHeight=this.pullHeight
	        this.pullDownTxt=this.pullFresh
	        this.pullCallback && this.pullCallback(this.endPullRefresh)
	        this.progress.classList.add("rotate")
	    },
	    _translate(h=0,duration=0){
	        this.upBox.style[transitionDuration] =`${duration}ms`
	        this.upBox.style[transform] = `translate3d(0,${h}px,0)`
	        this.scrollBox.style[transitionDuration] =`${duration}ms`
	        this.scrollBox.style[transform] = `translate3d(0,${h}px,0)`
	    },
	    _progressRote(h=0){          //更改下拉刷新的文字和动画
	        const r=360;
	        let rotate=r*h/this.pullHeight
	        this.progress.style[transform] = `rotate(${rotate}deg)`
	        if(h>=this.pullHeight){        //可以刷新
	            if(!this.data.canRefresh){
	                this.pullDownTxt=this.pullOver
	                this.data.canRefresh=true
	            }
	            return false               
	        }else{          //不可以刷新
	            if(this.data.canRefresh){
	                this.pullDownTxt=this.pullDown
	                this.data.canRefresh=false
	            }
	            return false              
	        }
	    },
	    initUpLoading(){  //重置上拉加载的状态        
	        this.data.firstFull=false
	        this.data.upLoading=false
	        this.upBox.classList.remove("noMore")
	        this.upFreshTxt=this.upFresh
	    },
	    _scrollToTop(){
	        this.$el.scrollTop=0
	    },
	    triggerPullLoading(){       //主动触发刷新
	        if(!this.pullSet) return false;
	        this.pullBox.style.visibility="visible"
	        this._scrollToTop()
	        this._pullRefresh()
	    },
	    triggerUpLoading(){         //主动触发上拉加载
	        this.initUpLoading()
	        this._loadMore(true)
	    }
	}
}
