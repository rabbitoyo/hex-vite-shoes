import './assets/scss/all.scss';

document.addEventListener("DOMContentLoaded", function () {

    // ---------- register / login ----------
    const registerSection = document.querySelector(".register");
    if (registerSection) {
        const navLinks = document.querySelectorAll(".link-verify");
        const btnFB = document.querySelector(".btn-fb");
        const btnApple = document.querySelector(".btn-apple");
        const btnGoogle = document.querySelector(".btn-google");

        navLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                navLinks.forEach((l) => l.classList.remove("active"));
                this.classList.add("active");

                const type = this.dataset.type;
                const actionText = type === "login" ? "登入" : "註冊";

                btnFB.textContent = `Facebook ${actionText}`;
                btnApple.textContent = `Apple ${actionText}`;
                btnGoogle.textContent = `Google ${actionText}`;
            });
        });
    }

    // ---------- 通用 Swiper 啟用函式 ----------
    function initResponsiveSwiper({ selector, maxWidth, options }) {
        const container = document.querySelector(selector);
        if (!container) return;

        let swiperInstance = null;

        function toggleSwiper() {
            const screenWidth = window.innerWidth;

            if (screenWidth < maxWidth && !swiperInstance) {
                swiperInstance = new Swiper(selector, options);
            } else if (screenWidth >= maxWidth && swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }

        toggleSwiper();
        window.addEventListener("resize", toggleSwiper);
    }

    // ---------- product-images ----------
    initResponsiveSwiper({
        selector: ".product-images",
        maxWidth: 992,
        options: {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        },
    });

    // ---------- best-seller ----------
    initResponsiveSwiper({
        selector: ".best-seller .product-list",
        maxWidth: 576,
        options: {
            slidesPerView: 1.16,
        },
    });
});