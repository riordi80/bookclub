window.onload = listenForValidation;

function listenForValidation() {
    let formAddBook = document.getElementById("form-add-book"); //html id
    formAddBook.addEventListener("submit", validateFormSignup);
}

//Function which validates the data sent by the form when the user clicks on submit button
function validateFormSignup(event) {
    let formAddBook = event.target;
    let valid = true;

    const TITLE = formAddBook["title"].value; //html name
    if (!TITLE || TITLE == "") {
        event.preventDefault();
        document.getElementById("error-title-required").style.display = "block";
        console.log("* error: título del libro obligatorio");
    } else {
        document.getElementById("error-title-required").style.display = "none";
    }

    const AUTOR = formAddBook["autor"].value;
    if (!AUTOR || AUTOR == "") {
        event.preventDefault();
        document.getElementById("error-autor-required").style.display = "block";
        console.log("* error: autor del libro obligatorio");
    } else {
        document.getElementById("error-autor-required").style.display = "none";
    }

    const CATEGORY = formAddBook["category"].value;
    if (!CATEGORY || CATEGORY == "") {
        event.preventDefault();
        document.getElementById("error-category-required").style.display = "block";
        console.log("* error: categoría del libro obligatoria");
    } else {
        document.getElementById("error-category-required").style.display = "none";
    }

    const CONDITION = formAddBook["condition"].value;
    if (!CONDITION || CONDITION == "") {
        event.preventDefault();
        document.getElementById("error-condition-required").style.display = "block";
        console.log("* error: estado del libro obligatorio");
    } else {
        document.getElementById("error-condition-required").style.display = "none";
    }

    if (!valid) {
        event.preventDefault();
    } else {
        saveData(TITLE, AUTOR, CATEGORY, CONDITION); //Si es valido, entonces guardas los datos
    }

}

//Function to save the form data in LocalStorage
function saveData(title, autor, category, condition) {
    localStorage.setItem("title", title);
    localStorage.setItem("autor", autor);
    localStorage.setItem("category", category);
    localStorage.setItem("condition", condition);
}

listenForValidation();
