import Layout from '@/views/layout/layer'

/*购物车*/
const exp= ()=> import("@/views/demo/exp")

export default {
  path: '/demo',
  name: '案例',
  icon:'demo',
  component: Layout,
  redirect:"/demo/exp",
  children:[
  	{
	  	path:"exp",
	  	name:"购物车",
      component: exp,  
  	}
  ]
}