const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');

elSiteThemeToggler.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
})

localStorage.setItem('theme', 'dark');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}