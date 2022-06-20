//generare biglietto treno. Inserire Nome e Cognome. Inserire Km da percorrere. Inserire range di età. Euro x Km = 0.21. Se si è minorenni si ha uno sconto del 20%. Se si è over 65 si ha uno sconto del 40%. Inserire un posto random. Inserire un codice random.

let section3 = document.getElementById('section-3');
let generatBtn = document.getElementById('generate-btn');

let inputNameSurname = document.getElementById('input-name-surname').value;
let inputKm = document.getElementById('input-km').value;
let inputAge = document.getElementById('input-age').value;

generatBtn.addEventListener("click", function() {
    if( inputNameSurname !== undefined && inputKm !== undefined && inputAge !== undefined ) {
        section3.classList.remove('d-none');
    
        document.getElementById('repeat-name').append(`${inputNameSurname}`);
    
        let sconto;
        if( inputAge == "minor") {
            document.getElementById('offer-type').append("Biglietto ridotto 20%");
            sconto = 0.2;
        } else if( inputAge == "normal" ){
            document.getElementById('offer-type').append("Biglietto standard");
            sconto = 1;
        } else if( inputAge == "over" ){
            document.getElementById('offer-type').append("Biglietto over 65");
            sconto = 0.4;
        }
    
        let numeroCarrozza = Math.floor(Math.random() * 10) + 1;
        document.getElementById('carriage-number').append(`${numeroCarrozza}`);
    
        let numeroCp = Math.floor(Math.random() * 10000) + 1;
        document.getElementById('cp-number').append(`${numeroCp}`);
    
        let finalCost = Math.round(( (inputKm * 0.2 * sconto) + Number.EPSILON) * 100) / 100;
        document.getElementById('ticket-cost').append(`${finalCost}`);
    } else {
        alert("Errore! compilare correttamente i campi.");
    }
});


