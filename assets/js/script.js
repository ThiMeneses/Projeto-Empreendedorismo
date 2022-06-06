function clicou1() {
    if (document.querySelector('.slide').classList.contains('clicou1')) {
        document.querySelector('.slide').classList.remove('clicou1');
        document.querySelector('.slide').classList.add('clicou3');
    } else if (document.querySelector('.slide').classList.contains('clicou2')) {
        document.querySelector('.slide').classList.remove('clicou2');
        document.querySelector('.slide').classList.add('clicou1');
    } else {
        document.querySelector('.slide').classList.contains('clicou3');
        document.querySelector('.slide').classList.remove('clicou3');
        document.querySelector('.slide').classList.add('clicou2');
    }
}

function clicou2() {
    if (document.querySelector('.slide').classList.contains('clicou1')) {
        document.querySelector('.slide').classList.remove('clicou1');
        document.querySelector('.slide').classList.add('clicou2');
    } else if (document.querySelector('.slide').classList.contains('clicou2')) {
        document.querySelector('.slide').classList.remove('clicou2');
        document.querySelector('.slide').classList.add('clicou3');
    } else {
        document.querySelector('.slide').classList.contains('clicou3');
        document.querySelector('.slide').classList.remove('clicou3');
        document.querySelector('.slide').classList.add('clicou1');
    }
}
function scrollToggle() {
    const element = document.querySelector('#scrollTopButton');
    if (window.scrollY == 0) {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

window.addEventListener('scroll', scrollToggle);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function menuToggle() {
    let menu = {
        show: "calc(100vh - 100px)",
        hidden: "0px"
    }
    let element = document.getElementById('menu-area');

    if (element.style.height == menu.show) {
        element.style.display = 'none';
        element.style.height = menu.hidden;
    } else {
        element.style.display = 'flex';
        element.style.height = menu.show;
    };
};



