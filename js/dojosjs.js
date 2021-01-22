console.log("Go Chuck !");

let ctn_pouce = document.querySelector("aside");
let pouce = document.querySelector("aside > div");

pouce.addEventListener("mouseenter", function( event ) {

  event.target.style.borderRadius = "0%";
  ctn_pouce.style.backgroundColor = "#ffb347";

  /* setTimeout(function() {
    event.target.style.color = "";
  }, 500);*/
}, false);


pouce.addEventListener("mouseout", function( event ) {

  event.target.style.borderRadius = "50%";
  ctn_pouce.style.backgroundColor = "#ff4d01";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


let volet = document.querySelector("article");
let cntenu = document.querySelector("article > div");

volet.addEventListener("click", function( event ) {
    event.target.nextElementSibling.style.visibility = "visible";
    ctenu.nextElementSibling.style.visibility = "visible";
    ctn_pouce.style.backgroundColor = "red";
    /*setTimeout(function() {
      event.target.style.color = "";
    }, 500);*/
  }, false); 

//.nextElementSibling.innerHTML;

/*  
let ctn_pouce = document.getElementsByTagName("aside")[0];
let pouce = document.getElementsByTagName("aside")[0].nextElementSibling;
*/

