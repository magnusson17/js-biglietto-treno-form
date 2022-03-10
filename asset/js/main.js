let inputNameSurname;
let inputKm;
let inputAge;

let totPrice;
let totPriceRounded;

let sectionTre = document.getElementById("section-3");

let euroPerKm = 0.21;

let generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
    inputNameSurname = document.getElementById("input-name-surname").value
    inputKm = document.getElementById("input-km").value;
    inputAge = document.getElementById("input-age").value;

    // if (isNaN(inputKm) || isNaN(inputAge)) {
    //     allert("ERRORE, ricaricare la pagina")
    // }

    sectionTre.classList.toggle("d-none")

    totPrice = inputKm * euroPerKm

    if (inputAge < 18) {
        totPrice -= (totPrice * 0.2);
    } else if (inputAge > 65) {
        totPrice -= (totPrice * 0.4);
    } else {
        totPrice = totPrice
    }

    totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;

    randomCarriage = Math.floor(Math.random() * 10) + 1;
    randomCpCode = Math.floor(Math.random() * 100000) + 1;

    document.getElementById("repeat-name").append(`${inputNameSurname}`);
    document.getElementById("offer-type").append(`Biglietto standard`);
    document.getElementById("carriage-number").append(`${randomCarriage}`);
    document.getElementById("cp-number").append(`${randomCpCode}`);
    document.getElementById("ticket-cost").append(`${totPriceRounded} euro`);
})





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