			function startMove(obj,json,fn){
				var stop = true;
				clearInterval(obj.timer);
				obj.timer = setInterval(function(){
					for(var attr in json){
						if(attr == 'opacity'){
							cur = parseInt(parseFloat(getStyle(obj,attr))*100);
						}else{
							cur = parseInt(getStyle(obj,attr));
						}						
						speed = (json[attr] - cur)/8;
						speed = speed > 0?Math.ceil(speed):Math.floor(speed);
						
						if(cur != json[attr]){
							stop = false;
						}
						if(attr == 'opacity'){
							cur += speed;
							obj.style.filter =  "alpha(opacity=" + cur + ")";
							obj.style.opacity = cur/100;								
						}else{
							obj.style[attr] = cur + speed + "px";
						}
						document.title = cur;
					}
					if(stop){
						clearInterval(obj.timer);
						if(fn){
							fn();
						}							
					}
					
				},30);	
			}		
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,false)[attr];
				}
			}	