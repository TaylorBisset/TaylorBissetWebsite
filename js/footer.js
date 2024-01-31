// footer.js

document.addEventListener("DOMContentLoaded", function() {
    fetch("/html/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footerContainer").innerHTML = data;

        // Get the current year
        const currentYear = new Date().getFullYear();

        // Update the copyright text in footer
        document.getElementById('copyright').textContent = `© ${currentYear} TaylorBisset.com`;

    });
});
