// let inputNameSurname = document.getElementById("input-name-surname");
let inputDropdown = document.getElementById("input-dropdown").value;
let generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", GenerateTiket())

function GenerateTiket() {
    console.log(inputDropdown)
}




// let mainContainer = document.getElementById("main-container");

// let kmQuery = Number(prompt("Benvenuto sul sito, inserisca quanti kilometri deve percorrere:"));
// let ageQuery = Number(prompt("Inserisca la sua età in anni:"));


// let totPrice = kmQuery * 0.21;

// if (ageQuery < 18) {
//     totPrice -= (totPrice * 0.2);
// } else if (ageQuery > 65) {
//     totPrice -= (totPrice * 0.4);
// } else {
//     totPrice = totPrice
// }

// totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;

// if (isNaN(kmQuery) || isNaN(ageQuery)) {
//     mainContainer.innerHTML = `<p>ERRORE, ricaricare la pagina e inserire correttamente i dati</p>`
// } else {
//     mainContainer.innerHTML = `<p>Prezzo biglietto: ${totPriceRounded} &euro;</p>`
// }