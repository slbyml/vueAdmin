import Layout from '@/views/layout/layer'

/*购物车*/
const shopping= ()=> import("@/views/demo/shopping/shopping")
/*新闻列表*/
const newslist= ()=> import("@/views/demo/news/list")
/*详情*/
const details= ()=> import("@/views/demo/news/details")
/*table*/
const tables = () => import("@/views/demo/table")

export default {
  path: '/demo',
  name: '案例',
  icon:'demo',
  component: Layout,
  redirect:"/demo/shopping",
  children:[
    {
      path:"tables",
      name:"表格",
      component: tables,  
    }, 
  	{
	  	path:"shopping",
	  	name:"购物车",
      component: shopping,  
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