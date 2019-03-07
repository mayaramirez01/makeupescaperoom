var a= document.getElementById("el");
var b= document.getElementById("el2");
var c= document.getElementById("el3");
var d= document.getElementById("el");
function nextImage(el){
if (a.src.match("images/no_color_eyes.jpg")){ 
		a.src= "images/final_eye_look.png"; 
	}else if (a.src.match("images/final_eye_look.png")){
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
		c.src= "images/lip_color.PNG"; 
	}else if (c.src.match("images/lip_color.PNG")){
		c.src= "images/lips.PNG";
	}
	
}
function nextImage4(el){
if (d.src.match("images/no_color_eyes.jpg")){ 
		d.src= "images/eyes_color_one.png"; 
	}else if (d.src.match("images/eyes_color_one.png")){
		d.src= "images/no_color_eyes.jpg";
	}
	
}

function refreshPage(){
    window.location.reload();
} 
