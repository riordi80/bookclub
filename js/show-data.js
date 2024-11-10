//Function to show the data stored in LocalStorage
function showData() {
  const TITLE = localStorage.getItem("title"); //Meto dentro de la constante NAME el valor de "name"
  document.getElementById("title").innerHTML = TITLE;

  const AUTOR = localStorage.getItem("autor");
  document.getElementById("autor").innerHTML = AUTOR;

  const CATEGORY = localStorage.getItem("category");
  document.getElementById("category").innerHTML = CATEGORY;

  const CONDITION = localStorage.getItem("condition");
  document.getElementById("condition").innerHTML = CONDITION;
}

//Call the function that shows the data stored in LocalStorage
showData();