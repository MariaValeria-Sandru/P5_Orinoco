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
