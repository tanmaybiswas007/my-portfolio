// ========================================
// Tanmoy Biswas - Portfolio JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // 1. Mobile navigation
    const menuToggle = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        const closeMenu = () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Close menu with the Escape key
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") closeMenu();
        });
    }


    // 2. Project category filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.dataset.filter;

            projectCards.forEach(card => {
                card.hidden =
                    selectedCategory !== "all" &&
                    card.dataset.category !== selectedCategory;
            });
        });
    });


    // 3. Automatically update footer year
    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 4. Highlight navigation link for the visible section
    //    (smooth scrolling is handled by CSS: html { scroll-behavior: smooth })
    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                navigationLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            });
        }, {
            rootMargin: "-35% 0px -55% 0px"
        });

        // Typewriter animation for navigation logo
const logoText = "Tanmoy Biswas";
const typingElement = document.getElementById("typing-logo");

let charIndex = 0;
let isDeleting = false;

function typeLogo() {

    typingElement.textContent = logoText.substring(0, charIndex);

    if (!isDeleting && charIndex < logoText.length) {

        charIndex++;
        setTimeout(typeLogo, 180);

    } else if (isDeleting && charIndex > 0) {

        charIndex--;
        setTimeout(typeLogo, 100);

    } else {

        isDeleting = !isDeleting;
        setTimeout(typeLogo, 800);

    }
}

typeLogo();

        sections.forEach(section => observer.observe(section));
    }

});

document.getElementById("year").textContent =
    new Date().getFullYear();
