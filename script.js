// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);

});

// ==========================
// HEADER SCROLL
// ==========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});

// ==========================
// MENU MOBILE
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});

// ==========================
// CONTADORES
// ==========================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;
    let count = 0;

    const update = () => {

        const increment = target / 120;

        count += increment;

        if (count < target) {

            counter.innerText = Math.floor(count);
            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);
            counterObserver.unobserve(entry.target);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".card, .feature, .about-image, .about-text, .stat-card"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ==========================
// GALERIA ZOOM
// ==========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");

        overlay.innerHTML = `
            <img src="${img.src}">
            <span class="close-image">&times;</span>
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });

});

// ==========================
// EFEITO PARALLAX HERO
// ==========================

window.addEventListener("mousemove", (e) => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

});

// ==========================
// BOTÕES COM RIPPLE
// ==========================

document.querySelectorAll(
    ".btn-primary,.btn-secondary"
).forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(
            rect.width,
            rect.height
        );

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// TEXTO DIGITANDO HERO
// ==========================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    heroTitle.style.opacity = "0";

    setTimeout(() => {

        heroTitle.style.transition = "1s";
        heroTitle.style.opacity = "1";

    }, 400);

}

// ==========================
// BOTÃO WHATSAPP PULSANDO
// ==========================

const whatsapp = document.querySelector(".whatsapp");

setInterval(() => {

    whatsapp.style.transform = "scale(1.15)";

    setTimeout(() => {
        whatsapp.style.transform = "scale(1)";
    }, 300);

}, 3000);

// ==========================
// ANO AUTOMÁTICO
// ==========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}