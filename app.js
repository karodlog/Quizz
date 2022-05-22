const form = document.querySelector(".form-quizz");
let tableauResultats = [];
const reponses = ['a', 'c','b', 'c', 'c'];
const emojis = ['✅','✨','👀','😭','👎','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
const precisionReponseA = document.querySelector('.boxA');
const precisionReponseB = document.querySelector('.boxB');
const precisionReponseC = document.querySelector('.boxC');
const precisionReponseD = document.querySelector('.boxD');
const precisionReponseE = document.querySelector('.boxE');
let verifTableau = [];


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats){
    for(let a = 0; a < 5; a++){
        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        } else{
            verifTableau.push(false);
        }
    }

    // console.log(verifTableau);
    couleursFonction(verifTableau);
    afficherResultats(verifTableau);
    verifTableau = [];

}


function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes){
        case 0:
            titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans faute !${emojis[0]}`;
            aideResultat.innerText = "";
            noteResultat.innerText = `${5-nbDeFautes} bonnes réponses`;

            break;
        case 1:
            titreResultat.innerText = `${emojis[1]} Vous y êtes presque !${emojis[1]}`;
            aideResultat.innerText = "Essayez une autre réponse pour la case rouge et validez à nouveau vos choix";
            noteResultat.innerText = `${5-nbDeFautes} bonnes réponses`;
            break;
        case 2:
            titreResultat.innerText = `${emojis[2]} Encore un effort !${emojis[2]}`;
            aideResultat.innerText = "Essayez une autre réponse pour les cases rouges et validez à nouveau vos choix";
            noteResultat.innerText = `${5-nbDeFautes} bonnes réponses`;
            break;
        case 3:
            titreResultat.innerText = `${emojis[3]} Il reste quelques erreurs !${emojis[3]}`;
            aideResultat.innerText = "Essayez une autre réponse pour les cases rouges et validez à nouveau vos choix";
            noteResultat.innerText = `${5-nbDeFautes} bonnes réponses`;
            break;
        case 4:
            titreResultat.innerText = `${emojis[4]} Vous pouvez mieux faire !${emojis[4]}`;
            aideResultat.innerText = "Essayez une autre réponse pour les cases rouges et validez à nouveau vos choix";
            noteResultat.innerText = `${5-nbDeFautes} bonne réponse`;
            break;
        case 5:
            titreResultat.innerText = `${emojis[5]}${emojis[5]} Franchement ???!!! ${emojis[5]}${emojis[5]}`;
            aideResultat.innerText = "Réfléchissez un minimum, cherchez et recommencez";
            noteResultat.innerText = `Aucune bonne réponse`;
            break;
            default: "Oups, cas innatendu.";
    }
}
const textPrecisionReponse = ["Il bat en finale le suédois Mats Wilander. Il est le seul joueur français à avoir remporté un tournoi du Grand Chelem", "Elle est née à Rochefort le 1er juin 1982. Elle compte 43 titres en simple (dont 7 levées du Grand Chelem, 1 médaille d'or olympique et 2 masters).", "Sa largeur est de 8,23 mètres. La hauteur du filet est de 91,4 cm en son centre.", "Open d'Australie, Roland-Garros (France), Wimbledon (Angleterre) et US Open(USA). ", "Appelé «optic yellow», déterminé comme étant la couleur la plus visible pour l'œil humain. Avec l'apparition de la télévision en couleur, les possibilités d'améliorer le confort du téléspectateur ont été démultipliées. "];

function couleursFonction(tabValBool){
    for(let j = 0; j < tabValBool.length; j++){
        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = "linear-gradient(to right, #56ab2f, #a8e063)";
            if(tableauResultats[0] === reponses[0]){
                precisionReponseA.innerText = `${textPrecisionReponse[0]}`;
            }
            if(tableauResultats[1] === reponses[1]){
                precisionReponseB.innerText = `${textPrecisionReponse[1]}`;
            }
            if(tableauResultats[2] === reponses[2]){
                precisionReponseC.innerText = `${textPrecisionReponse[2]}`;
            }
            if(tableauResultats[3] === reponses[3]){
                precisionReponseD.innerText = `${textPrecisionReponse[3]}`;
            }
            if(tableauResultats[4] === reponses[4]){
                precisionReponseE.innerText = `${textPrecisionReponse[4]}`;
            }
     
            
        } else{
            toutesLesQuestions[j].style.background = "linear-gradient(to right, #e52d27, #b31217)";
            toutesLesQuestions[j].classList.add("echec");


            setTimeout(()=>{
                toutesLesQuestions[j].classList.remove("echec");
            }, 1000)

        }
    }
}

// function ajoutPrecision(){
//     for(i = 1; i < 6; i++){
//         tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
//     }

//     if(tableauResultats[0] === reponses[0]){
//         precisionReponseA.innerText = `${textPrecisionReponse[0]}`;
//     }
//     else if(tableauResultats[1] === reponses[1]){
//         precisionReponseB.innerText = `${textPrecisionReponse[1]}`;
//     }
    // if(tabResultats[2] === reponses[2]){
    //     precisionReponseC.innerText = `${textPrecisionReponse[2]}`;
    // }
    // if(tabResultats[3] === reponses[3]){
    //     precisionReponseD.innerText = `${textPrecisionReponse[3]}`;
    // }
    // if(tabResultats[4] === reponses[4]){
    //     precisionReponseE.innerText = `${textPrecisionReponse[4]}`;
    // }
// }
// ajoutPrecision();


toutesLesQuestions.forEach(item =>{
    item.addEventListener("click", () =>{
        item.style.background = "white";
    })
})

console.log(tableauResultats[0]);
console.log(reponses[0]);