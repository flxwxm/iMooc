$(function(){
	//搜索框
	$("#header .search input").on("focus",function(){
		$("#header .search a").css("display","none");
	});
	$("#header .search input").on("blur",function(){
		$("#header .search a").css("display","block");
	});
	//登陆、注册
	(function(){
		var popUp=$("#pop-up"),
			login=$("#pop-up .login"),
			reg=$("#pop-up .reg"),
			btnLogin=$("#pop-up .header span").eq(0),
			btnReg=$("#pop-up .header span").eq(1);
		popUp.css("height",document.documentElement.offsetHeight+"px");
		$("#header .reg-list a").eq(1).click(function(){
			popUp.show();
			$("#pop-up .pop-cotent").center();
			tagTab1();
		});
		$("#header .reg-list a").eq(2).click(function(){
			popUp.show();
			$("#pop-up .pop-cotent").center();
			tagTab2();
		});
		$("#pop-up .header strong").click(function(){
			popUp.hide();
		});
		btnLogin.click(function(){
			if(this.className=="focus"){
				return;
			}else{
				tagTab1();
			}

		});
		$("#pop-up .header span").eq(1).click(function(){
			if(this.className=="focus"){
				return;
			}else{
				tagTab2();
			}

		});
		function tagTab1(){
			btnLogin.addClass("focus");
			btnReg.removeClass("focus");
			login.css("display","block");
			reg.css("display","none");
		}
		function tagTab2(){
			btnReg.addClass("focus");
			btnLogin.removeClass("focus");
			login.css("display","none");
			reg.css("display","block");
		}
		//按钮图标动画
		$("#pop-up button").hover(function(){
			$(this).animat({
				"attr":"opacity",
				"target":60,
				"v":3,
				"time":30
			});
		},function(){
			$(this).animat({
				"attr":"opacity",
				"target":100,
				"v":3,
				"time":30
			});
		});
		$("#pop-up .other span").hover(function(){
			$(this).css("color","blue");
			$(this).animat({
				"attr":"opacity",
				"target":100,
				"v":3,
				"time":30
			});
		},function(){
			$(this).css("color","#797979");
			$(this).animat({
				"attr":"opacity",
				"target":50,
				"v":3,
				"time":30
			});
		});
		
		//验证
		$("#pop-up .same input").on("keypress",function(){
			$(this).prev().text("");
		});
		//用户名
		$("#pop-up .login-user input").on("blur",function(){
			var test=checkUser();
			if(!test){
				$("#pop-up .login-user p").css("display","block");
			}else{
				$("#pop-up .login-user p").css("display","none");
			}
		});
		$("#pop-up .reg-user input").on("blur",function(){
			var test=checkUser();
			if(!test){
				$("#pop-up .reg-user p").css("display","block");
			}else{
				$("#pop-up .reg-user p").css("display","none");
			}
		});
		//密码
		$("#pop-up .login-pass input").on("blur",function(){
			var test=checkPass();
			if(!test){
				$("#pop-up .login-pass p").css("display","block");
			}else{
				$("#pop-up .login-pass p").css("display","none");
			}
		});
		//验证码
		$("#pop-up .reg-verify input").on("blur",function(){
			var test=checkVerify();
			if(!test){
				$("#pop-up .reg-verify p").css("display","block");
			}else{
				$("#pop-up .reg-verify p").css("display","none");
			}
		});
		//用户名验证
		function checkUser(){
			var value=trim($("#pop-up .login-user input").value());
			if(/^1[358][\d]{9}$/.test(value)){
				return true;
			}else if(/^[\d]{9,11}@qq\.com$/.test(value)){
				return true;
			}else if(/^[a-zA-Z][\w]{5,17}@(163)|(126)|(yeah)\.(com)|(net)$/.test(value)){
				return true;
			}else if(/^[a-z][\w]{3,15}@sohu\.com$/.test(value)){
				return true;
			}else if(/^[a-zA-Z\d][\w]{2,14}[a-zA-Z\d]@sina\.(com)|(cn)$/.test(value)){
				return true;
			}else if(/^1[358][\d]{9}@(sina)|(sohu)|(163)|(126)|(139)|(189)\.(com)|(cn)$/.test(value)){
				return true;
			}else{
				return false;
			}
		}

		//密码验证
		function checkPass(){
			var value=$("#pop-up .login-pass input").value();
			if(/^[\w\-]{6,16}$/.test(value)){
				return true;
			}else{
				return false;
			}
		}

		//密码验证
		function checkVerify(){
			var value=$("#pop-up .reg-verify input").value();
			if(/^[\da-zA-Z]{4}$/.test(value)){
				return true;
			}else{
				return false;
			}
		}
	})();
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
		if(parseInt(window.sys.ie)<=9){
			$(".min-block .introduce").css("backgroundColor","#fff");
		}

		// side
		$(window).on("scroll",function(){
			if(getScroll().top>=530){
				$("#side .up").show();
			}else{
				$("#side .up").hide();
			}
		});
		$("#side .up").click(function(){
			var e=getDocument();
			$(e).animat({
				"attr":"scrollTop",
				"target":0,
				"v":5,
				"time":30
			});
		});
});