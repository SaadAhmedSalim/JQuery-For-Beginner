$(document).ready(function(){
	$("button").click(function(){
		$("h1,p").toggleClass("blue");
		$("h2,div").toggleClass("yellow");
	});
});