let sectionTre = document.getElementById("section-3");

let euroPerKm = 0.21;

let generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
    let inputNameSurname = document.getElementById("input-name-surname").value
    let inputKm = document.getElementById("input-km").value;
    let inputAge = document.getElementById("input-age").value;

    sectionTre.classList.toggle("d-none")

    let totPrice = inputKm * euroPerKm

    if (inputAge < 18) {
        totPrice -= (totPrice * 0.2);
    } else if (inputAge > 65) {
        totPrice -= (totPrice * 0.4);
    } else {
        totPrice = totPrice
    }

    let totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;

    randomCarriage = Math.floor(Math.random() * 10) + 1;
    randomCpCode = Math.floor(Math.random() * 100000) + 1;

    document.getElementById("repeat-name").append(`${inputNameSurname}`);
    document.getElementById("offer-type").append(`Biglietto standard`);
    document.getElementById("carriage-number").append(`${randomCarriage}`);
    document.getElementById("cp-number").append(`${randomCpCode}`);
    document.getElementById("ticket-cost").append(`${totPriceRounded} euro`);
})