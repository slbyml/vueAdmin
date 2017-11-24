export default {
	props:{
		content:{
	      type: String,
	      default: ''
	    },
	    delay:{
            type: Number,
            default: 100
	    },	    
	    placement: {
	      type: String,
	      default: 'top'
	    }
	},
	data(){
		return {
			show:false,
			position:{
				left:0,
				top:0
			}
		}
	},
	methods:{
		handleShowtip(){
			if(this._timer) clearTimeout(this._timer)
				this._timer=setTimeout(()=>{
					this.show=true
					this.settipPosition()
				},this.delay)
		},
		handleClosetip(){
			if(this._timer){
				clearTimeout(this._timer)
				this._timer=setTimeout(()=>{
					this.show=false
				},200)

			}
		},
		settipPosition(){
			this.$nextTick(()=>{
				const tipOver=this.$refs.tipover
				const trigger=this.$refs.trigger.children[0]
				switch(this.placement){
					case "top":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth/2 - tipOver.offsetWidth/2
						this.position.top=trigger.offsetTop - tipOver.offsetHeight
						break
					case "top-star":
						this.position.left=trigger.offsetLeft
						this.position.top=trigger.offsetTop - tipOver.offsetHeight						
						break
					case "top-end":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth - tipOver.offsetWidth
						this.position.top=trigger.offsetTop - tipOver.offsetHeight
						break
					case "bottom":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth/2 - tipOver.offsetWidth/2
						this.position.top=trigger.offsetTop + trigger.offsetHeight
						break
					case "bottom-star":
						this.position.left=trigger.offsetLeft
						this.position.top=trigger.offsetTop + trigger.offsetHeight					
						break
					case "bottom-end":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth - tipOver.offsetWidth
						this.position.top=trigger.offsetTop + trigger.offsetHeight
						break
					case "left":
						this.position.left=trigger.offsetLeft - tipOver.offsetWidth
						this.position.top=trigger.offsetTop + trigger.offsetHeight/2 - tipOver.offsetHeight/2				
						break
					case "left-star":
						this.position.left=trigger.offsetLeft - tipOver.offsetWidth
						this.position.top=trigger.offsetTop
						break
					case "left-end":
						this.position.left=trigger.offsetLeft - tipOver.offsetWidth
						this.position.top=trigger.offsetTop + trigger.offsetHeight - tipOver.offsetHeight			
						break
					case "right":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth
						this.position.top=trigger.offsetTop + trigger.offsetHeight/2 - tipOver.offsetHeight/2				
						break
					case "right-star":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth
						this.position.top=trigger.offsetTop
						break
					case "right-end":
						this.position.left=trigger.offsetLeft + trigger.offsetWidth
						this.position.top=trigger.offsetTop + trigger.offsetHeight - tipOver.offsetHeight			
						break
					default:
						this.position.left=trigger.offsetLeft + trigger.offsetWidth/2 - tipOver.offsetWidth/2
						this.position.top=trigger.offsetTop - tipOver.offsetHeight
						break					
				}
				tipOver.style.top=`${this.position.top}px`
				tipOver.style.left=`${this.position.left}px`				
			})
		}
	}
}
