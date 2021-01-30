// Lien avec l'API

const myVariable = () => {
    const produits = request('http://localhost:3000/api/furniture')
        produits.then((furniture)=>{
            furniture.forEach((fur)=>{
                afficheProduit(fur)
            })
        })
}   
myVariable();

