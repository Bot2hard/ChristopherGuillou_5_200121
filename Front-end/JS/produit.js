const afficherMeuble = async () => {
  let id = new URLSearchParams(window.location.search);
  id = id.get("id");

  const myMeuble = await request(`http://localhost:3000/api/furniture/${id}`);
  if (myMeuble === "error server") {
    afficheError();
  } else if (!myMeuble._id) {
    spinner();

    errorIdMeuble();
  } else {
    spinner();

    afficheDetailProduit(myMeuble);
    indexPanierr();
  }
};
afficherMeuble();
