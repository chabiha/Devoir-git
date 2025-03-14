const couleurs = ["black", "red", "green", "blue", "yellow", "gray", "chocolate", "white" ,"blusky"];
function changerCouleur() {
    const texte = document.getElementById("contain");
    const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    texte.style.color = couleurAleatoire;
}

setInterval(changerCouleur, 1000);