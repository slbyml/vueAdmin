import Vue from 'vue';
import Loading from './src/loading.vue';
import {getStyle} from "@/untils/dom"
const Mask=Vue.extend(Loading)

const toggleLoading=(el,binding)=>{
	if(binding.value){
		Vue.nextTick(()=>{
			if(binding.modifiers.fullscreen){		//全屏
				el.instance.fullscreen=true
				el.oldOverflow=getStyle(document.body, 'overflow')
				document.body.style.overflow = 'hidden'
				document.body.appendChild(el.mask)	
			}else{			
				const elPosition=getStyle(el,"postion")		
				if(elPosition !== "absolute" || elPosition !== "fixed"){
					el.style.position="relative"
				}	
				if(!el.domInserted){
					el.domInserted=true;
					el.appendChild(el.mask)
				}
			}
			el.domInserted=true
			Vue.nextTick(()=>{
				el.instance.visible=true
			})

		})
	}else{
		if (binding.modifiers.fullscreen && el.oldOverflow !== 'hidden') {
	        document.body.style.overflow = el.oldOverflow;
	      }
		el.instance.visible=false
	}
}

export default{
	install(){
		Vue.directive("loading",{
			bind:function(el,binding,vnode){
				const txt=el.getAttribute("loading-text")
				const mask=new Mask({
        			el: document.createElement('div'),
					text:txt
				})
				el.mask=mask.$el;
				el.instance=mask;
				el.domInserted=false;
				toggleLoading(el,binding)
			},
			update:function(el,binding,vnode){
				el.instance.setText(el.getAttribute("loading-text"))
				if(binding.oldValue!==binding.value){
					toggleLoading(el,binding)
				}
			},
			unbind(el,binding){
				if(el.domInserted){
					el.mask.parentNode && el.mask.parentNode.removeChild(el.mask)
				}
			}
		})
	}
}