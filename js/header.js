// header.js

document.addEventListener("DOMContentLoaded", function() {
    fetch("/html/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("headerContainer").innerHTML = data;
    });
});
