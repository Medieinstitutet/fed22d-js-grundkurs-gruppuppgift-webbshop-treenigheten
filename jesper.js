//hittar massa olika html element
const allInputForms = document.querySelectorAll('input'); //hittar alla inputfält (får med några för kassan också)
const clearFormButton = document.querySelector('#clearFormButton'); //hittar töm forumlär fältet
const personNummerInput = document.querySelector('#personnum'); //hittar personnummerfältet
const creditCardInputs = document.querySelectorAll('input[data-operator="creditcard"'); //hittar alla creditkortsfält
const selectPaymentMethod = document.querySelector('#paymentMethod'); //hittar val av betalmetod
const formErrorField = document.querySelectorAll('.errorInput'); //hittar fält för felmeddelanden 
const submitFormButton = document.querySelector('.btn'); //hittar continue to... knappen
console.log(submitFormButton);

//Kopplar funktioner till tryck/changes
clearFormButton.addEventListener('click', deleteAllFormInput); //kopplar funktion till knapptryck av "rensa formulär"
selectPaymentMethod.addEventListener('change', showSelectedPaymentMethod); //kopplar funktion till val av betalmetod
personNummerInput.addEventListener('change', checkPersonNummerIfOk);//kopplar funktion till on change vid personnrfältet

//boolean variablar för check av formulär
let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validAddress = false;
let validCity = false;
let validZip = false;
let validPersonnummer = false;

//funktion som loopar igenom alla input och sätter value till 0 = null
function deleteAllFormInput() {
    //från 3 till -1 för att endast påverka forumlären
    for (i = 3; i < allInputForms.length-1; i++) {
        allInputForms[i].value = null;
    }
}

//funktion som körs då value på selectPaymentMethod ändras.
//funktionen hittar även "label" till valt inputfält med hjälp av previousElementSibling
function showSelectedPaymentMethod() {
    if (selectPaymentMethod.value == 'faktura'){ //gömer kreditkort
        for (i = 0; i < creditCardInputs.length; i++) {
            creditCardInputs[i].hidden = true;
            creditCardInputs[i].previousElementSibling.hidden = true;
        }
        personNummerInput.previousElementSibling.hidden = false; //gör personnummerfältet synligt och 
        personNummerInput.hidden = false;
    }
    else if (selectPaymentMethod.value == 'kort'){ //döljer personnr
        personNummerInput.hidden = true;
        personNummerInput.previousElementSibling.hidden = true; //gör kreditkort synligt
        for (i = 0; i < creditCardInputs.length; i++) {
            creditCardInputs[i].hidden = false;
            creditCardInputs[i].previousElementSibling.hidden = false;
        }        
    }
    else { //döljer alla betalningsätt
        personNummerInput.hidden = true;
        personNummerInput.previousElementSibling.hidden = true;
        for (i = 0; i < creditCardInputs.length; i++) {
            creditCardInputs[i].hidden = true;
            creditCardInputs[i].previousElementSibling.hidden = true;
        }
    }
}

//funktion för a validera personnr
function checkPersonNummerIfOk(){    
    let numbers = /^[0-9]+$/; //regEx siffror magi
    //om personnr endast innhåller siffror + är exakt 10 siffror långt
    if (personNummerInput.value.match(numbers) && personNummerInput.value.length == 10){
        validPersonnummer = true;
        console.log(validPersonnummer)
        formErrorField[1].textContent = null;
    }
    else { //a11y = ska fel skrivas i början av formuläret
        validPersonnummer = false;
        formErrorField[1].textContent = 'Fel angivet personnummer'
    }
    formIsAllValid();
}

function formIsAllValid() {
    if (validFirstName && validLastName && validEmail && validAddress && validCity && validZip && validPersonnummer) {
        submitFormButton.removeAttribute('disabled');
    }
    else {
        submitFormButton.removeAttribute('disabled', '');
    }

}

    