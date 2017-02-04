$(function(){
	
	//banner
	(function(){
		$("#banner .next").hover(function(){
			$("#banner .next-bg").opacity(50);
		},function(){
			$("#banner .next-bg").opacity(0);
		});
		$("#banner .prev").hover(function(){
			$("#banner .prev-bg").opacity(50);
		},function(){
			$("#banner .prev-bg").opacity(0);
		});
		var num=0;
		var prevIndex=0;
		var timer=null;
		$("#banner .image a").eq(0).opacity(100);
		$("#banner .dot li").eq(0).html("●");
		//圆点点击
		$("#banner .dot li").click(function(){
			if(prevIndex==$(this).index()){return;}
			previousIndex(prevIndex);
			nowIndex($(this).index());
			prevIndex=$(this).index();
		});
		//前一页
		$("#banner .prev").click(function(){
			previousIndex(prevIndex);
			prevIndex-=1;
			if(prevIndex==-1){
				prevIndex=$("#banner .image a").length()-1;
			}
			nowIndex(prevIndex);
		});
		//后一页
		$("#banner .next").click(autoPlay);
		timer=setInterval(autoPlay,4000);
		$("#banner").hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(autoPlay,4000);
		});

		function nowIndex(index){
			$("#banner .dot li").eq(index).html("●");
			$("#banner .image a").eq(index).animat({
				"attr":"opacity",
				"target":100
			});
		}
		function previousIndex(index){
			$("#banner .dot li").html("○");
			$("#banner .image a").eq(index).animat({
				"attr":"opacity",
				"target":0
			});
		}
		function autoPlay(){
			previousIndex(prevIndex);
			prevIndex+=1;
			if(prevIndex==$("#banner .image a").length()){
				prevIndex=0;
			}
			nowIndex(prevIndex);
		}

		//detail
		$("#banner .nav li").hover(function(){
			$("#banner .same-out").eq($(this).index()).css("display","block");
		},function(){
			$("#banner .same-out").eq($(this).index()).css("display","none");
		});
		$("#banner .same-out").hover(function(){
			$(this).css("display","block");
		},function(){
			$(this).css("display","none");
		});
		$("#banner .course a").hover(function(){
			$(this.children[1]).css("color","red");
		},function(){
			$(this.children[1]).css("color","#000");
		});
	})();


	
});
