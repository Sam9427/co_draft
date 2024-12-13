const text = "Are you chronically online?...";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

function navigateToMain() {
    document.querySelector(".landing-page").style.display = "none";
    document.querySelector(".main-page").style.display = "block";
}

function showTab(index) {
    document.querySelectorAll(".tab").forEach((tab, idx) => {
        tab.classList.toggle("active", idx === index);
    });
}

window.onload = typeEffect;
