import './assets/scss/all.scss';

document.addEventListener("DOMContentLoaded", function () {

    // ---------- 首頁判斷：顯示 nav ----------
    const nav = document.querySelector(".header .nav");
    if (nav) {
        const path = location.pathname;
        const isHomePage =
        path.includes("index.html") || path === "/hex-vite-shoes/";

        if (isHomePage) {
            nav.classList.add("d-sm-block");
        } else {
            nav.classList.remove("d-sm-block");
        }
    }

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
    function initResponsiveSwiper({ selector, options = {}, maxWidth = null }) {
        const container = document.querySelector(selector);
        if (!container) return;

        let swiperInstance = null;

        function toggleSwiper() {
            const screenWidth = window.innerWidth;

            // 無響應式需求：直接初始化一次
            if (!maxWidth) {
                if (!swiperInstance) {
                    swiperInstance = new Swiper(selector, options);
                }
                return;
            }

            // 有 maxWidth 時才做響應式切換
            if (screenWidth < maxWidth && !swiperInstance) {
                swiperInstance = new Swiper(selector, options);
            } else if (screenWidth >= maxWidth && swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }

        toggleSwiper();
        if (maxWidth) {
            window.addEventListener("resize", toggleSwiper);
        }
    }

    // ---------- sales-banner ----------
    initResponsiveSwiper({
        selector: ".sales-banner",
        options: {
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        }
    });

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
            slidesPerView: 1.16
        },
    });

    // ---------- outfit-images ----------
    initResponsiveSwiper({
        selector: ".outfit-images",
        maxWidth: 576,
        options: {
            slidesPerView: 1.16,
        },
    });
});