// function replaceWords(el) {
//     var newElText = el.innerHTML;
//     newElText = newElText.replace(/States/g, 'Individuals').replace('jwekwjs', 'peace');

//     el.innerHTML = newElText;
// }

function boldIt(container, str){
	container.innerHTML = container.innerHTML.split(str).join('<strong>'+str+'</strong>');
} 
window.onload = function(){
	boldIt(document.getElementsByTagName('p')[0], 'Treaty'); 
	boldIt(document.getElementsByTagName('body')[0], 'States');
	boldIt(document.getElementsByTagName('body')[0], 'Celestial Bodies'); 
	boldIt(document.getElementsByTagName('body')[0], 'Moon'); 
	boldIt(document.getElementsByTagName('body')[0], 'use');
	boldIt(document.getElementsByTagName('body')[0], 'Governmental');
	boldIt(document.getElementsByTagName('body')[0], 'exploration');
	boldIt(document.getElementsByTagName('body')[0], 'international ');
	boldIt(document.getElementsByTagName('body')[0], 'peace');
	boldIt(document.getElementsByTagName('body')[0], 'weapon');
	boldIt(document.getElementsByTagName('body')[0], 'co-operation');
	boldIt(document.getElementsByTagName('body')[0], 'mankind');
}

//replaceWords(document.getElementById('replace-them'));