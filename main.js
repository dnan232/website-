
/* function h*/
 function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  
document.getElementById("navbar").classList.toggle("change");
  
}
/* dark mode start*/

var icon = document.getElementById("moon");
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains ("dark-theme")){
      icon.src = "moon.png";
    }else{
      icon.src = "sun.png";
    }
  }
  
  
  
  
//*dark mode section end*/



/*hover animation start*/
ScrollReveal({
  reset: true,
  distance:'30px',
  duration: 1000,
  delay:100
});

ScrollReveal().reveal('.home-content,  .heading',{ origin:'top'});

ScrollReveal().reveal('.home-img,  .services-container, .portfolio-box,.Dream-box ,.contact from', { origin:'bottom'});

ScrollReveal().reveal('.home-content h1,  .about-img', { origin:'left'});

ScrollReveal().reveal('.home-content p, .contact', { origin:'bottom'});

//*hover animation End*/

//*auto typing*//
var typed = new Typed(".auto-text",{
  strings: ["Bad Student", "Very Bad"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});


var typed = new Typed(".auto-type",{
  strings: ["Hafiz Safi"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});

var typed = new Typed(".auto-typee",{
  strings: ["Me!"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});

var typed = new Typed(".auto-safi",{
  strings: ["SAFI"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});
var typed = new Typed(".auto-shop",{
  strings: ["Shop"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});

var typed = new Typed(".auto-services",{
  strings: ["Services"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});

var typed = new Typed(".auto-Project",{
  strings: ["Project"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});
var typed = new Typed(".auto-Me",{
  strings: ["Me!"],
  typeSpeed : 100,
  backSpeed : 100,
  loop :true,
});
