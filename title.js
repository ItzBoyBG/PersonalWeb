if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 100);

}

var x = 0;

var titleText = [ "_", "#", "hatter", "h", "a_", "t#", "t/", "r$" "ha", "ha-", "ha/", "hat", "hatt-", "hatte#", "hatter",];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}