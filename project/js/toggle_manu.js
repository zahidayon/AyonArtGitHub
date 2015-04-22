$(function(){
			$("#show_nav").click(function(){
				$("#header_nav").toggle("slow");
				$("#close_nav").show("slow");
				$("#show_nav").hide("slow");
			});
			$("#close_nav").click(function(){
				$("#header_nav").toggle("slow");
				$("#close_nav").hide("slow");
				$("#show_nav").toggle("slow");
			});
});
		
$(function(){
			$(".close_flexslider").click(function(){
				$("#slider").toggle("slow");
				$(".show_flexslider").show("slow");
				$(".close_flexslider").hide("slow");
				$("#show_nav").hide("slow");
				$("#header_nav").hide("slow");
			});
			$(".show_flexslider").click(function(){
				$("#slider").toggle("slow");
				$(".show_flexslider").hide("slow");
				$(".close_flexslider").toggle("slow");
				$("#close_nav").show("slow");
				$("#header_nav").show("slow");
			});
});

var submit = document.getElementById('sign_in');
	

	submit.onclick = function(){
		var inputTypeUserName=document.getElementById("user_name").value;
		var inputTypePassword=document.getElementById("password").value;
	if(inputTypeUserName == "")
			{
				alert('Please Give The UserName');
				return false;
			}
	
	else if( inputTypePassword=="")
			{
				alert('Please Give The Password');
				return false;
			}
	
	else
			{
				alert('well Come Back');
				return true;
			}
	
	};

