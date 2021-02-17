const afficherPanier = () => {
  const addToCart = request("http://localhost:3000/api/furniture");
  addToCart.then((panier) => {
    let local = JSON.parse(localStorage.getItem("panier"));
    local?.length &&
      local.forEach((pan, index) => {
        monPanier(pan, index);
      });
    indexPanierr();
  });
};

afficherPanier();
