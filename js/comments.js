window.onload = loadEvents;

// Comments Table
let table = [
  { name: "María G.", comment: "Un club increíble para los amantes de la lectura. Encuentro recomendaciones únicas y siempre tengo acceso a libros que me sorprenden. Además, el sistema de recompensas por registrar libros es genial. ¡Súper recomendado!" },
  { name: "Luis P.", comment: "Esta plataforma es perfecta para compartir mis lecturas y descubrir nuevos títulos. Me encanta la comunidad activa y las recompensas que me motivan a seguir explorando. ¡Un lugar ideal para lectores apasionados!" },
  { name: "Sofía R.", comment: "Desde que me uní al club, no solo he ampliado mi biblioteca, sino que también he conocido a otros lectores que comparten mis intereses. El diseño de la web es fácil de usar y las promociones de libros son inmejorables." },
  { name: "Carlos M.", comment: "¡Un servicio espectacular! Me encanta la idea de registrar libros y recibir recompensas para seguir adquiriendo más. Es una forma de fomentar la lectura y conectar con otros entusiastas. ¡10/10!" },
  { name: "Ana T.", comment: "Gracias a este club he descubierto autores y géneros que jamás hubiera explorado por mi cuenta. La experiencia es súper interactiva, y el soporte es muy amable. ¡Un sitio que todo lector debe probar!" }
];

function loadEvents() {
  document.getElementById("show-comments").addEventListener("click", showComments, false);
  document.getElementById("new-comment").addEventListener("submit", newComment, false);
}

function showComments() {
  let tableBody = document.getElementById("comments-table");
  let tableFull = "";

  for (let i = 0; i < table.length; i++) {
    tableFull += "<tr><td>" + table[i].name + "</td><td>" + table[i].comment + "</td></tr>";
  }
  tableBody.innerHTML = tableFull;
}

function newComment(event) {
  event.preventDefault();

  let nameAdded = document.getElementById("name").value;
  let commentAdded = document.getElementById("comment").value;


  let newComment = { name: nameAdded, comment: commentAdded }

  table.push(newComment);

}