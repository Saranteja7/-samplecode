var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
 	if (window.scrollY >= sticky) {
  		navbar.classList.add("sticky")
 	} else {
  		navbar.classList.remove("sticky");
 	}
}			
var myIndex = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
	   x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 3000); // Change image every 2 seconds
}




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    count=count+1;
}

function validate_pass(){

				pass = document.getElementById("pw");
				cpass = document.getElementById("cpw");

				if(pass.value != cpass.value){

					document.getElementById("cpw").style.border = "1px solid red";
					document.getElementById("pw").focus();
				}else{
					document.getElementById("cpw").style.border = "none";
				}
}
function	emo() {
				document.getElementById("hello").style.display="block";
			}