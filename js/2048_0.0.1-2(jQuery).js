$(function(){
	$(document).keydown(function(evt){ 
		var e = evt || window.event;
		var arr1 = new Array();
		arr1 = huoqu();
		switch(e.keyCode){
			case 37:
			moveLeft()
			arr1 = huoqu()
			console.log(arr1);
			//for(var i = 0;i < 4;i++){
				for(var j = 1;j < 4;j++){
					if(arr1[j] == arr1[j - 1]){
						arr1[j - 1] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j] = 0;
						$(".l").eq(j - 1).find("p").text(arr1[j - 1]);
						$(".l").eq(j).text("").removeClass("index");
					}
				}
			//}
			//for(var i = 0;i < 4;i++){
				for(var j = 5;j < 8;j++){
					if(arr1[j] == arr1[j - 1]){
						arr1[j - 1] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j] = 0;
						$(".l").eq(j - 1).find("p").text(arr1[j - 1]);
						$(".l").eq(j).text("").removeClass("index");
					}
				}
			//}
			//for(var i = 0;i < 4;i++){
				for(var j = 9;j < 12;j++){
					if(arr1[j] == arr1[j - 1]){
						arr1[j - 1] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j] = 0;
						$(".l").eq(j - 1).find("p").text(arr1[j - 1]);
						$(".l").eq(j).text("").removeClass("index");
					}
				}
			//}
			//for(var i = 0;i < 4;i++){
				for(var j = 13;j < 16;j++){
					if(arr1[j] == arr1[j - 1]){
						arr1[j - 1] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j] = 0;
						$(".l").eq(j - 1).find("p").text(arr1[j - 1]);
						$(".l").eq(j).text("").removeClass("index");
					}
				}
//			}
			moveLeft()
			arr1 = huoqu()
			createNum();break;
			case 38:
			moveTop()
			arr1 = huoqu()
//			for(var i = 0;i < 4;i++){
				for(var j = 0;j <= 12;j+=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j + 4] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j+4).text("").removeClass("index");									
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 1;j <= 13;j+=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j + 4] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j+4).text("").removeClass("index");									
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 2;j <= 14;j+=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j + 4] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j+4).text("").removeClass("index");									
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 3;j <= 15;j+=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j + 4] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j+4).text("").removeClass("index");									
					}
				}
//			}
			moveTop()
			arr1 = huoqu()
			createNum();break;
			case 39:
			moveRight()
			arr1 = huoqu()
//			for(var i = 0;i < 4;i++){
				for(var j = 3;j > 0;j--){
					if(arr1[j] == arr1[j - 1]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j - 1] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j -1).text("").removeClass("index");
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 7;j > 4;j--){
					if(arr1[j] == arr1[j - 1]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j - 1] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j - 1).text("").removeClass("index");
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 11;j > 8;j--){
					if(arr1[j] == arr1[j - 1]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j - 1] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j - 1).text("").removeClass("index");
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 15;j > 12;j--){
					if(arr1[j] == arr1[j - 1]){
						arr1[j] = parseInt(arr1[j]) + parseInt(arr1[j - 1]);
						arr1[j - 1] = 0;
						$(".l").eq(j).find("p").text(arr1[j]);
						$(".l").eq(j - 1).text("").removeClass("index");
					}
				}
//			}
			moveRight()
			arr1 = huoqu()
			createNum();break;
			case 40:
			moveBottom()
			arr1 = huoqu()
//			for(var i = 0;i < 4;i++){
				for(var j = 8;j >= 0;j-=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j + 4] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j] = 0;
						$(".l").eq(j+4).find("p").text(arr1[j+4]);
						$(".l").eq(j).text("").removeClass("index");									
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 9;j >= 1;j-=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j + 4] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j] = 0;
						$(".l").eq(j+4).find("p").text(arr1[j+4]);
						$(".l").eq(j).text("").removeClass("index");									
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 10;j >= 2;j-=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j + 4] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j] = 0;
						$(".l").eq(j+4).find("p").text(arr1[j+4]);
						$(".l").eq(j).text("").removeClass("index");									
					}
				}
//			}
//			for(var i = 0;i < 4;i++){
				for(var j = 11;j >= 3;j-=4){
					if(arr1[j] == arr1[j+4]){
						arr1[j + 4] = parseInt(arr1[j]) + parseInt(arr1[j + 4]);
						arr1[j] = 0;
						$(".l").eq(j+4).find("p").text(arr1[j+4]);
						$(".l").eq(j).text("").removeClass("index");									
					}
				}
//			}
			moveBottom()
			arr1 = huoqu()
			createNum();break;
		}					
	});
})
function createNum(){
	var arr = [2,4,8];
	var n = Math.floor(Math.random()*3);
	var length = $(".l").size();
	var m = Math.floor(Math.random()*16);
	var str = "";
	var flag = false;
	for(var i = 0;i < length;i++){
		if(!($(".l").eq(i).hasClass("index"))){
			flag = true;
		}
	}
	if(flag){
		if($(".l").eq(m).hasClass("index")){
			createNum();
		}else{
			$(".l").eq(m).append("<p>"+arr[n]+"</p>");
			$(".l").eq(m).addClass("index");
			$(".l").eq(m).find("p").css("background","chartreuse");					
		}	
	}else{
		alert("游戏结束，请重新开始！");
		for(var j = 0;j < length;j++){
			$(".l").eq(j).text("").removeClass("index");
		}
		if(!localStorage.getItem("score")){
			localStorage.setItem("score",0);
		}
		
		var cur = parseInt($("#score").text());
		var jilu = parseInt(localStorage.getItem("score"));
		if(cur > jilu){
			localStorage.setItem("score",cur);
			$(".jilu").html("您的历史最高记录是："+cur+"分");
		}else{
			localStorage.setItem("score",jilu);
			$(".jilu").html("您的历史最高记录是："+jilu+"分");
		}
	}
	score();
	
}
function score(){
	var length = $(".l").size();
	var sum = 0;
	for(var j = 0;j < length;j++){
		var num = parseInt($(".l").eq(j).text());
		if(!isNaN(num)){
			sum += num;
		}
		
	}
	$("#score").text(sum);
}
function huoqu(){
	var arr1 = [$(".line1_1").text(),$(".line1_2").text(),$(".line1_3").text(),$(".line1_4").text(),$(".line2_1").text(),$(".line2_2").text(),$(".line2_3").text(),$(".line2_4").text(),$(".line3_1").text(),$(".line3_2").text(),$(".line3_3").text(),$(".line3_4").text(),$(".line4_1").text(),$(".line4_2").text(),$(".line4_3").text(),$(".line4_4").text()];
	return arr1;
}
function moveLeft(){
	for(var i = 0;i < 4;i++){
		for(var j = 1;j <= 3;j++){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 1));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 5;j <= 7;j++){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 1));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 9;j <= 11;j++){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 1));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 13;j <= 15;j++){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 1));
			}
		}
	}
}

function moveTop(){
	for(var i = 0;i < 4;i++){
		for(var j = 4;j <= 12;j+=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 4));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 5;j <= 13;j+=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 4));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 6;j <= 14;j+=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 4));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 7;j <= 15;j+=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j - 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j - 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j - 4));
			}
		}
	}
}

function moveRight(){
	for(var i = 0;i < 4;i++){
		for(var j = 2;j >= 0;j--){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 1));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 6;j >= 4;j--){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 1));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 10;j >= 8;j--){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 1));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 14;j >= 12;j--){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 1).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 1).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 1));
			}
		}
	}
}

function moveBottom(){
	for(var i = 0;i < 4;i++){
		for(var j = 8;j >= 0;j-=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 4));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 9;j >= 1;j-=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 4));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 10;j >= 2;j-=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 4));
			}
		}
	}
	for(var i = 0;i < 4;i++){
		for(var j = 11;j >= 3;j-=4){
			if($(".l").eq(j).hasClass("index")&&(!($(".l").eq(j + 4).hasClass("index")))){
				$(".l").eq(j).removeClass("index");
				$(".l").eq(j + 4).addClass("index");
				$(".l").eq(j).find("p").appendTo($(".l").eq(j + 4));
			}
		}
	}
}









