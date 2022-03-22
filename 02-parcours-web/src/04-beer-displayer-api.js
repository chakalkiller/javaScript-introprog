async function getData() {
    try {
      const response = await fetch(
        "$ curl https://api.punkapi.com/v2/beers?page=2&per_page=80 "
      );
      // await: attend la fin de l'opération puis passe à la suite
      // sans bloquer l’exécution des autres opérations asynchrones
      // qui pourraient se dérouller en arrière plan
      const data = await response.json();
      const {beer_name, tagline, first_brewed,image_url} = data;
      console.log(beer_name, tagline, first_brewed,image_url);
    } catch (error) {
      console.log("Erreur : " + error);
    }
  }
  getData();
