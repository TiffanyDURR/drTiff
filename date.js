const valider = document.querySelector(".valider-resa");
const datez = document.querySelector(".date");

valider.addEventListener("click", () => {
    datez.innerHTML = 

    `
    <section class="achat">
<h1>Impossible de programmer un rendez-vous !</h1>
<h2>Le praticien n’a plus de place jusqu’en 2024.</h2>
<p>Certains créneaux peuvent se libérer. Pour consulter la liste des séances encore disponibles, merci de contacter le secrétariat. </p>
<a href="index.html">Retourner sur la page d'accueil</a>
</section>
    
    `
})