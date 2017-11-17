export function getStyle(eles,name){	
    if (eles.currentStyle) {
      return eles.currentStyle[name]
    }else{
      return getComputedStyle(eles,false)[name]
    };
}