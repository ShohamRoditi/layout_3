(function (){
	var i;
	for(i=0;i<4;i++){
		var newObj = document.createElement("article");
		var formObj = document.getElementById("sec");
 		formObj.appendChild(newObj);
	}
		
 
 		// newObj.className ="box";
		
	var opacity_element= newObj.style.opacity; // save the original opacity of the elements
 		
	newObj.addEventListener("onmouseover", function(){
    	newObj.style.opacity = Math.random();
		 });

	newObj.addEventListener("onmouseout", function(){
    	newObj.style.opacity = opacity_element;
		 });
	
})();

//var plus = document.getElementById("button");
//var.onclick=function(){
	//makebox;
	

