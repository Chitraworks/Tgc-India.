window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;
    let headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight) {
        header.style.backgroundColor = '#872854';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});