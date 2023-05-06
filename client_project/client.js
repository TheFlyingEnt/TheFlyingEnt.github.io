window.onscroll = function() {
    navBar()
};

var navbar = document.getElementById("newNavbar");
var sticky = navbar.offsetTop;

function navBar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}