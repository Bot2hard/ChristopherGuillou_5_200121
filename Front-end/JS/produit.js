// Liaison de l'id avec l'url (api)

const afficherMeuble = async () => {
  //const id = location.search.substring(4);

  let id = new URLSearchParams(window.location.search);
  id = id.get("id");

  const myMeuble = await request(`http://localhost:3000/api/furniture/${id}`);
  if (myMeuble === "error server") {
    afficheError();
  } else if (!myMeuble._id) {
    errorIdMeuble();
  } else {
    afficheDetailProduit(myMeuble);
  }
  indexPanierr();
};
afficherMeuble();
