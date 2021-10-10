fetch("http://localhost:3000/api/furniture")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
		for (i=0 ;i<data.length ; i++)
        {
					var elt = data[i]
					console.log(elt)
		
          document.getElementById("produits__grid").innerHTML += `

						<article class="produits__core">
													<a class="cards links__produits" href="produit1.html">
															<figure>
																	<img src="${elt.imageUrl}" alt="produit__1"/>
																	<div class="new">Nouveau</div>
															</figure>    
																	<div class="restaurants__desc">
																			<h2>${elt.name}</h2>
																			<p>${elt.price}</p>
																	</div>
													</a>
													<button class="heart">
															<i class="far fa-heart"></i>
															<i class="fas fa-heart"></i>
													</button>
											</article>
				`
        }
  });
// Mise en place des éléments pour construire la page //
  async function furnitureList() {
	const furnitureList = await getFurnitureProducts();

	// Ajout de la liste des produits //
	let productsList = document.getElementById("listemeubles");
}

// Affichage du nombre d'articles dans le panier //
function showItems() {
  let cartItems = document.getElementById("indexPanier");
  if (cart != null) {
  	cartItems.textContent = cart.length;
  } else {
  	cartItems.textContent = 0;
  }
  };
showItems();	