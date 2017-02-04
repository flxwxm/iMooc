$(function(){
	$("#banner .min-block .move").hover(function(){
			$("#banner .min-block .introduce").animat({
				"attr":"top",
				"target":48,
				"v":4
			});
		},function(){
			$("#banner .min-block .introduce").animat({
				"attr":"top",
				"target":108,
				"v":4
			});
		});
		if(parseInt(window.sys.ie)<=9){
			$(".min-block .introduce").css("backgroundColor","#fff");
		}

});
