document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });

    if (document.querySelector('.wrapper')) {
        const wrapper = document.querySelector('.wrapper-holder');
        const slides = document.querySelectorAll('[id^="slider-img-"]');
        const buttons = document.querySelectorAll('.button-container .button');
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 5000);

        function goToSlide(n) {
            wrapper.style.transform = `translateX(-${n * 100}%)`;
            buttons.forEach((btn, index) => {
                btn.classList.toggle('active', index === n);
            });
            currentSlide = n;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }

        buttons.forEach((button, i) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                goToSlide(i);
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });

        goToSlide(0);
    }
});