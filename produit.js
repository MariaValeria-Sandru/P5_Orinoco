const urlString = window.location.search; // Chaine de caracteres de la requete
const urlParams = new URLSearchParams(urlString);

const id = urlParams.get("id");

(async function () {
  const response = await fetch("http://localhost:3000/api/furniture/" + id);
  const data = await response.json();
  document.getElementById("produit_titre").innerHTML = data.name;
  document.getElementById("produit_image").src = data.imageUrl;
  const varnish = data.varnish;

  for (let i = 0; i < varnish.length; i++) {
    document.getElementById("product_varnish").innerHTML += `
				<option value="${varnish[i]}">${varnish[i]}</option>
			`;
  }
})();

document.getElementById("btn_commander").addEventListener(
  "click",
  function () {
    // Recuperer tout les donnees des champs du formulaire
    const quantite = document.getElementById("quantite").value;

    // Ajouter ces donnees au localstorage
    console.log("la quantite est = ", quantite);
    localStorage.setItem("quantite", quantite + 2);

    // Afficher un alerte disant que le produit a ete ajoute avec succes
    console.log(
      "Notre localstorage contient ",
      localStorage.getItem("quantite")
    );
  },
  false
);
