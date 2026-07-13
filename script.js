// ==============================
// SAYEEM IT SOLUTION
// script.js
// ==============================

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

// Scroll To Top
topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// ==============================
// Search Product
// ==============================

const searchInput = document.querySelector(".search-box input");

const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    products.forEach(function (item) {

        let text = item.innerText.toLowerCase();

        if (text.indexOf(value) > -1) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});

// ==============================
// Sticky Navbar
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 120) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

// ==============================
// Fade Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
