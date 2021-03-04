$(document).ready(function() {
	$("#btn1").click(function(){
		$("#test1").text(function(i, origText) {
			return "Old Text: " + origText + "  New Text:<strong> JQuery Rocks!</strong> (index: "+ i+")";
		});		
	});

	$("#btn2").click(function(){
		$("#test2").text(function(i, origText) {
			return "Old HTML: " + origText + "  New HTML:<strong>TEXT</strong> (index: "+ i+")";
		});		
	});
});