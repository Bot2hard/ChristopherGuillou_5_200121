
const confirmation = () => {
    let local = JSON.parse(localStorage.getItem("panier"));

    let localConf = JSON.parse(localStorage.getItem("confirme"));

    if(localStorage.getItem("panier") === null){
        alert("Merci de votre commande");
        window.location="./index.html";


    }else if (local?.products === undefined) {
        alert("Cette page n'existe pas");
        window.location="./index.html";
    }else if (localStorage.getItem("panier") !== null) {
        localConf.forEach((product) => {
            displayConfirmation(product);
        });
    }
    indexPanierr();
    totalCommande(local);
    localStorage.removeItem("panier");
    localStorage.removeItem("confirme");

};
confirmation();

