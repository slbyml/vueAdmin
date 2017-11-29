import Vue from "vue"
import MessageVue from "./message.vue"

const MessageConstructor=Vue.extend(MessageVue)

let speed=0
let zindexSeed = 1010
let instances=[]
let messageBox=document.getElementById("messageBox")
const messageType = ['info', 'success', 'warning', 'error', 'loading']

const message=options =>{
	if(typeof options === "string"){
		options={
			message:options
		}
	}

	const id = `message${speed++}`

	const userOnClose=options.onClose
	options.onClose=()=>{
		message.close(id,userOnClose)
	}


	const instance=	new MessageConstructor({
		data:options
	})

	instance.id=id
	instance.vm=instance.$mount()
	instance.dom=instance.vm.$el
	if(!messageBox){
		messageBox=document.createElement("div");
		messageBox.id="messageBox"
		document.body.appendChild(messageBox)
	}
	messageBox.appendChild(instance.dom)
	instance.dom.style.zIndex = zindexSeed++
	instance.vm.visible=true
	instances.push(instance)
}
message.close=(id,userOnClose)=>{
	const len=instances.length;
	for (let i=0;i<len;i++){
		if(id===instance[i].id){
			if(typeof userOnClose==="function"){
				userOnClose(instances[i])
			}
			instances.splice(i,1)
			break
		}
	}
}

messageType.forEach(type=>{
	message[type]=options=>{
		if(typeof options === "string"){
			options={
				message:options
			}
		}
		options.type=type
		return new message(options)
	}
})
export default message