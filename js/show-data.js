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

function editBook(event) {
  const INDEX = event.target.dataset.index;
  const BOOKS = JSON.parse(localStorage.getItem("books"));
  const BOOK = BOOKS[INDEX];

  // Show the modal
  const MODAL = document.getElementById("edit-modal");
  MODAL.style.display = "block";

  // Populate the form with the selected book's data
  document.getElementById("edit-title").value = BOOK.title;
  document.getElementById("edit-autor").value = BOOK.autor;
  document.getElementById("edit-category").value = BOOK.category;
  document.getElementById("edit-condition").value = BOOK.condition;

  // Handle form submission
  const FORM = document.getElementById("edit-form");
  FORM.onsubmit = function (e) {
    e.preventDefault();

    // Update the book with the new values
    BOOKS[INDEX].title = document.getElementById("edit-title").value.trim();
    BOOKS[INDEX].autor = document.getElementById("edit-autor").value.trim();
    BOOKS[INDEX].category = document.getElementById("edit-category").value.trim();
    BOOKS[INDEX].condition = document.getElementById("edit-condition").value;

    // Save changes to localStorage and update the list
    localStorage.setItem("books", JSON.stringify(BOOKS));
    displayBooks();

    // Close the modal
    MODAL.style.display = "none";
  };

  // Close the modal when clicking on the close button
  document.getElementById("close-modal").onclick = function () {
    MODAL.style.display = "none";
  };

  // Close the modal when clicking outside the modal content
  window.onclick = function (event) {
    if (event.target === MODAL) {
      MODAL.style.display = "none";
    }
  };
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
