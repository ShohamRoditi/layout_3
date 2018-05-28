window.onload=function(){
	console.log("check2");
	var change=document.getElementById("change");
	console.log("check3");
	
	change.onclick = function(){
	console.log("check4");
	var arr=["yoni","yosi","david","stam"];
	var address=document.getElementById("address").value;;
	var i;
	for(i=0;i<4;i++){
		if (address==arr[i]){
			 document.getElementById("myForm").submit();
		}
		else{
			document.getElementById("error").innerHTML = "<h4>"+ "you need to inter the propriate address"+"<h4>";
			 document.getElementById("myForm").preventDefault();
			// document.write("you need to inter");
		}	
	};
	};
};
	

	






