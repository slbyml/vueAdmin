import Vue from 'vue'
/*loading*/
import loading from './loading'
Vue.use(loading)

/*全局按钮*/
import PjButton from './button';
Vue.use(PjButton)

/*文字提示*/
import ToolTip from './tooltip';
Vue.use(ToolTip)

/*message*/
import Message from "./message"
Vue.prototype.$Message=Message


/*element*/
import {Pagination} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Pagination)