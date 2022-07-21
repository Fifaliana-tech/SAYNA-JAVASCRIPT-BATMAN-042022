jQuery(function () {
    jQuery('p').css({fontSize:'20px', color: 'yellow'});
    jQuery('#layer h1').css({fontSize:'20px', color: 'red'});

    let choixReponses = jQuery('.quest');
    // console.log(checkbox);
    if(choixReponses){
        choixReponses.each(function(index, element){
            let current = $(element);
            let text = $('label');
            text.css('text-decoration','underline dashed');
        })
    }
    
});
// $(document).ready(function(){
//     // $.ajax({
//     //     //on aura besoin de quoi (ex: quelle donnée à parser) ? quelle méhode ??=>voir les cours (qu'est ce qui va s'afficher en succes ou en eror)
//     //     //la requête est elle aboutie ou non => succes ou error . La réponse définit les paramètres que l'on doit utiliser.
//     //     dataType: 'json',
//     //     url: 'https://plankton-app-mj9br.ondigitalocean.app/questions/',
//     //     success: function(data){
//     //         // Allons récuperer les questions seulement
//     //         for(let i = 0; i < data.length; i++){
//     //             console.log(data[i].response);
//     //         }
//     //     },
//     //     // si on arrive pas à trouver l'API quel message s'affiche
//     //     error: function(){
//     //         console.log('API non trouvé');
//     //     },
//     // });

//     var id = 2;
//     var urlAnswer = `https://plankton-app-mj9br.ondigitalocean.app/question/${id}`;
//     //https://plankton-app-mj9br.ondigitalocean.app/question/10

//     $.ajax({
//         dataType:'json',
//         url: urlAnswer,
//         success: function(data){
//             console.log(data.response[0]);
//         }
//     })
// })


// var layer = document.querySelector(".layer");
// var container = document.querySelector(".container");
// var grilles = document.querySelector(".grid-container");
// var Turn = null;


// //quand le jeu démarre
// function start(){
//     layer.style.display = 'none';
//     container.style.display ="block";
//     grilles.style.display ="inline-block";
//     return true;
// };
// 1-Choisir une seule réponse (ne pas permettre plusieurs choix)
// 2-vérifie si la réponse est vraie
// 3-si la réponse est vraie a) afficher "bonne réponse" et attibuer une note de "1"
// 4-Identifier les mauvaises réponses et choisir le layer qui s'affiche 'un layer normalement qui donne la bonne réponse, attribuer une note de 0 ou refaire (essai une fois) 
// 5-Si deuxième essai échoue, afficher la mauvaise réponse
// 6-Comptabiliser le notes du quizz et afficher la note avec un icone "coupe" et Bravo si 100%; peux faire mieux si 50% et n'a pas réussi le quizz si inférieur à 50% 