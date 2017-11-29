// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/*loading*/
import loading from './components/loading'
Vue.use(loading)


/*element*/
import {Pagination} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Pagination)

/*全局按钮*/
import PjButton from './components/button';
Vue.use(PjButton)

/*文字提示*/
import ToolTip from './components/tooltip';
Vue.use(ToolTip)

/*message*/
import Message from "./components/message"
Vue.prototype.$Message=Message


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
