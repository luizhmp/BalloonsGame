function addBalloon(){
	var balloon = document.createElement("div");
	balloon.setAttribute("class","balloon");
	colors = ['green','red','black','blue','yellow','purple','gray'];
	color = colors[Math.floor(Math.random()* 7)];
	var x = Math.floor(Math.random() * 500);
	var y = Math.floor(Math.random() * 500);
	balloon.setAttribute("style","left:"+x+"px;top:"+y+"px;"+"background-color:"+color);
	balloon.setAttribute("onclick","burst(this)");
	document.body.appendChild(balloon);
}
function burst(obj){
	document.body.removeChild(obj);
}
function start(){
	setInterval(addBalloon, 1000);
}