
const confirmation = () => {
    let local = JSON.parse(localStorage.getItem("panier"));

    local.products.forEach((product) => {
        displayConfirmation(product);
    });
    totalCommande(local);
};
confirmation();

