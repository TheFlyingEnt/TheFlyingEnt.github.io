const pageOne = document.getElementById("page1");
const pageTwo = document.getElementById("page2");
const pageThree = document.getElementById("page3");
const pageFour = document.getElementById("page4");
const pageFive = document.getElementById("page5");
const pageSix = document.getElementById("page6");

function pageOneLoad() {
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageTwoLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageThreeLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "block";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageFourLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "block";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageFiveLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "block";
    pageSix.style.display = "none";
}

function pageSixLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "block";
}


window.onload = function () {
  pageOneLoad();


}



/*Slideshow*/

let slideIndex = 1;
showSlides(slideIndex);

function backSlides() {
  showSlides(slideIndex -= 1);
}

function fowardSlides() {
    showSlides(slideIndex += 1);
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

