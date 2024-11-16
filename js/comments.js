let table = [
    { name: "Maite", comment: "Una pasada, me encanta!" },
    { name: "Miguel", comment: "Una pasada, me encanta 2!" },
    { name: "Jose", comment: "Una pasada, me encanta 3!" },
    { name: "Corina", comment: "Una pasada, me encanta 4!" },
    { name: "Ana", comment: "Una pasada, me encanta 5!" }
];

window.onload = loadEvents;

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
function newComment(event){
    event.preventDefault();

let nameAdded = document.getElementById("name").value;
let commentAdded = document.getElementById("comment").value;


    let newComment = {name: nameAdded, comment: commentAdded}
    table.push(newComment);
}