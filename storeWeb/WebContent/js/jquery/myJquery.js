$(document).ready(
	function(){
		$(".myNav-list a").on("click", function() {
		      $(".myNav-list a").removeClass("active");
		      $(this).addClass("active");
		});
});