import Layout from '@/views/layout/layer'

/*购物车*/
const exp= ()=> import("@/views/demo/exp")
/*新闻列表*/
const newslist= ()=> import("@/views/demo/news/list")
/*详情*/
const details= ()=> import("@/views/demo/news/details")

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
  	},    
    {
      path:"news",
      name:"消息列表",
      component: newslist
    },
    {
      path:"news/:id",
      name:"新闻详情",
      component: details,      
      hidden:"true"
    }
  ]
}