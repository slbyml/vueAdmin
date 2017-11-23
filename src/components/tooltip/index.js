import toolTip from './src/tooltip';

toolTip.install=function(Vue){
	Vue.component(tooltip.name, tooltip);
}

export default toolTip
