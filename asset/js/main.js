//generare biglietto treno. Inserire Nome e Cognome. Inserire Km da percorrere. Inserire range di età. Euro x Km = 0.21. Se si è minorenni si ha uno sconto del 20%. Se si è over 65 si ha uno sconto del 40%. Inserire un posto random. Inserire un codice random.

let sectionTre = document.getElementById("section-3");

let euroPerKm = 0.21;

let generateBtn = document.getElementById("generate-btn");

let offerType = document.getElementById("offer-type");

generateBtn.addEventListener("click", function () {
    let inputNameSurname = document.getElementById("input-name-surname").value
    let inputKm = document.getElementById("input-km").value;
    let inputAge = document.getElementById("input-age").value;

    sectionTre.classList.remove("d-none")

    let totPrice = inputKm * euroPerKm

    if (inputAge == "minor") {
        offerType.append("Sconto minorenne");
        totPrice -= (totPrice * 0.2);
    } else if (inputAge == "over") {
        offerType.append("Sconto over 65");
        totPrice -= (totPrice * 0.4);
    } else {
        offerType.append("Biglietto standard");
        totPrice = totPrice
    }

    let totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;

    randomCarriage = Math.floor(Math.random() * 10) + 1;
    randomCpCode = Math.floor(Math.random() * 100000) + 1;

    document.getElementById("repeat-name").append(`${inputNameSurname}`);

    document.getElementById("carriage-number").append(`${randomCarriage}`);
    document.getElementById("cp-number").append(`${randomCpCode}`);
    document.getElementById("ticket-cost").append(`${totPriceRounded} euro`);
})