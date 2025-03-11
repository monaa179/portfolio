document.addEventListener("DOMContentLoaded", function() {
    // Effet d'écriture dynamique sur le titre de l'accueil
    const textElement = document.querySelector(".hero-section h1");
    const text = "Bienvenue sur mon portfolio";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    textElement.innerHTML = ""; // Efface le texte avant de commencer
    typeWriter();

    // Effet d'apparition au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
    
    // Changement de couleur de la navbar au scroll
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    
    // Animation de survol des cartes de projets
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });

    // Défilement fluide des liens de navigation
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const skillCards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    skillCards.forEach(card => observer.observe(card));
});

