import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/*登陆*/
import login from '@/views/login/login'

/*主体布局*/
import Layout from '@/views/layout/layer'

/*简述*/
import sketch from '@/views/sketch'



/*组件*/
import components from './components'
/*demo*/
import demos from './demo'


/*锁屏*/
import locking from '@/views/locking/locking'
/*404*/
import nopage from '@/views/404/404'

/*
hidden:是否将当前数据显示在导航中
noDropdown: 没有下拉  default:false
*/
export default new Router({
  //mode: 'history',
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
    demos,
    { path: '/locking',
      name:"锁屏",
      icon:"lock",
      component: locking
    },    
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
