window.onload = () => {
  const FORM_ADD_BOOK = document.getElementById("form-add-book");

  if (FORM_ADD_BOOK) {
    // Form page
    FORM_ADD_BOOK.addEventListener("submit", handleFormSubmit);
  }
};

// Handle form submit
function handleFormSubmit(event) {
  event.preventDefault();

  const TITLE = document.getElementById("title").value.trim();
  const AUTOR = document.getElementById("autor").value.trim();
  const CATEGORY = document.getElementById("category").value.trim();
  const CONDITION = document.getElementById("condition").value.trim();

  if (validateInputs(TITLE, AUTOR, CATEGORY, CONDITION)) {
    const BOOK = { title: TITLE, autor: AUTOR, category: CATEGORY, condition: CONDITION };
    saveBook(BOOK);
    window.location.href = "form-response.html";
  }
}

// Inputs validation
function validateInputs(title, autor, category, condition) {
  let valid = true;

  if (!title) {
    document.getElementById("error-title-required").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-title-required").style.display = "none";
  }

  if (!autor) {
    document.getElementById("error-autor-required").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-autor-required").style.display = "none";
  }

  if (!category) {
    document.getElementById("error-category-required").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-category-required").style.display = "none";
  }

  if (!condition) {
    document.getElementById("error-condition-required").style.display = "block";
    valid = false;
  } else {
    document.getElementById("error-condition-required").style.display = "none";
  }

  return valid;
}

// Save book on LocalStorage
function saveBook(book) {
  const BOOKS = JSON.parse(localStorage.getItem("books")) || [];
  BOOKS.push(book);
  localStorage.setItem("books", JSON.stringify(BOOKS));
}