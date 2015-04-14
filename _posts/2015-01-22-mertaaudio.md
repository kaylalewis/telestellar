---
layout: post
image: /img/soni.jpg
category: visual
---
<!-- <script type="text/javascript" src="/../js/js.js"></script>
<script type="text/javascript" src="/../js/html5slider.js"></script> -->
<!-- <audio controls>
<source src="/../media/7671081.mp3" type="audio/mpeg">
</audio> -->

Merta vocal synchronization with Kepler 7671081



<div id = "player">

<div id = "time"></div>
<br>

<div id = "play">
</div>
<!-- <div id = "pause">
</div> -->

</div>

<script>
document.ready = function() {

var song = new Audio("/../media/7671081.mp3");

var time = song.currentTime;







$("#play").click(function() {

song.play();



$("#time").animate({

	marginLeft: "250px"

}, 25330);

console.log(song.duration);



});




// $("#pause").click(function() {
	
// 	song.pause();

// });








}


</script>
