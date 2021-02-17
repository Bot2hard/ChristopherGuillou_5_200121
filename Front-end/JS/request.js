const request = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    return "error server";
  }
};
const indexPanierr = () => {
  let local = JSON.parse(localStorage.getItem("panier"));
  let indexPan = document.querySelector("#indexPanier");
  if (local?.length) indexPan.textContent = local.length;
};
