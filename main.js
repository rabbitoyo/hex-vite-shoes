import './assets/scss/all.scss';

// register / login
document.addEventListener('DOMContentLoaded', function () {
    
    if (!document.querySelector('.register')) return;

    const navLinks = document.querySelectorAll('.link-verify');
    const btnFB = document.querySelector('.btn-fb');
    const btnApple = document.querySelector('.btn-apple');
    const btnGoogle = document.querySelector('.btn-google');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // 判斷是登入或註冊
            const type = this.dataset.type;
            const actionText = type === 'login' ? '登入' : '註冊';
            btnFB.textContent = `Facebook ${actionText}`;
            btnApple.textContent = `Apple ${actionText}`;
            btnGoogle.textContent = `Google ${actionText}`;
        });
    });
});