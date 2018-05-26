window.onload=function(){
	console.log("check");
	var arr=["yoni","yosi","david","stam"];
	var address=document.getElementById("address");
	console.log("check2");
	var button=document.getElementById;
	console.log("check3");
	button.onclick = function(){
	console.log("check3");
	// var arr=["yoni","yosi","david","stam"];
	// var address=document.getElementById("address");
	var i;
	for(i=0;i<4;i++){
		if (address==arr[i]){
			 document.getElementById("myForm").submit();
		}
		else{
			// document.getElementById("err").innerHTML = "you need to inter the propriate address";
			 document.getElementById("myForm").preventDefault();
			document.write("you need to inter");
		}	
	};
	

	};
};
	

	






