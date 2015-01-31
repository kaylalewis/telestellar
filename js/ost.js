// function replaceWords(el) {
//     var newElText = el.innerHTML;
//     newElText = newElText.replace(/States/g, 'Individuals').replace('jwekwjs', 'peace');

//     el.innerHTML = newElText;
// }
//replaceWords(document.getElementById('replace-them'));
//^^ maybe use this one day because it's cool

function boldIt(container, str){
	container.innerHTML = container.innerHTML.split(str).join('<span class="changeOst">'+str+'</span>');

} 

function unboldIt(container, str){
	container.innerHTML = container.innerHTML.split(str).join('<span class="changeBackOst">'+str+'</span>');

} 

 
//this will style each damn word

var makeBold = document.getElementById("treaty");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'Treaty'); 
	
}

var makeBold = document.getElementById("states");
makeBold.onclick = function() {

	boldIt(document.getElementsByTagName('p')[0], 'States');

}

var makeBold = document.getElementById("celestial");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'Celestial Bodies');
	
}


var makeBold = document.getElementById("moon");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'Moon'); 
	
}

var makeBold = document.getElementById("use");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'use'); 
	
}

var makeBold = document.getElementById("government");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'Governmental');
	boldIt(document.getElementsByTagName('p')[0], 'Government');
	boldIt(document.getElementsByTagName('p')[0], 'Governing');
}

var makeBold = document.getElementById("exploration");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'exploration'); 
	
}

var makeBold = document.getElementById("international");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'international '); 
	
}

var makeBold = document.getElementById("peace");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'peace'); 
	boldIt(document.getElementsByTagName('p')[0], 'peaceful'); 
	
}

var makeBold = document.getElementById("weapon");
makeBold.onclick = function() {
boldIt(document.getElementsByTagName('p')[0], 'weapon');
boldIt(document.getElementsByTagName('p')[0], 'weapons');
}

var makeBold = document.getElementById("co-operation");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'co-operation');
	
}

var makeBold = document.getElementById("mankind");
makeBold.onclick = function() {
	boldIt(document.getElementsByTagName('p')[0], 'mankind'); 
	
}

//this will unstyle them

// var unbold = document.getElementById("untreaty");
// unbold.onclick = function() {

// 	unboldIt(document.getElementsByTagName('p')[0], 'Treaty');
// }

// var unbold = document.getElementById("unstates");
// unbold.onclick = function() {

// 	unboldIt(document.getElementsByTagName('p')[0], 'States');
// }

// var unbold = document.getElementById("uncelestial");
// unbold.onclick = function() {

// 	unboldIt(document.getElementsByTagName('p')[0], 'Celestial Bodies');
// }




