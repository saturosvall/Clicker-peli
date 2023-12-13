// Tapahtumankäsittelijät
document.getElementById('klik').addEventListener('submit', lisaaKlikkaus);
document.getElementById('tok').addEventListener('submit', lisaaTokkays);
document.getElementById('nollaus').addEventListener('submit', nollaaKaikki);
document.getElementById('aloita').addEventListener('submit', start);

// Ajanottofunktio
function start(event) {
    event.preventDefault()
    var timeleft = 10;
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("time").textContent = timeleft == 0 ? 'Aika loppui!' : timeleft+' sekuntia';
        if(timeleft === 0)
            clearInterval(downloadTimer);
            nollaaKaikki();
        },1000);
}

// Määritellään klikkaukset
let clicks = 0;
let tocks = 0;

// Klikkauksen funktio
function lisaaKlikkaus(event) {
    event.preventDefault()
    clicks ++;
    document.getElementById("klikkaukset").innerHTML = "Klikkausten määrä: " + clicks;
    if(clicks > 5 ) {
        piirraKuva0();
    }
}

// Tökkäyksen funktio
function lisaaTokkays(event) {
    event.preventDefault()
    tocks ++;
    document.getElementById("tokkaykset").innerHTML = "Tökkäysten määrä: " + tocks;

    if(tocks > 5 && tocks < 10) {
        piirraKuva();
    } else if(tocks > 9 && tocks <15) {
        piirraKuva2();
    } else if(tocks > 14 && tocks < 20) {
        piirraKuva3();
    } else if (tocks > 19 ) {
        piirraKuva4();
    }
    }

// Nollausfunktio
function nollaaKaikki(event) {
    event.preventDefault()
    tocks = 0;
    clicks = 0;
    const kuva = document.getElementById('kuva');
    kuva.src = "img/pic.jpg";
    document.getElementById("klikkaukset").innerHTML = "Klikkausten määrä: " + clicks;
    document.getElementById("tokkaykset").innerHTML = "Tökkäysten määrä: " + tocks;
}

// Funktiot kuvien hahmottumiselle
function piirraKuva0() {
    const kuva = document.getElementById('kuva');
    tocks = 0;
    document.getElementById("tokkaykset").innerHTML = "Tökkäysten määrä: " + tocks;
    kuva.src = "img/pic.jpg";
}

function piirraKuva() {
    const kuva = document.getElementById('kuva');
    kuva.src = "img/pic1.jpg";
}

function piirraKuva2() {
    const kuva = document.getElementById('kuva');
    kuva.src = "img/pic2.jpg";
}

function piirraKuva3() {
    const kuva = document.getElementById('kuva');
    kuva.src = "img/pic3.jpg";
}

function piirraKuva4() {
    const kuva = document.getElementById('kuva');
    kuva.src = "img/pic4.jpg";
}