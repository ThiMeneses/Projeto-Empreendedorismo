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

