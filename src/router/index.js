import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/*登陆*/
import login from '@/views/login/login'

/*主体布局*/
import Layout from '@/views/layout/layer'

/*简述*/
import sketch from '@/views/sketch'


/*table*/
const tables = () => import("@/views/table")


/*组件*/
import components from './components'
/*demo*/
import demos from './demo'


/*404*/
import nopage from '@/views/404/404'

/*
hidden:是否将当前数据显示在导航中
noDropdown: 没有下拉  default:false
*/
export default new Router({
  linkActiveClass:"isActive",
  routes: [
    {
      path: '/login',
      name: '登录',
      hidden:"true",
      component: login
    },
    {
      path: '/',
      name: '首页',
      hidden:"true",
      component: Layout,
      redirect:"introduction",
    },
    {
      path:"/introduction",
      component: Layout,
      icon:"jianshu",
      name:"简述",
      noDropdown:true,
      redirect:"/introduction/index",
      children:[     
        {       
          component: sketch,        
          path:"index",
        }
      ]
    },
    components,
    {
      path:"/tables",
      component: Layout,
      icon:"table",
      name:"表格",
      noDropdown:true,
      redirect:"/tables/index",
      children:[     
        {         
          component: tables,      
          path:"index",
          
        }
      ]
    },
    demos,
    { path: '/404',
      name:"404",
      hidden: true,
      component: nopage
    },
    { path: '*',
      redirect:"/404",
      hidden: true,
    }
  ]
})
