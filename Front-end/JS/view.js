// Recuperation de la fonction lié a l'API

const afficheProduit = (fur) =>{
// Lien avec la page index.html

let listArticle = document.getElementById("listArticle");

// Creation de la semantique index.html et attribut (class, src, alt)

let divMeuble = document.createElement("section");
      divMeuble.setAttribute("class", "div_Meuble");

let meubleContenerImg = document.createElement("div");
      meubleContenerImg.setAttribute("class", "meuble_contener_img");

let meubleText = document.createElement("div");
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
      choixMeuble.setAttribute("class", "info_Meuble");


//  Et agengement semantique

   listArticle.appendChild(divMeuble);
   divMeuble.appendChild(meubleContenerImg);
   meubleContenerImg.appendChild(imageMeuble);
   divMeuble.appendChild(meubleText);
   divMeuble.appendChild(meubleText);
   meubleText.appendChild(nomMeuble);
   meubleText.appendChild(prixMeuble);
   meubleText.appendChild(choixMeuble);

//  envoie du contenu "json" vers les balises

   nomMeuble.textContent = fur.name;
   prixMeuble.textContent = "prix : " + fur.price / 100 + " €";
   choixMeuble.textContent = "Informations";

}











