// Lien avec l'API

const myVariable = () => {
  const produits = request("http://localhost:3000/api/furniture");
  produits.then((furniture) => {
    if (furniture === "error server") {
      afficheError();
    } else {
      furniture.forEach((fur) => {
        spinner();
        afficheProduit(fur);
      });
    }
    indexPanierr();
  });
};
myVariable();
