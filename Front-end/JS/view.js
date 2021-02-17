// Recuperation de la fonction lié a l'API
const afficheError = () => {
  window.location.replace("loader.html");
};

const errorIdMeuble = () => {
  let pageError = document.getElementById("unite_meuble");
  pageError.style.display = "none";
  let textError = document.createElement("h1");
  let mainError = document.getElementById("main");
  mainError.appendChild(textError);
  textError.textContent = " Ooops... Ce produit n'existe pas !! ";
};

const afficheProduit = (fur) => {
  let number = fur.price / 100;
  number = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number);

  // racine semantique de la page index.html

  let listArticle = document.getElementById("listArticle");

  // Creation de la semantique index.html et attribut (class, src, alt)

  let divMeuble = document.createElement("a");
  divMeuble.setAttribute("class", "div_Meuble");
  divMeuble.setAttribute("href", "produit.html?id=" + fur._id);

  let meubleContenerImg = document.createElement("div");
  meubleContenerImg.setAttribute("class", "meuble_contener_img");

  let meubleText = document.createElement("section");
  meubleText.setAttribute("class", "meuble_text");

  let imageMeuble = document.createElement("img");
  imageMeuble.setAttribute("src", fur.imageUrl);
  imageMeuble.setAttribute("alt", "Photo de meuble en bois massif - Orinoco");

  let nomMeuble = document.createElement("h2");
  nomMeuble.setAttribute("class", "nom_Meuble");

  let prixMeuble = document.createElement("p");
  prixMeuble.setAttribute("class", "prix_Meuble");

  let choixMeuble = document.createElement("a");
  choixMeuble.setAttribute("href", "produit.html?id=" + fur._id);
  //console.log(choixMeuble); test result 5 id
  choixMeuble.setAttribute("class", "info_Meuble");

  //  Et mise en forme de la semantique

  listArticle.appendChild(divMeuble);
  divMeuble.appendChild(meubleContenerImg);
  meubleContenerImg.appendChild(imageMeuble);
  divMeuble.appendChild(meubleText);
  meubleText.appendChild(nomMeuble);
  meubleText.appendChild(prixMeuble);
  meubleText.appendChild(choixMeuble);

  //  envoie de contenu vers les balises

  nomMeuble.textContent = fur.name;
  prixMeuble.textContent = "prix : " + number;
  choixMeuble.textContent = "Informations";
};

const afficheDetailProduit = (myMeuble) => {
  let number = myMeuble.price / 100;
  number = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number);

  let title = document.getElementById("title");
  title.textContent = myMeuble.name + " - Meuble en bois massif - ORINOCO";

  // racine semantique de la page produit.html

  let uniteMeuble = document.getElementById("unite_meuble");

  // Creation de la semantique produit.html et attribut (class, src, alt ...)

  let divMeubleUnit = document.createElement("section");
  divMeubleUnit.setAttribute("class", "unit_Meuble");

  let unitMeubleContenerImg = document.createElement("div");
  unitMeubleContenerImg.setAttribute("class", "unit_meuble_contener_img");

  let unitMeubleText = document.createElement("div");
  unitMeubleText.setAttribute("class", "unit_meuble_text");

  let unitImageMeuble = document.createElement("img");
  unitImageMeuble.setAttribute("src", myMeuble.imageUrl);
  unitImageMeuble.setAttribute(
    "alt",
    "Photo de meuble en bois massif - Orinoco"
  );

  let unitNomMeuble = document.createElement("h2");
  unitNomMeuble.setAttribute("class", "unit_nom_Meuble");

  let unitDescription = document.createElement("p");
  unitDescription.setAttribute("class", "unit_description");

  let unitPrixMeuble = document.createElement("p");
  unitPrixMeuble.setAttribute("class", "unit_prix_Meuble");

  let formeChoix = document.createElement("form");
  formeChoix.setAttribute("method", "get");

  let selection = document.createElement("select");
  selection.setAttribute("id", "selection");
  selection.setAttribute("name", "selection");

  let formeQuantite = document.createElement("form");
  formeQuantite.setAttribute("method", "get");
  formeQuantite.setAttribute("class", "form_quantite");

  let selectQuantite = document.createElement("select");
  selectQuantite.setAttribute("id", "selectionQuantite");
  selectQuantite.setAttribute("name", "selection");

  let totalMeuble = document.createElement("form");
  totalMeuble.setAttribute("method", "get");
  totalMeuble.setAttribute("class", "total_meuble");

  let labelInputMeuble = document.createElement("label");
  labelInputMeuble.setAttribute("for", "ajoutpanier");

  let inputMeuble = document.createElement("input");

  inputMeuble.setAttribute("type", "button");
  inputMeuble.setAttribute("name", "ajoutpanier");
  inputMeuble.setAttribute("id", "inputMeuble");
  inputMeuble.setAttribute("class", "input_meuble");
  inputMeuble.setAttribute("value", "ajouter au panier");

  // Et mise en forme de la semantique

  uniteMeuble.appendChild(divMeubleUnit);
  divMeubleUnit.appendChild(unitMeubleContenerImg);
  unitMeubleContenerImg.appendChild(unitImageMeuble);
  divMeubleUnit.appendChild(unitMeubleText);
  unitMeubleText.appendChild(unitNomMeuble);
  unitMeubleText.appendChild(unitDescription);
  unitMeubleText.appendChild(unitPrixMeuble);
  unitMeubleText.appendChild(formeChoix);
  unitMeubleText.appendChild(formeQuantite);
  unitMeubleText.appendChild(totalMeuble);
  totalMeuble.appendChild(labelInputMeuble);
  totalMeuble.appendChild(inputMeuble);
  formeChoix.appendChild(selection);
  formeQuantite.appendChild(selectQuantite);

  // envoie de contenu vers les balises

  unitNomMeuble.textContent = myMeuble.name;
  unitDescription.textContent = myMeuble.description;
  unitPrixMeuble.textContent = "prix : " + number;

  // boucle forEach sur array[varnish] qui return une liste de vernis par id (vernis)

  myMeuble.varnish.forEach((listVernis) => {
    let choixVernis = document.createElement("option");
    document.getElementById("selection");
    selection.appendChild(choixVernis).innerHTML = "vernis : " + listVernis;
  });
  // creation d'un selection/option pour le choix des quantités
  let tabQuantite = Array.from(Array(6).keys());
  console.log(tabQuantite);
  tabQuantite.forEach((qte) => {
    let choixQuantite = document.createElement("option");
    document.getElementById("selectQuantite");
    selectQuantite.appendChild(choixQuantite).innerHTML = qte;
  });

  //creation d'un event pour calculer le prix en fonction de la quantité
  selectQuantite.addEventListener("change", () => {
    let total = (myMeuble.price / 100) * selectQuantite.value;
  });

  // localStorage

  let ecouteBtn = document.getElementById("inputMeuble");
  let selectionQty = document.getElementById("selectionQuantite");

  selectionQty.addEventListener("change", (e) => {
    e.target.value;
  });

  ecouteBtn.addEventListener("click", (e) => {
    let ecouteBtn = document.getElementById("inputMeuble");
    let infoMyMeuble = {
      name: myMeuble.name,
      id: myMeuble._id,
      prix: myMeuble.price,
      qty: selectionQty.value,
      pic: myMeuble.imageUrl,
    };
    ecouteBtn = infoMyMeuble;

    if (localStorage.getItem("panier") === null) {
      localStorage.setItem("panier", "[]");
    }
    let local = JSON.parse(localStorage.getItem("panier"));

    local.push(ecouteBtn);
    localStorage.setItem("panier", JSON.stringify(local));
    window.location.reload();
  });
};

const monPanier = (pan, index) => {
  // formatage du prix * la qty en euros
  let number = (pan.prix * pan.qty) / 100;
  number = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number);
  // racine html
  let getPan = document.querySelector("#main");

  let getPanier = document.createElement("section");
  getPanier.setAttribute("id", "etatPanier");
  getPanier.setAttribute("class", "etatPanier");
  getPan.appendChild(getPanier);

  let getImage = document.createElement("img");
  getImage.setAttribute("class", "getimage");
  getImage.setAttribute("src", pan.pic);
  getImage.setAttribute("alt", "Photo de meuble en bois massif - Orinoco");
  getPanier.appendChild(getImage);

  let divPanier = document.createElement("div");
  divPanier.setAttribute("class", "divpanier");
  getPanier.appendChild(divPanier);

  let getTitre = document.createElement("h2");
  divPanier.appendChild(getTitre);
  getTitre.innerHTML = pan.name;

  let getId = document.createElement("span");
  getId.setAttribute("class", "getid");
  divPanier.appendChild(getId);
  getId.innerHTML = "Reference : " + pan.id;

  let getPrix = document.createElement("span");
  getPrix.setAttribute("class", "getprix");
  divPanier.appendChild(getPrix);
  getPrix.innerHTML = "Prix : " + number;

  let getQty = document.createElement("span");
  getQty.setAttribute("class", "getqty");
  divPanier.appendChild(getQty);
  getQty.innerHTML = "Quantité : " + pan.qty;

  // fonction qui permet de selectionner un elt du localStorage
  let deleteItem = document.createElement("button");
  deleteItem.setAttribute("class", "delete_item");
  divPanier.appendChild(deleteItem);
  deleteItem.innerHTML = '<i class="far fa-times-circle"></i>';
  const deleteElt = (i) => {
    let local = JSON.parse(localStorage.getItem("panier"));
    local.splice(i, 1);
    localStorage.clear();
    localStorage.setItem("panier", JSON.stringify(local));
    window.location.reload;
  };
  let deleteAllItem = document.createElement("button");
  deleteAllItem.setAttribute("class", "delete_all_item");
  getPan.appendChild(deleteAllItem);
  deleteAllItem.innerHTML = "vider panier";

  // event de suppression
  deleteItem.addEventListener("click", (e) => {
    deleteElt(index);
  });
  deleteItem.addEventListener("click", (e) => {
    window.location.reload();
  });

  deleteAllItem.addEventListener("click", (e) => {
    localStorage.removeItem("panier");
    window.location.reload();
  });
};
