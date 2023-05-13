

/* JQuerry */

$(document).ready(function(){

  $("#whatsapp").click(function(){
      window.open("https://chat.whatsapp.com/IPL6MtAq4E8AokIFfGZB79", "_blank")
  });

  $("#instagram").click(function(){
    window.open("https://www.instagram.com/msa_uncc/?hl=en", "_blank")
  });

  $("#mail").click(function(){
    window.open("mailto:msa.uncc@gmail.com", "_blank")
  });

  $("#whatsapp").hover(function(){
    $(this).css("background-color", "#25D366");
    }, function(){
    $(this).css("background-color", "#f1f1f1");
  });

  $("#instagram").hover(function(){
    $(this).css("background-color", "#c32aa3");
    }, function(){
    $(this).css("background-color", "#f1f1f1");
  });

  $("#mail").hover(function(){
    $(this).css("background-color", "#0072C6");
    }, function(){
    $(this).css("background-color", "#f1f1f1");
  });

  $("#slider").bxSlider({
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 500,
    slideMargin: 22,
    randomStart: true,
    moveSlides: 1,
    captions: true,
    speed: 2500,
    pagerType: 'short',
    pause: 3000,
});


});



/* Footer Code */

document.addEventListener("DOMContentLoaded", function() {
  var footer = document.createElement("footer");

  footer.innerHTML = `
  <p class="message-paragraph" style="font-size: 90%; text-align: center;">
    Website was Designed by Nihal Mohammed
    <br>
    <br>
    <a href="https://validator.w3.org/check?uri=referer">
      <img src="images/button-valid-html5.gif" width="88" height="31" alt="Validate webpage HTML.">
    </a>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
      <img src="images/valid-css.png" width="88" height="31" alt="Validate webpage CSS.">
    </a>
  </p>
  `;

  document.body.appendChild(footer);
});  