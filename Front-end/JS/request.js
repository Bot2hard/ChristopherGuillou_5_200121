const request = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    return "error server";
  }
};
  
const usersData = (data)=>{
const promise = fetch("http://localhost:3000/api/furniture/order", {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
     "Content-Type": "application/json",
   },
 });
 
 promise.then(async(response)=>{
   try {
    console.log(response);
    const contenu = await response.json();
    localStorage.setItem("panier",JSON.stringify(contenu));
    window.location="./confirmation.html";
    console.log(contenu)
   } catch (e) {
     console.log(e);
   }
 })
 }

 