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
}
console.log(home);

// scroll
const mouse = document.querySelector('.mouse');
window.addEventListener('scroll',() => {
    console.log('scroll');
});

//QUIZZ
// var countChecked = function() {
//     var n = $( "input:checked" ).length;
//     $( ".score" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
//   };
//   countChecked();
   
//   $( "input[type=checkbox]" ).on( "click", countChecked );

