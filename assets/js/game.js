//AU NIVEAU DE CHAQUE QUESTION DU QUIZZ
//1ère fonction : un seul choix

function myFunction() {
    document.getElementById("layer").style.display = "none";
}
myFunction();

// QUESTION N°1
let choix11 = document.querySelector('.question1 #choix1');
let choix21 = document.querySelector('.question1 #choix2');
let choix31 = document.querySelector('.question1 #choix3');
choix11.checked = false;
choix21.checked = false;
choix31.checked = false;
var note1 = null;
function question1(clicked_id){
    
    if(clicked_id === "choix1"){
        note1 = 1;
        choix11.checked = true;
        choix21.checked = false;
        choix31.checked = false;
        console.log(`question 1 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note1 = 0;
        choix21.checked = true;
        choix11.checked = false;
        choix31.checked = false;
        console.log(`question 1 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note1 = 0;
        choix31.checked = true;
        choix11.checked = false;
        choix21.checked = false;
        console.log(`question 1 => réponse 3`);
    }

    console.log(note1);
}
question1();

// QUESTION N°2
let choix12 = document.querySelector('.question2 #choix1');
let choix22 = document.querySelector('.question2 #choix2');
let choix32 = document.querySelector('.question2 #choix3');
choix12.checked = false;
choix22.checked = false;
choix32.checked = false;
var note2 = null;
function question2(clicked_id){
    
    if(clicked_id === "choix1"){
        note2 = 0;
        choix12.checked = true;
        choix22.checked = false;
        choix32.checked = false;
        console.log(`question 2 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note2 = 1;
        choix22.checked = true;
        choix12.checked = false;
        choix32.checked = false;
        console.log(`question 2 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note2 = 0;
        choix32.checked = true;
        choix12.checked = false;
        choix22.checked = false;
        console.log(`question 2 => réponse 3`);
    }

    console.log(note2);
}
question2();

// QUESTION N°3
let choix13 = document.querySelector('.question3 #choix1');
let choix23 = document.querySelector('.question3 #choix2');
let choix33 = document.querySelector('.question3 #choix3');
choix13.checked = false;
choix23.checked = false;
choix33.checked = false;
var note3 = null;
function question3(clicked_id){
    
    if(clicked_id === "choix1"){
        note3 = 0;
        choix13.checked = true;
        choix23.checked = false;
        choix33.checked = false;
        console.log(`question 3 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note3 = 0;
        choix23.checked = true;
        choix13.checked = false;
        choix33.checked = false;
        console.log(`question 3 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note3 = 1;
        choix33.checked = true;
        choix13.checked = false;
        choix23.checked = false;
        console.log(`question 3 => réponse 3`);
    }

    console.log(note3);
}
question3();

// QUESTION N°4
let choix14 = document.querySelector('.question4 #choix1');
let choix24 = document.querySelector('.question4 #choix2');
let choix34 = document.querySelector('.question4 #choix3');
choix14.checked = false;
choix24.checked = false;
choix34.checked = false;
var note4 = null;
function question4(clicked_id){
    
    if(clicked_id === "choix1"){
        note4 = 0;
        choix14.checked = true;
        choix24.checked = false;
        choix34.checked = false;
        console.log(`question 4 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note4 = 0;
        choix24.checked = true;
        choix14.checked = false;
        choix34.checked = false;
        console.log(`question 4 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note4 = 1;
        choix34.checked = true;
        choix14.checked = false;
        choix24.checked = false;
        console.log(`question 4 => réponse 3`);
    }

    console.log(note4);
}
question4();

// QUESTION N°5
let choix15 = document.querySelector('.question5 #choix1');
let choix25 = document.querySelector('.question5 #choix2');
let choix35 = document.querySelector('.question5 #choix3');
choix15.checked = false;
choix25.checked = false;
choix35.checked = false;
var note5 = null;
function question5(clicked_id){
    
    if(clicked_id === "choix1"){
        note5 = 0;
        choix15.checked = true;
        choix25.checked = false;
        choix35.checked = false;
        console.log(`question 5 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note5 = 0;
        choix25.checked = true;
        choix15.checked = false;
        choix35.checked = false;
        console.log(`question 5 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note5 = 1;
        choix35.checked = true;
        choix15.checked = false;
        choix25.checked = false;
        console.log(`question 5 => réponse 3`);
    }

    console.log(note5);
}
question5();

// QUESTION N°6
let choix16 = document.querySelector('.question6 #choix1');
let choix26 = document.querySelector('.question6 #choix2');
let choix36 = document.querySelector('.question6 #choix3');
choix16.checked = false;
choix26.checked = false;
choix36.checked = false;
var note6 = null;
function question6(clicked_id){
    
    if(clicked_id === "choix1"){
        note6 = 0;
        choix16.checked = true;
        choix26.checked = false;
        choix36.checked = false;
        console.log(`question 6 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note6 = 1;
        choix26.checked = true;
        choix16.checked = false;
        choix36.checked = false;
        console.log(`question 6 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note6 = 0;
        choix36.checked = true;
        choix16.checked = false;
        choix26.checked = false;
        console.log(`question 6 => réponse 3`);
    }

    console.log(note6);
}
question6();

// QUESTION N°7
let choix17 = document.querySelector('.question7 #choix1');
let choix27 = document.querySelector('.question7 #choix2');
let choix37 = document.querySelector('.question7 #choix3');
choix17.checked = false;
choix27.checked = false;
choix37.checked = false;
var note7 = null;
function question7(clicked_id){
    
    if(clicked_id === "choix1"){
        note7 = 0;
        choix17.checked = true;
        choix27.checked = false;
        choix37.checked = false;
        console.log(`question 7 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note7 = 0;
        choix27.checked = true;
        choix17.checked = false;
        choix37.checked = false;
        console.log(`question 7 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note7 = 1;
        choix37.checked = true;
        choix17.checked = false;
        choix27.checked = false;
        console.log(`question 7 => réponse 3`);
    }

    console.log(note7);
}
question7();

// QUESTION N°8
let choix18 = document.querySelector('.question8 #choix1');
let choix28 = document.querySelector('.question8 #choix2');
let choix38 = document.querySelector('.question8 #choix3');
choix18.checked = false;
choix28.checked = false;
choix38.checked = false;
var note8 = null;
function question8(clicked_id){
    
    if(clicked_id === "choix1"){
        note8 = 0;
        choix18.checked = true;
        choix28.checked = false;
        choix38.checked = false;
        console.log(`question 8 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note8 = 1;
        choix28.checked = true;
        choix18.checked = false;
        choix38.checked = false;
        console.log(`question 8 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note8 = 0;
        choix38.checked = true;
        choix18.checked = false;
        choix28.checked = false;
        console.log(`question 8 => réponse 3`);
    }

    console.log(note8);
}
question8();

// QUESTION N°9
let choix19 = document.querySelector('.question9 #choix1');
let choix29 = document.querySelector('.question9 #choix2');
let choix39 = document.querySelector('.question9 #choix3');
choix19.checked = false;
choix29.checked = false;
choix39.checked = false;
var note9 = null;
function question9(clicked_id){
    
    if(clicked_id === "choix1"){
        note9 = 0;
        choix19.checked = true;
        choix29.checked = false;
        choix39.checked = false;
        console.log(`question 9 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note9 = 1;
        choix29.checked = true;
        choix19.checked = false;
        choix39.checked = false;
        console.log(`question 9 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note9 = 0;
        choix39.checked = true;
        choix19.checked = false;
        choix29.checked = false;
        console.log(`question 9 => réponse 3`);
    }

    console.log(note9);
}
question9();

// QUESTION N°10
let choix110 = document.querySelector('.question10 #choix1');
let choix210 = document.querySelector('.question10 #choix2');
let choix310 = document.querySelector('.question10 #choix3');
choix110.checked = false;
choix210.checked = false;
choix310.checked = false;
var note10 = null;
function question10(clicked_id){
    
    if(clicked_id === "choix1"){
        note10 = 0;
        choix110.checked = true;
        choix210.checked = false;
        choix310.checked = false;
        console.log(`question 10 => réponse 1`);
    }
    if(clicked_id === "choix2"){
        note10 = 0;
        choix210.checked = true;
        choix110.checked = false;
        choix310.checked = false;
        console.log(`question 10 => réponse 2`);
    } 
    if(clicked_id === "choix3"){
        note10 = 1;
        choix310.checked = true;
        choix110.checked = false;
        choix210.checked = false;
        console.log(`question 10 => réponse 3`);
    }

    console.log(note10);
}
question10();

function notes(){
    choix11.checked = false;
    choix21.checked = false;
    choix31.checked = false;
    choix12.checked = false;
    choix22.checked = false;
    choix32.checked = false;
    choix13.checked = false;
    choix23.checked = false;
    choix33.checked = false;
    choix14.checked = false;
    choix24.checked = false;
    choix34.checked = false;
    choix15.checked = false;
    choix25.checked = false;
    choix35.checked = false;
    choix16.checked = false;
    choix26.checked = false;
    choix36.checked = false;
    choix17.checked = false;
    choix27.checked = false;
    choix37.checked = false;
    choix18.checked = false;
    choix28.checked = false;
    choix38.checked = false;
    choix19.checked = false;
    choix29.checked = false;
    choix39.checked = false;
    choix110.checked = false;
    choix210.checked = false;
    choix310.checked = false;
    var affiche = document.getElementById('leGagnant');
    var totalQuizzes = note1 + note2 + note3 + note4 + note5 + note6 + note7 + note8 + note9 + note10; 
    if(totalQuizzes < 5) {
        var x = document.createElement("img");
        x.src = "assets/Illustrations/Game/sad.png";
        x.setAttribute("width", "370");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "I'm sad");
        layer.appendChild(x);
        affiche.innerHTML = `T'es un apprenti fan ? 
        T'as obtenu que ${totalQuizzes}/10`;
    }
    if(totalQuizzes === 5) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "assets/Illustrations/Game/cup-bronze.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Cup bronze");
        layer.appendChild(x);
        affiche.innerHTML = `C'est bien mais c'est juste la moyenne ! 
        T'as obtenu ${totalQuizzes}/10`;
    }
    if(totalQuizzes > 5 && totalQuizzes < 8 ) {
        var x = document.createElement("img");
        x.setAttribute("src", "assets/Illustrations/Game/cup-argent.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Cup argent");
        layer.appendChild(x);
        affiche.innerHTML = `Tu peux faire mieux ! 
        T'as obtenu ${totalQuizzes}/10
        Concentre-toi bien.`;
    }
    if(totalQuizzes > 8 && totalQuizzes < 10 ) {
        var x = document.createElement("img");
        x.setAttribute("src", "assets/Illustrations/Game/cup-argent.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Cup argent");
        layer.appendChild(x);
        affiche.innerHTML = `Bravo ! 
        T'as obtenu ${totalQuizzes}/10
        Tu peux faire mieux !`;
    }
    if(totalQuizzes > 8 && totalQuizzes < 10 ) {
        var x = document.createElement("img");
        x.setAttribute("src", "assets/Illustrations/Game/cup-gold.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Cup gold");
        layer.appendChild(x);
        affiche.innerHTML = `Très bien ! 
        T'as obtenu ${totalQuizzes}/10
        il te manque juste quelques bonnes réponses !`;
    }
    if(totalQuizzes === 10 ) {
        var x = document.createElement("img");
        x.setAttribute("src", "assets/Illustrations/Game/cup-gold.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "Cup gold");
        layer.appendChild(x);
        affiche.innerHTML = `Excellent ! 
        T'as obtenu ${totalQuizzes}/10
        T'es mon super fan !`;
    }
    document.getElementById("layer").style.display = "block";
    console.log(totalQuizzes);
}


function fermer(){
    console.log("les notes");
    document.getElementById("layer").style.display = "none";
}
