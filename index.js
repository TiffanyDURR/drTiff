
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");
const avisPos = document.querySelector(".add-avis-pos");
const avisNeg = document.querySelector(".add-avis-neg");
const formCom = document.querySelector(".form-com");
const photoUpload = document.querySelector(".photo-upload");
const photoImpossible = document.querySelector(".photo-impossible");
const formulaireAvis = document.querySelector(".formulaire-avis")
const titleCom = document.getElementById("title-com");
const comContent = document.getElementById("com-content");
const nameCom = document.getElementById("name-com");
const envoyer = document.querySelector(".envoyer");
const userTitles = document.querySelectorAll(".user-title");
const userComs = document.querySelectorAll(".user-com");
const userNames = document.querySelectorAll(".user-name");
const titreh1 = document.querySelector(".titre-h1-change");
const titreh2 = document.querySelector(".titre-h2-change");
const posTitle = document.querySelector(".pos-title");
const negTitle = document.querySelector(".neg-title");
const negName = document.querySelector(".neg-name");
const posName = document.querySelector(".pos-name");
const negCom = document.querySelector(".neg-com");
const posCom = document.querySelector(".pos-com");


let titre = "";
let commentaire = "";
let nom = "";


function likeDisplay () {
like.addEventListener("click", () => {
avisPos.style.display = "block";
avisNeg.style.display = "none";
formCom.style.display = "none";
formulaireAvis.style.display = "block";
})
}

function dislikeDisplay () {
    dislike.addEventListener("click", () => {
    avisPos.style.display = "none";
    avisNeg.style.display = "block";
    formCom.style.display = "none";
    formulaireAvis.style.display = "block";
    })
}

function photoUploadDIsplay () {
photoUpload.addEventListener("click", () => {
    photoImpossible.style.display = "inline-block";
    photoUpload.classList.add("not-allowed");
})
}


titleCom.addEventListener("input", (e) => {
    titre = e.target.value; 
    userTitles.forEach((userTitle) => { 
    userTitle.innerHTML = titre;
})
  });

  comContent.addEventListener("input", (e) => {
    commentaire = e.target.value; 
    userComs.forEach((userCom) => { 
    userCom.innerHTML = commentaire;
})
  });

  nameCom.addEventListener("input", (e) => {
    nom = e.target.value; 
    userNames.forEach((userName) => { 
    userName.innerHTML = nom;
})
  });


function envoyerDisplay () {
envoyer.addEventListener("click", () => {
    formulaireAvis.style.display = "none";
    titreh2.style.display = "none";
    titreh1.textContent = "Merci pour votre avis !";
ifcom();
ifName();
ifTitre();
})
}

function ifName() {
    if (nom === "" || nom === null) {
        negName.textContent = "Anonyme";
        posName.textContent = "Anonyme";
    } 
}

function ifTitre() {
    if (nom === "" || nom === null) {
        negTitle.textContent = "Commentaire sans titre";
        posTitle.textContent = "Commentaire sans titre";
    } 
}

function ifcom() {
if (commentaire === "" || commentaire === null) {
    posCom.textContent = "Aucun contenu. L'auteur n'a pas laissé de commentaire.";
    negCom.textContent = "Aucun contenu. L'auteur n'a pas laissé de commentaire.";
      }
    }



likeDisplay();
dislikeDisplay();
photoUploadDIsplay();
envoyerDisplay();

