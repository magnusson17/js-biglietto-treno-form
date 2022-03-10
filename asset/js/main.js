let mainContainer = document.getElementById("main-container");

//con prompt ottengo delle string, con Number() le trasformo in number: (in questo caso Number() è meglio di parseInt())
    // let kmQuery = Number(prompt("Benvenuto sul sito, inserisca quanti kilometri deve percorrere:"));
    // let ageQuery = Number(prompt("Inserisca la sua età in anni:"));

//il prezzo è di 0,21 euro X km
let totPrice = kmQuery * 0.21;

//sconto 20% per minorenni e 40% per over 65
if (ageQuery < 18) {
    totPrice -= (totPrice * 0.2);
} else if (ageQuery > 64) {
    totPrice -= (totPrice * 0.4);
} else {
    totPrice = totPrice
}

//arrotondo totPrice a 2 cifre decimali
totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;

//risultato finale
if (isNaN(kmQuery) || isNaN(ageQuery)) {
    mainContainer.innerHTML = `<p>ERRORE, ricaricare la pagina e inserire correttamente i dati</p>`
} else {
    mainContainer.innerHTML = `<p>Prezzo biglietto: ${totPriceRounded} &euro;</p>`
}