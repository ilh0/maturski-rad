function prikaziLekciju(imeLekcije) {
    let divLekcija = document.createElement("div");
    divLekcija.classList.add("lekcija");
    let footer = document.getElementsByClassName("footer")[0];
    document.body.insertBefore(divLekcija, footer);

    let divSlika = document.createElement("div");
    divSlika.classList.add("slika");
    divLekcija.appendChild(divSlika);

    let divImageContainer = document.createElement("div");
    divImageContainer.classList.add("imageContainer");
    divSlika.appendChild(divImageContainer);

    let imgElement = document.createElement("img");
    imgElement.src = `komponente/${imeLekcije}.png`;
    divImageContainer.appendChild(imgElement);

    let divOpisKomponente = document.createElement("div");
    divOpisKomponente.classList.add("opisKomponente");
    divLekcija.appendChild(divOpisKomponente);

    let h3Element = document.createElement("h3");
    h3Element.innerText = (imeLekcije.length === 3) ? imeLekcije.toUpperCase() : imeLekcije.charAt(0).toUpperCase() + imeLekcije.substring(1);
    divOpisKomponente.appendChild(h3Element);

    let pElement = document.createElement("p");
    fetch(`lekcije/${imeLekcije}.txt`)
        .then(response => response.text())
        .then(stringData => {
            pElement.innerText = stringData;
        })
        .catch(error => console.error('Error:', error));
    divOpisKomponente.appendChild(pElement);

    let oldContent = document.getElementsByClassName("content")[0];
    oldContent.innerHTML = "";
}






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


if (document.getElementById("getStarted") !== null) {
    document.getElementById("getStarted").onclick = function () {
        location.href = "lekcije.html";
    };    
}

document.getElementById("closepopup").addEventListener('click', function(){
    document.getElementById("popupOnama").style.display = "none";
})

document.getElementById("oonama").addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("popupOnama").style.display = "block";
})



