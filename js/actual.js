$(function(){
	// banner
	(function(){
	$("#banner .tab li").eq(0).css("left","200px").css("zIndex",3).css("top","0px").css("height","240px");
	$("#banner .tab li").eq(1).css("left","400px").css("zIndex",2).css("top","20px").css("height","200px");
	$("#banner .tab li").eq(2).css("left","0px").css("zIndex",2).css("top","20px").css("height","200px");
	$("#banner .dot li").eq(0).html("○");
	var num=0;//当前的前一次的索引
	var nowNum=0;//当前的索引
	function tab1(){
		if(nowNum>num){
			num++;
			nextBtn();
		}else if(nowNum<num){
			num--;
			prevBtn();
		}else{
			return;
		}
	}

	function prevBtn(){
		var prev=num===0?$("#banner .tab li").length()-1:num-1;
		var next=num===$("#banner .tab li").length()-1?0:num+1;
		$("#banner .dot li").html("●");
		$("#banner .dot li").eq(nowNum).html("○");
		$("#banner .tab li").eq(num).animat({
			"attr":"left",
			"target":200,
			"type":0,
			"speed":90}).css("zIndex",4).css("top","0px").css("height","240px").addClass("active");
		$("#banner .tab li").eq(prev).css("left","0px").css("zIndex",3).css("top","20px").css("height","200px");
		$("#banner .tab li").eq(next).animat({
			"attr":"left",
			"target":400,
			"type":0,
			"speed":120,
			"fn":function(){tab1();}
		}).css("zIndex",3).css("top","20px").css("height","200px").removeClass("active");
	}
	
	function nextBtn(){ 
		var prev=num===0?$("#banner .tab li").length()-1:num-1;
		var next=num===$("#banner .tab li").length()-1?0:num+1;
		$("#banner .dot li").html("●");
		$("#banner .dot li").eq(nowNum).html("○");
		$("#banner .tab li").eq(num).animat({
			"attr":"left",
			"target":200,
			"type":0,
			"speed":90}).css("zIndex",4).css("top","0px").css("height","240px").addClass("active");
		$("#banner .tab li").eq(next).css("left","400px").css("zIndex",3).css("top","20px").css("height","200px");
		$("#banner .tab li").eq(prev).animat({
			"attr":"left",
			"target":0,
			"type":0,
			"speed":120,
			"fn":function(){
				tab1();
			}
		}).css("zIndex",3).css("top","20px").css("height","200px").removeClass("active");
	}
	$("#banner .dot li").click(function(){
		 nowNum=$(this).index();
		 tab1();
	});
	$("#banner .toggle").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
		num++;
		if(num===$("#banner .dot li").length()){
			num=0;
		}
		nowNum=num;
		nextBtn();
	},5000);
	});
	$("#banner .prev").click(function(){
		clearInterval(timer);
		num--;
		if(num===-1){
			num=$("#banner .dot li").length()-1;
		}
		nowNum=num;
		prevBtn();
	});
	$("#banner .showbg").hover(function(){
		$(this).css("background","rgba(255,255,255,0.5)");
		clearInterval(timer);
	},function(){
		$(this).css("background","rgba(255,255,255,0)");
		timer=setInterval(function(){
		num++;
		if(num===$("#banner .dot li").length()){
			num=0;
		}
		nowNum=num;
		nextBtn();
	},5000);

	});
	
	$("#banner .next").click(function(){
		clearInterval(timer);
		num++;
		if(num===$("#banner .dot li").length()){
			num=0;
		}
		nowNum=num;
		nextBtn();
	});

	var timer=null;
	timer=setInterval(function(){
		num++;
		if(num===$("#banner .dot li").length()){
			num=0;
		}
		nowNum=num;
		nextBtn();
	},5000);

	})();
	
	//teacher
	(function(){
	var teachNum=0;
	var move=null;
	$("#content .ad a").hover(function(){
		$(this.children[1]).css("transition","left 700ms").css("WebkitTransition","left 700ms").css("left","588px");
		
	},function(){
		$(this.children[1]).css("transition","none").css("WebkitTransition","none").css("left","-130px");
	});

	for(var i=0;i<$("#content .teacher-list li").length();i++){
		$("#content .teacher-list li").eq(i).css("left",i*300+"px");
	}
	$("#content .teacher-list li").hover(function(){
		$(this).css("top","0px").css("background","rgba(255,255,255,1)").css("height","440px");
		$(this.children[0].children[3]).show();
		$(this.children[0]).css("color","#000");
	},function(){
		$(this).css("top","190px").css("background","rgba(255,255,255,0)").css("height","400px");
		$(this.children[0].children[3]).hide();
		$(this.children[0]).css("color","#fff");
	});
	$("#content .dot li").click(function(){
		clearInterval(move);
		teachNum=$(this).index();
		teachTab();
	});
	move=setInterval(function(){
		teachNum++;
		if(teachNum===5)teachNum=0;
		teachTab();

	},5000);
	$("#content .move").hover(function(){
		clearInterval(move);
	},function(){
		move=setInterval(function(){
		teachNum++;
		if(teachNum===5)teachNum=0;
		teachTab();
	},5000);
	});
	function teachTab(){
		$("#content .teacher-list ul").animat({
			"attr":"left",
			"target":-teachNum*1200,
			"v":6
		});
		$("#content .dot li").html("○").css("color","#D1D1D1");
		$("#content .dot li").eq(teachNum).html("●").css("color","#fff");
	}
	})();

	var len=$("#case .case-tab li").length();
	var lenR=len/2;
	var lenL=len/2-1;
	$("#case .case-tab li").eq(0).css("left","200px").css("zIndex",lenR).opacity(100).css("display","block");
	//初始化
	//右边
	for(var i=1;i<lenR;i++){
		$("#case .case-tab li").eq(i).css("left",200+100*i+"px").opacity(100-20*i).css("zIndex",lenR-i).css("display","block");
	}
	//左边
	for(var j=len-1;j>lenL;j--){
		$("#case .case-tab li").eq(j).css("left",200-100*(len-j)+"px").opacity(100-20*(len-j)).css("zIndex",lenR-(len-j)).css("display","block");
	}

	for(var k=0;k<len-5;k++){
		$("#case .case-tab li").eq(k+3).css("display","none");
	}
	
	$(".min-block .move").hover(function(){
			$(this.children[1]).animat({
				"attr":"top",
				"target":32,
				"v":4
			});
		},function(){
			$(this.children[1]).animat({
				"attr":"top",
				"target":72,
				"v":4
			});
		});

});