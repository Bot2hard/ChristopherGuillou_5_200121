/*toutes les fonctions
====================== */
const spinner = () => {
  let spinner = document.querySelector("#wrapper");
  spinner.className += " hidden";
};
const afficheError = () => {
  window.location.reload();
  alert(" NOUS RENCONTRONS DES PROBLEMES DE SERVEUR REESSAYEZ ULTERIEUMENT ");
};

const errorIdMeuble = () => {
  let pageError = document.getElementById("unite_meuble");
  pageError.style.display = "none";
  let textError = document.createElement("h1");
  let mainError = document.getElementById("main");
  mainError.appendChild(textError);
  textError.textContent = " Ooops... Ce produit n'existe pas !! ";
};
const indexPanierr = () => {
  let local = JSON.parse(localStorage.getItem("panier"));
  let indexPan = document.querySelector("#indexPanier");
  if (local?.length) indexPan.textContent = local.length;
  else {
    indexPan.textContent = 0;
  }
};
const panierVide = () => {
  let indexPan = document.querySelector("#indexPanier");
  if (indexPan.textContent == 0) {
    let panierVide = document.getElementById("listPanier");
    panierVide.style.display = "none";

    let textPanierVide = document.createElement("h1");
    let mainMessage = document.getElementById("tableauPanier");
    mainMessage.appendChild(textPanierVide);
    textPanierVide.textContent = "Votre panier est vide ...  ";

    let divsup = document.getElementById("divSupp");
    divsup.style.display = "none";
  }
};
const afficherMonPanier = (local) => {
  local?.length &&
    local.forEach((pan, index) => {
      monPanier(pan, index);
    });
};

const calculePanier = () => {
  let local = JSON.parse(localStorage.getItem("panier"));
  let totalPanier = 0;

  let totalDuPanier = document.querySelector(".totalPanier");
  console.log(totalDuPanier);
  local?.length &&
    local.forEach((pan) => {
      totalPanier += pan.prix * pan.qty;
    });
  totalDuPanier.textContent = "Total du panier :" + formatagePrix(totalPanier);
};

const formatagePrix = (p) => {
  let number = p / 100;
  number = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number);
  return number;
};

const afficheProduit = (fur) => {
  /* racine semantique de la page index.html
========================================*/

  let listArticle = document.getElementById("listArticle");

  /* Creation de la semantique index.html et attribut (class, src, alt)
===================================================================*/

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

  /*  Et mise en forme de la semantique
===================================*/

  listArticle.appendChild(divMeuble);
  divMeuble.appendChild(meubleContenerImg);
  meubleContenerImg.appendChild(imageMeuble);
  divMeuble.appendChild(meubleText);
  meubleText.appendChild(nomMeuble);
  meubleText.appendChild(prixMeuble);
  meubleText.appendChild(choixMeuble);

  /* envoie de contenu vers les balises
====================================*/

  nomMeuble.textContent = fur.name;
  prixMeuble.textContent = "prix : " + formatagePrix(fur.price);
  choixMeuble.textContent = "Informations";
};

const afficheDetailProduit = (myMeuble) => {
  let title = document.getElementById("title");
  title.textContent = myMeuble.name + " - Meuble en bois massif - ORINOCO";

  /* racine semantique de la page produit.html
==========================================*/

  let uniteMeuble = document.getElementById("unite_meuble");

  /* Creation de la semantique produit.html et attribut (class, src, alt ...)
========================================================================*/

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

  /* Et mise en forme de la semantique
==================================*/

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

  /* envoie de contenu vers les balises
===================================*/

  unitNomMeuble.textContent = myMeuble.name;
  unitDescription.textContent = myMeuble.description;
  unitPrixMeuble.textContent = "prix : " + formatagePrix(myMeuble.price);

  /* boucle forEach sur array[varnish] qui return une liste de vernis par id (vernis)
=================================================================================*/

  myMeuble.varnish.forEach((listVernis) => {
    let choixVernis = document.createElement("option");
    document.getElementById("selection");
    selection.appendChild(choixVernis).innerHTML = "vernis : " + listVernis;
  });
  /* creation d'un selection/option pour le choix des quantités
==========================================================*/

  let tabQuantite = Array.from(Array(6).keys()).slice(1);

  tabQuantite.forEach((qte) => {
    let choixQuantite = document.createElement("option");
    document.getElementById("selectQuantite");
    selectQuantite.appendChild(choixQuantite).innerHTML = qte;
  });

  /* localStorage
===============*/

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
    indexPanierr();
  });
};

const monPanier = (pan, index) => {
  // racine html
  let getPan = document.querySelector("#main");

  let getPanier = document.createElement("tr");
  getPanier.setAttribute("id", index);
  getPanier.setAttribute("class", "etatPanier");
  getPan.appendChild(getPanier);

  let tdGetImage = document.createElement("td");
  getPanier.appendChild(tdGetImage);

  let getImage = document.createElement("img");
  getImage.setAttribute("class", "getimage");
  getImage.setAttribute("src", pan.pic);
  getImage.setAttribute("alt", "Photo de meuble en bois massif - Orinoco");
  tdGetImage.appendChild(getImage);

  let getTitre = document.createElement("td");
  getPanier.appendChild(getTitre);
  getTitre.innerHTML = pan.name;

  let getPrix = document.createElement("td");
  getPrix.setAttribute("class", "getprix");
  getPanier.appendChild(getPrix);
  getPrix.innerHTML = "Prix unitaire: " + formatagePrix(pan.prix);

  let getQty = document.createElement("td");
  getQty.setAttribute("class", "getqty");
  getPanier.appendChild(getQty);
  getQty.innerHTML = "Quantité : " + pan.qty;

  let prixTotal = document.createElement("td");
  getPanier.appendChild(prixTotal);
  prixTotal.innerHTML = formatagePrix(pan.prix * pan.qty);

  let btnDeleteItem = document.createElement("td");
  getPanier.appendChild(btnDeleteItem);

  let deleteItem = document.createElement("button");
  deleteItem.setAttribute("class", "delete_item");
  btnDeleteItem.appendChild(deleteItem);
  deleteItem.innerHTML = '<i class="fas fa-trash"></i>';

  // event de suppression
  deleteItem.addEventListener("click", (e) => {
    let local = JSON.parse(localStorage.getItem("panier"));

    let suppEltPanier = document.getElementById(index);
    suppEltPanier.parentNode.removeChild(suppEltPanier);
    deleteElt(index);
    indexPanierr();
    calculePanier();
    // if (indexPanierr() == 0) {
    panierVide();
    // }
  });
};
const deleteElt = () => {
  let local = JSON.parse(localStorage.getItem("panier"));
  local.splice(0, 1);
  localStorage.clear();
  localStorage.setItem("panier", JSON.stringify(local));
};

const formulaire = () => {
  var pseudo = document.getElementById("pseudo");
  var mdp = document.getElementById("mdp");
  var mdp2 = document.getElementById("mpd2");
  var mail = document.getElementById("mail");
  var nom = document.getElementById("nom");
  var cp = document.getElementById("cp");
  let local = JSON.parse(localStorage.getItem("panier"));

  let getPan = document.getElementById("main");

  let deleteAllItem = document.createElement("button");
  deleteAllItem.setAttribute("class", "delete_all_item");
  deleteAllItem.innerHTML = "vider panier";

  let divSupp = document.createElement("div");
  divSupp.setAttribute("id", "divSupp");
  getPan.appendChild(divSupp);
  divSupp.appendChild(deleteAllItem);

  let totalDuPanier = document.createElement("span");
  totalDuPanier.setAttribute("class", "totalPanier");
  divSupp.appendChild(totalDuPanier);

  deleteAllItem.addEventListener("click", (e) => {
    localStorage.removeItem("panier");
    let mainPanier = document.querySelector(".mainpan");
    mainPanier.parentNode.removeChild(mainPanier);
    window.location.reload();
    panierVide();
  });
};
