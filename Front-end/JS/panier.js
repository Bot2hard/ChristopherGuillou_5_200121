const afficherPanier = () => {
  let local = JSON.parse(localStorage.getItem("panier"));

  local?.length && afficherMonPanier(local);

  formulaire();
  indexPanierr();
  calculePanier();
  panierVide();
};

afficherPanier();

