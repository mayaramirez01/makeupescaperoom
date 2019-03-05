var a= document.getElementById("el");
var b= document.getElementById("el2");
var c= document.getElementById("el3");
function nextImage(el){
if (a.src.match("images/no_color_eyes.jpg")){ 
		a.src= "images/eye_color_four.png"; 
	}else if (a.src.match("images/eye_color_four.png")){
		a.src= "images/no_color_eyes.jpg";
	}
	
}

function nextImage2(el){
if (b.src.match("images/bare_cheek.jpg")){ 
		b.src= "images/cheeks.jpg"; 
	}else if (b.src.match("images/cheeks.jpg")){
		b.src= "images/bare_cheek.jpg";
	}
	
}

function nextImage3(el){
if (c.src.match("images/lips.PNG")){ 
		c.src= "images/lip_color.png"; 
	}else if (c.src.match("images/lip_color.png")){
		c.src= "images/lips.PNG";
	}
	
}