import Layout from '@/views/layout/layer'

/*按钮*/
const button= ()=> import("@/views/components/button")

export default {
  path: '/components',
  name: '组件',
  icon:'zujianku',
  component: Layout,
  children:[
  	{
	  	path:"button",
	  	name:"按钮",
      component: button,  
  	}
  ]
}