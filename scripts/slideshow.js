
/* 
Render 3
Render 2
SPOILER_beamy_render
SPOILER_blastrender3
SPOILER_mk_render
SPOILER_Logo_Crimson_RZRVarient
Velvet
Logo_Crimson_Halloween_(Damaged)
unknown3
*/

function nextSlide(n){
    var get = document.getElementById('slideshow_main');
    console.log(get);
    if (get.src.match("images/slideshow/Render3.png")){
        get.src = "images/slideshow/Render2.png";
        console.log("Image 2");
    }
    else if (get.src.match("images/slideshow/Render2.png"))
    {
        get.src = "images/slideshow/SPOILER_beamy_render.png";
        console.log("Image 3");
    }
    else if (get.src.match("images/slideshow/SPOILER_beamy_render.png"))
    {
        get.src = "images/slideshow/SPOILER_blastrender3.png";
    }
    else if (get.src.match("images/slideshow/SPOILER_blastrender3.png"))
    {
        get.src = "images/slideshow/SPOILER_mk_render.png";
    }
    else if (get.src.match("images/slideshow/SPOILER_mk_render.png"))
    {
        get.src = "images/slideshow/SPOILER_Logo_Crimson_RZRVarient.png";
    }
    else if (get.src.match("images/slideshow/SPOILER_Logo_Crimson_RZRVarient.png"))
    {
        get.src = "images/slideshow/Velvet.png";
    }
    else if (get.src.match("images/slideshow/Velvet.png"))
    {
        get.src = "images/slideshow/Logo_Crimson_Halloween_(Damaged).png";
    }
    else if (get.src.match("images/slideshow/Logo_Crimson_Halloween_(Damaged).png"))
    {
        get.src = "images/slideshow/unknown3.png";
    }
    else if (get.src.match("images/slideshow/unknown3.png"))
    {
        get.src = "images/slideshow/Render2.png";
    }
    else {
        get.src = "images/slideshow/Render3.png";
        console.log("ERROR");
    }


}


/* 
Render 3
Render 2
SPOILER_beamy_render
SPOILER_blastrender3
SPOILER_mk_render
SPOILER_Logo_Crimson_RZRVarient
Velvet
Logo_Crimson_Halloween_(Damaged)
unknown3
*/

function backSlide(n){
    var get = document.getElementById('slideshow_main');
    console.log(get);
    if (get.src.match("images/slideshow/Render3.png")){
        get.src = "images/slideshow/unknown3.png";
        console.log("Image 2");
    }
    else if (get.src.match("images/slideshow/Render2.png"))
    {
        get.src = "images/slideshow/Render3.png";
        console.log("Image 3");
    }
    else if (get.src.match("images/slideshow/SPOILER_beamy_render.png"))
    {
        get.src = "images/slideshow/Render2.png";
    }
    else if (get.src.match("images/slideshow/SPOILER_blastrender3.png"))
    {
        get.src = "images/slideshow/SPOILER_beamy_render.png";
    }
    else if (get.src.match("images/slideshow/SPOILER_mk_render.png"))
    {
        get.src = "images/slideshow/SPOILER_blastrender3.png";
    }
    else if (get.src.match("images/slideshow/SPOILER_Logo_Crimson_RZRVarient.png"))
    {
        get.src = "images/slideshow/SPOILER_mk_render.png";
    }
    else if (get.src.match("images/slideshow/Velvet.png"))
    {
        get.src = "images/slideshow/SPOILER_Logo_Crimson_RZRVarient.png";
    }
    else if (get.src.match("images/slideshow/Logo_Crimson_Halloween_(Damaged).png"))
    {
        get.src = "images/slideshow/Velvet.png";
    }
    else if (get.src.match("images/slideshow/unknown3.png"))
    {
        get.src = "images/slideshow/Logo_Crimson_Halloween_(Damaged).png";
    }
    else {
        get.src = "images/slideshow/Render3.png";
        console.log("ERROR");
    }


}