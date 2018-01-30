import Layout from '@/views/layout/layer'

/*按钮*/
const button= ()=> import("@/views/components/button")
/*加载*/
const loading= ()=> import("@/views/components/loading")
/*消息提示*/
const message= ()=> import("@/views/components/message")
/*文字提示*/
const tooltip= ()=> import("@/views/components/tooltip")
/*进度条*/
const Progress= ()=> import("@/views/components/Progress")

export default {
  path: '/components',
  name: '自制组件',
  icon:'zujianku',
  component: Layout,
  redirect:"/components/button",
  children:[
  	{
	  	path:"button",
	  	name:"按钮",
      component: button,  
  	},   
    {
      path:"Progress",
      name:"进度条",
      component: Progress,  
    },   
    {
      path:"loading",
      name:"加载",
      component: loading,  
    },    
    {
      path:"message",
      name:"消息提示",
      component: message,  
    },     
    {
      path:"tooltip",
      name:"文字提示",
      component: tooltip,  
    }
  ]
}