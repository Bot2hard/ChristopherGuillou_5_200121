const afficherPanier = () => {
  let local = JSON.parse(localStorage.getItem("panier"));

  local?.length && afficherMonPanier(local);

  formulaire();
  indexPanierr();
  calculePanier();
  panierVide();
};

afficherPanier();

/*
if (local === null) {
    return panierVide();
  } else {
    local?.length && afficherMonPanier(local);
  }
*/
