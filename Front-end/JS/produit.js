
// recuperation et declaration de l'id en enlevant 4 caracteres substring("?id=")
const idMeuble = location.search.substring(4);

   // console.log(location.search); //test
   // console.log(idMeuble); //test


// creation et resolusion de la request pour la redirection vers page produit 

/*const afficherMeuble = (id) =>{
    const myMeuble = request(`http://localhost:3000/api/furniture/${id}`)
    //console.log(myMeuble); // promesse 
        myMeuble.then((meuble)=>{
    })

  } 
  afficherMeuble(idMeuble)
console.log(idMeuble);*/


// Liaison de l'id avec l'url (api)

const afficherMeuble = async (id) =>{
    const myMeuble = await request(`http://localhost:3000/api/furniture/${id}`)
    

// racine semantique de la page produit.html
    
let uniteMeuble = document.getElementById("unite_meuble");

// Creation de la semantique produit.html et attribut (class, src, alt ...)

let divMeubleUnit = document.createElement("section");
    divMeubleUnit.setAttribute("class", "unit_Meuble");

let unitMeubleContenerImg = document.createElement("div");
    unitMeubleContenerImg.setAttribute("class", "unit_meuble_contener_img");

let formeChoix = document.createElement('form');
    formeChoix.setAttribute("method", "get");

let selection = document.createElement("select");
    selection.setAttribute("id", "selection");
    selection.setAttribute("name", "selection");

let formeQuantite = document.createElement('form');
    formeQuantite.setAttribute("method", "get");
    formeQuantite.setAttribute("class", "form_quantite");

let labelQuantite = document.createElement("label");
    labelQuantite.setAttribute("for", "quantite");

let inputQuantite = document.createElement("input");
    inputQuantite.setAttribute("type", "number");
    inputQuantite.setAttribute("id", "quantite");
    inputQuantite.setAttribute("name", "quantite");
    inputQuantite.setAttribute("min", "1");
    inputQuantite.setAttribute("max", "25");
    
let unitMeubleText = document.createElement("div");
    unitMeubleText.setAttribute("class", "unit_meuble_text");

let unitImageMeuble = document.createElement("img");
    unitImageMeuble.setAttribute("src", myMeuble.imageUrl);
    unitImageMeuble.setAttribute("alt", "Photo de meuble en bois massif - Orinoco");

let unitNomMeuble = document.createElement("h2");
    unitNomMeuble.setAttribute("class", "unit_nom_Meuble");

let unitDescription = document.createElement("p");
    unitDescription.setAttribute("class", "unit_description")

let unitPrixMeuble = document.createElement("p");
    unitPrixMeuble.setAttribute("class", "unit_prix_Meuble");

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
    formeQuantite.appendChild(labelQuantite);
    formeQuantite.appendChild(inputQuantite);
    formeChoix.appendChild(selection);

 // envoie de contenu vers les balises
    
    unitNomMeuble.textContent = myMeuble.name;
    unitDescription.textContent = myMeuble.description;
    unitPrixMeuble.textContent = "prix : " + myMeuble.price / 100 + " €";
    labelQuantite.textContent = "Quantité : "

// boucle forEach sur array[varnish] qui return une liste de vernis par id (vernis) 

    myMeuble.varnish.forEach((listVernis) => {
    let choixVernis = document.createElement("option");
    document.getElementById("selection");
    selection.appendChild(choixVernis).innerHTML ="vernis : " + listVernis;
  });

        }
 afficherMeuble(idMeuble)









    
