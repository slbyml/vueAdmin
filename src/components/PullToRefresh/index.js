import PullToRefresh from './src/PullToRefresh';

PullToRefresh.install=function(Vue){
	Vue.component(PullToRefresh.name, PullToRefresh);
}

export default PullToRefresh
