var a= document.getElementById("el");
var b= document.getElementById("el2");
var c= document.getElementById("el3");
var d= document.getElementById("el4");
//above i made variables for my element IDś to reduce the amount of code I would need to type out.
// all of my nextImage functions are linked to certain divs in my html with the onClick attribute and ID
function nextImage(el){
if (a.src.match("images/no_color_eyes.jpg")){ 
		a.src= "images/final_eye_look.PNG"; 
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
		checkFaces();
	}else if (c.src.match("images/lip_color.PNG")){
		c.src= "images/lips.PNG";
	}
	
}


function refreshPage(){
    window.location.reload();
} 
//This function is what checks if the user completed the game in the correct way 
//and if itś correct it removes the opaque class and makes the key image clickable.
function checkFaces(){ 
	if (a.src.match("images/final_eye_look.png") && b.src.match("images/cheeks.jpg") && c.src.match("images/lip_color.PNG")){
		d.classList.remove("opaque");
}
}
