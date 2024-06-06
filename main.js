var bigfontBtn = document.querySelector(".bigg");
var smallfontBtn = document.querySelector(".small");
var div = document.querySelector("div");

function bigfont(){
   div.classList.add("bigg");
   div.classList.remove("small");
}
function smallfont(){
    div.classList.add("small");
    div.classList.remove("bigg");
}
bigfontBtn.onclick = bigfont;
smallfontBtn.onclick = smallfont;