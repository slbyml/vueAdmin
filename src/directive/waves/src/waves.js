import './waves.css'
import {getStyle} from "@/untils/dom"
export default{
	bind(el, binding, vnode){
		const customOpts = Object.assign({}, binding.value)
		const opt=Object.assign({
			el:el,
			color: 'rgba(0, 0, 0, 0.15)'
		}, customOpts)
		const bindEl=opt.el
		const elPosition=getStyle(bindEl,"postion")	
		if(elPosition !== "absolute" || elPosition !== "fixed"  || elPosition !== "relative"){
			bindEl.style.position="relative"
		}
		bindEl.style.overflow="hidden";
		bindEl.addEventListener("click",e => {
			const rect=bindEl.getBoundingClientRect()
			let ripple = bindEl.querySelector('.waves-ripple')
			const _width=Math.max(rect.width,rect.height)
			if(!ripple){
	            ripple = document.createElement('span')
	            ripple.className = 'waves-ripple'
	            ripple.style.width=ripple.style.height=_width+"px"
	            bindEl.appendChild(ripple)
			}else{
				ripple.className = 'waves-ripple'
			}
			ripple.style.cssText+=`left:${e.pageX-rect.left-_width/2}px;top:${e.pageY-rect.top-_width/2}px;background-color:${opt.color}`
			requestAnimationFrame(()=>{
				ripple.className = 'waves-ripple z-active'
			})
			return false
		},false)
	}
}