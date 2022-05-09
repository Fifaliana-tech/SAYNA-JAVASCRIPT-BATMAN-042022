"use strict"
// $(document).ready(function(){
//     //$('article.popular h1').css({fontFamily:'Verdana',color:'red'});
//     //$('h1, p').css({fontFamily:'Verdana',color:'red'});
//     // let allArticles = $('article');
//     // $('h2').css({fontFamily:'Verdana',color:'red'});
//     window.addEventListener('scroll',() => {
//     $(".contain2").fadeIn(6000);
//     });
//     // jQuery("h2").animate({left:0, opacity:1},6000);
// });

var home = document.getElementById('home');
var game = document.getElementById('game');

function menu(clicked_id){
    if(clicked_id === "home"){
        home.style.textDecoration = 'underline';
        home.style.cursor = 'pointer';
        home.style.fontWeight = '800';
        game.style.fontWeight = '100';
        game.style.textDecoration = 'none';
        console.log('clicH');
    } else {
        game.style.textDecoration = 'underline';
        game.style.cursor = 'pointer';
        game.style.fontWeight = '800';
        home.style.fontWeight = '100';
        home.style.textDecoration = 'none';
        console.log('clicG');
    }
};
console.log(home);

// scroll
const mouse = document.querySelector('.mouse');
const mouseOffsetTop = mouse.offsetTop;

window.addEventListener('scroll',() => {
   if(window.scrollY > mouseOffsetTop){
       mouse.style.position = 'fixed';
   } 
});
//Cards spiderman au cinema
// var figure = document.getElementsByClassName("figure");
// var textImgContain1 = document.querySelector(".text-img-contain1");
// var textImgContain2 = document.querySelector(".text-img-contain2");
// var textImgContain3 = document.querySelector(".text-img-contain3");

//QUIZZ
// var countChecked = function() {
//     var n = $( "input:checked" ).length;
//     $( ".score" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
//   };
//   countChecked();
   
//   $( "input[type=checkbox]" ).on( "click", countChecked );

//Cards spiderman au cinema
var figure = document.getElementsByClassName("figure");
var textImgContain1 = document.querySelector(".text-img-contain1");
var textImgContain2 = document.querySelector(".text-img-contain2");
var textImgContain3 = document.querySelector(".text-img-contain3");
var img1 = document.querySelector('#card1');
var img2 = document.querySelector('#card2');
var img3 = document.querySelector('#card3');

function showDescription(clicked_id){
    if(clicked_id == "card1"){
        img1.style.width = "100%";
        textImgContain1.style.display = "block";
        console.log("bonjour card1");
    }
    if(clicked_id == "card2"){
        img2.style.width = "100%";
        textImgContain2.style.display = "block";
        console.log("bonjour card2");
    }
    if(clicked_id == "card3"){
        img3.style.width = "100%";
        textImgContain3.style.display = "block";
        console.log("bonjour card3");
    }    
};
function hideDescription(clicked_id){
    if(clicked_id == "card1"){
        img1.style.width = "80%";
        textImgContain1.style.display = "none";
        console.log("bonjour card1");
    }
    if(clicked_id == "card2"){
        img2.style.width = "80%";
        textImgContain2.style.display = "none";
        console.log("bonjour card2");
    }
    if(clicked_id == "card3"){
        img3.style.width = "80%";
        textImgContain3.style.display = "none";
        console.log("bonjour card3");
    }    
};
// slide
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("img-slide");
  console.log(slides.length);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
 }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();

//Multimédia
// window.addEventListener('scroll',() => {
//     let slideIndex = 1;
//     showSlides(slideIndex);
    
//     function plusSlides(n) {
//       showSlides(slideIndex += n);
//     }
    
//     function currentSlide(n) {
//       showSlides(slideIndex = n);
//     }
    
//     function showSlides(n) {
//       let i;
//       let slides = document.getElementsByClassName("mySlides");
//       let dots = document.getElementsByClassName("dot");
//       if (n > slides.length) {slideIndex = 1}    
//       if (n < 1) {slideIndex = slides.length}
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";  
//       dots[slideIndex-1].className += " active";
//     }
// });
// BANDE ANNONCE
var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} ;
