


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const serviceToggle = document.querySelector(".mobile-menu li a.toggle");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("open");
    });

    serviceToggle.addEventListener("click", function (e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        parentLi.classList.toggle("open");
    });
});