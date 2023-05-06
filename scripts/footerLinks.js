document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
  
    footer.innerHTML = `
    <nav>
    <a href="https://webpages.uncc.edu/nmohamm8/" target="_blank">UNCC Home</a> || <a href="https://github.com/TheFlyingEnt/" target="_blank">Github</a> || <a href="TheFlyingEnt.github.io" target="_blank">Github.io</a> || <a href="https://www.freecodecamp.org/nmohamm8-noicemonke" target="_blank">FreeCodeCamp</a> || <a href="https://www.codecademy.com/profiles/nmohamm8-noicemonke" target="_blank">CodeAcademy</a> || <a href="https://www.linkedin.com/in/nmohammed2/" target="_blank">LinkedIn</a> ||
</nav>
<br>Designed by EntWorks Design © 1984... . <p>
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