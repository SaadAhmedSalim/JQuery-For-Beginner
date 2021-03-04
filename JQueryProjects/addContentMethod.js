function appendText(){
	var txt1 = "<p>Text.</p>"; // create text with HTML
	var txt2 = $("<p></p>").text("Text. "); // create text with Jquery
	var txt3 = document.createElement("p");

	txt3.InnerHTML = "Text."; // create text with DOM
	$("body").append(txt1, txt2, txt3);
}

$(document).ready(function(){
	$("#btn1").click(function(){
		$("img").before("<b>Before</b>");
	});

	$("#btn2").click(function(){
		$("img").after("<i>After</i>");
	});

});
