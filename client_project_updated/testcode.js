
// This will give random quotes for the Quran

/*

Help one another in acts of piety and righteousness. And do not assist each other in acts of sinfulness and transgression. And be aware of Allah. Verily, Allah is severe in punishment” (Quran 5:2)





*/



/*Nav Bar*/
function topNav() {
    var x = document.getElementById("newNavbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  /* This is Code for the Board Members */



window.onload = function () {
    document.getElementById("boardMemberRole").innerHTML = "President";
    document.getElementById("boardMemberName").innerHTML = "Nabeel S. Khan";
    document.getElementById("boardMemberQuote").innerHTML = '"#Build Your Legacy"'
    document.getElementById("boardMemberAbout").innerHTML = "About Me Text"
    document.getElementById("boardMemberImage").innerHTML = "Image URL"
}


function rolePresident() {
    document.getElementById("boardMemberRole").innerHTML = "President";
    document.getElementById("boardMemberName").innerHTML = "Nabeel S. Khan";
    document.getElementById("boardMemberQuote").innerHTML = "#Build Your Legacy"
    document.getElementById("boardMemberAbout").innerHTML = "About Me Text"
    document.getElementById("boardMemberImage").innerHTML = "Image URL"
}



/* Slide Show */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}