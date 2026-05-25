// 1. Logica pentru Meniul Hamburger (Mobil)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Logica JavaScript pentru Secțiunea de Prezentare Interactivă (Tabs)
function schimbaTab(event, idTab) {
    const continente = document.getElementsByClassName("tab-continut");
    for (let i = 0; i < continente.length; i++) {
        continente[i].classList.remove("active");
    }

    const butoane = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < butoane.length; i++) {
        butoane[i].classList.remove("active");
    }

    document.getElementById(idTab).classList.add("active");
    event.currentTarget.classList.add("active");
}
