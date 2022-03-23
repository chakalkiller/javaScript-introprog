
let b1 = document.querySelector("#inputOne");


function plus() {
  let id = document.querySelector("#id").value;
  
  if (id) {
      document.querySelector("#result").value = parseFloat(inputOne) + parseFloat(inputTwo);
  }
}
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // await: attend la fin de l'opération puis passe à la suite
    // sans bloquer l’exécution des autres opérations asynchrones
    // qui pourraient se dérouller en arrière plan
    const data = await response.json();
    const { userId, id, title, completed } = data;
    console.log(userId, id, title, completed);
  } catch (error) {
    console.log("Erreur : " + error);
  }
}
getData();


// async function getData() {
//     try {
//       const response = await fetch("https://api.punkapi.com/v2/beers1");
//       // await: attend la fin de l'opération puis passe à la suite
//       // sans bloquer l’exécution des autres opérations asynchrones
//       // qui pourraient se dérouller en arrière plan
//       const data = await response.json();
//       const {beer_name, tagline, first_brewed,image_url} = data;
//       console.log(beer_name, tagline, first_brewed,image_url);
//     } catch (error) {
//       console.log("Erreur : " + error);
//     }

//   }
//   getData();
  
b1.addEventListener("click", getData);