var slider = document.getElementById("slider");
var index = 1;
var nav = document.getElementById("nav").children;
var isMoving = false;

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
	return getComputedStyle(obj,null)[attr];
	}
}
	
function lunbo(){
 	if(!isMoving){
 		isMoving = true;
	 	index++;
	 	navChange();
		animate(slider,{left:-810*index}, function(){
			if(index === 6){
				slider.style.left = "-810px";
	           index = 1;
			}
			isMoving = false;
		})
	}
}
var timer = setInterval(lunbo, 3000);

for(var i = 0 ; i < nav.length ; i++){
	nav[i].idx = i;
	nav[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-810 * index})
	}
}
function navChange(){
	for(var i = 0 ; i < nav.length ; i++){
		nav[i].className = "";
	}
	if(index === 6){
 		nav[0].className = "active";
 	}
	else if(index === 0){
 		nav[4].className = "active";
	}
	else{
	 	nav[index - 1].className = "active";
	}	
}