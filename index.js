const hamburger = document.getElementById('hamburger');
const navbarNav = document.querySelector('.navbarMenu ul');

hamburger.addEventListener('click', function () {
    navbarNav.classList.toggle('show');
});

const aktivnaStranica = window.location.pathname;

const navLinkovi = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${aktivnaStranica}`)){
        link.classList.add('active');
    }
})

document.getElementById("getStarted").onclick = function () {
    location.href = "lekcije.html";
};

