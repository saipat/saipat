$(document).ready(function(){

	$("#btn-1").click(function(){
		$(".location").slideToggle("slow");
	});

	$(".foot button").on("click",function(){
		$(this).remove();
		$("h5").text("Thanks for your comment. Your comment is submitted");
	});

	$(".lists li").hover(function(){
		$("span").show();
	});
	
	$("#ri li #app").click(function(){
		$("#ri li #app").show();
		$("#list1 li").slideToggle("slow");
	});

	$("#ri li #ent").click(function(){
		$("#ent").show();
		$("#list2 li").slideToggle("slow");
	});

	$("#ri li #des").click(function(){
		$("#des").show();
		$("#list3 li").slideToggle("slow");
	});
});

