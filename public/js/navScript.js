let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.classList.add('hidden');
        navbar.style.backgroundColor = 'rgba(128, 128, 128, 0.8)'; // Tinted gray background
    } else {
        // Scroll up
        navbar.classList.remove('hidden');
        navbar.style.backgroundColor = ''; // Reset background color
    }
    lastScrollTop = scrollTop;
});
