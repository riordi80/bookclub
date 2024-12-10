window.onload = () => {
  const DATA_CONTAINER = document.querySelector(".data-form-container");
  const BOOK_LIST_CONTAINER = document.getElementById("book-list");

  if (DATA_CONTAINER) {
    displayLastBook();
  }

  if (BOOK_LIST_CONTAINER) {
    displayBooks();
  }
};

// Show last added book
function displayLastBook() {
  const BOOKS = JSON.parse(localStorage.getItem("books")) || [];
  if (BOOKS.length === 0) {
    document.querySelector(".data-form-container").innerHTML = "<p>No has añadido libros aún.</p>";
    return;
  }

  const LAST_BOOK = BOOKS[BOOKS.length - 1];
  document.getElementById("title").textContent = LAST_BOOK.title;
  document.getElementById("autor").textContent = LAST_BOOK.autor;
  document.getElementById("category").textContent = LAST_BOOK.category;
  document.getElementById("condition").textContent = LAST_BOOK.condition;
}

// Show all books
function displayBooks() {
  const BOOKS = JSON.parse(localStorage.getItem("books")) || [];
  const BOOK_LIST_CONTAINER = document.getElementById("book-list");

  BOOK_LIST_CONTAINER.innerHTML = ""; // Clear list. Prevent duplication.

  if (BOOKS.length === 0) {
    BOOK_LIST_CONTAINER.innerHTML = "<p>No has añadido libros aún.</p>";
    return;
  }

  BOOKS.forEach((book, index) => {
    const BOOK_ITEM = document.createElement("div");
    BOOK_ITEM.classList.add("book-item", "p-3", "mb-2");
    BOOK_ITEM.innerHTML = `
      <p><strong>Título:</strong> ${book.title}</p>
      <p><strong>Autor:</strong> ${book.autor}</p>
      <p><strong>Categoría:</strong> ${book.category}</p>
      <p><strong>Estado:</strong> ${book.condition}</p>
      <button class="btn btn-warning btn-sm me-2 edit-button" data-index="${index}">Editar</button>
      <button class="btn btn-danger btn-sm delete-button" data-index="${index}">Eliminar</button>
    `;

    BOOK_LIST_CONTAINER.appendChild(BOOK_ITEM);
  });

  // Add events to edit and delete buttons
  document.querySelectorAll(".edit-button").forEach((btn) =>
    btn.addEventListener("click", editBook)
  );
  document.querySelectorAll(".delete-button").forEach((btn) =>
    btn.addEventListener("click", deleteBook)
  );
}

// Edit book
function editBook(event) {
  const INDEX = event.target.dataset.index;
  const BOOKS = JSON.parse(localStorage.getItem("books"));
  const BOOK = BOOKS[INDEX];

  const NEW_TITLE = prompt("Nuevo título:", BOOK.title);
  const NEW_AUTOR = prompt("Nuevo autor:", BOOK.autor);
  const NEW_CATEGORY = prompt("Nueva categoría:", BOOK.category);
  const NEW_CONDITION = prompt("Nuevo estado:", BOOK.condition);

  if (NEW_TITLE) BOOKS[INDEX].title = NEW_TITLE.trim();
  if (NEW_AUTOR) BOOKS[INDEX].autor = NEW_AUTOR.trim();
  if (NEW_CATEGORY) BOOKS[INDEX].category = NEW_CATEGORY.trim();
  if (NEW_CONDITION) BOOKS[INDEX].condition = NEW_CONDITION.trim();

  localStorage.setItem("books", JSON.stringify(BOOKS));
  displayBooks(); // Update list
}

// Delete book
function deleteBook(event) {
  const INDEX = event.target.dataset.index;
  const BOOKS = JSON.parse(localStorage.getItem("books"));

  if (confirm("¿Seguro que deseas eliminar este libro?")) {
    BOOKS.splice(INDEX, 1);
    localStorage.setItem("books", JSON.stringify(BOOKS));
    displayBooks(); // Update list
  }
}
