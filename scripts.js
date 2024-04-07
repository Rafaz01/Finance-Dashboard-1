// Change theme
const themeToggler = document.querySelector(".theme-toggler");

// Change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
    themeToggler.querySelector('span').classList.toggle('active');
});
