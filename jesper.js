//hittar massa olika html element
const allInputForms = document.querySelectorAll('input'); //hittar alla inputfält (får med några för kassan också)
const clearFormButton = document.querySelector('#clearFormButton'); //hittar töm forumlär fältet
const personNummerInput = document.querySelector('#personnum'); //hittar personnummerfältet
const creditCardInputs = document.querySelectorAll('input[data-operator="creditcard"'); //hittar alla creditkortsfält
const selectPaymentMethod = document.querySelector('#paymentMethod'); //hittar val av betalmetod
const formErrorField = document.querySelectorAll('.errorInput'); //hittar fält för felmeddelanden 
const submitFormButton = document.querySelector('.btn'); //hittar continue to... knappen
const zipcodeInput = document.querySelector('#zip');

//boolean variablar för check av formulär
//Alla godkända aktiveras knappen submit!
function checkValidForm() {
    let validFirstName = 0;
    let validLastName = null;
    let validEmail = null;
    let validAddress = null;
    let validCity = null;
    let validZip = zipcodeInput.formNoValidate;
    let validPersonnummer = personNummerInput.formNoValidate;
    console.log(validZip)
    console.log(validPersonnummer)
    
    if (validFirstName && validLastName && validEmail && validAddress && validCity && validZip && validPersonnummer) {
        submitFormButton.removeAttribute('disabled');
    }
    else {
        
    }
}



//Kopplar funktioner till tryck/changes
clearFormButton.addEventListener('click', deleteAllFormInput); //kopplar funktion till knapptryck av "rensa formulär"
selectPaymentMethod.addEventListener('change', showSelectedPaymentMethod); //kopplar funktion till val av betalmetod
personNummerInput.addEventListener('change', () => { 
    checkNumberIfOk(personNummerInput, 10, 1) //kopplar funktion till on change vid personnrfältet
} );
zipcodeInput.addEventListener('change', () => {
    checkNumberIfOk(zipcodeInput, 5, 0) //kopplar funktion till on change vid zipcode
} );

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
}

//funktion för a validera alla typer av nummer
//inputField = vilket inputfält vi får datan ifrån
//numberAmount = antal tecken/siffror som är godkänt
//errorField = 0 för kontakt info 1 för betalinfo
const checkNumberIfOk = function(inputField, numberAmount, errorField){    
     let numbers = /^[0-9]+$/;      
     if (inputField.value.match(numbers) && inputField.value.length == numberAmount){
         formErrorField[errorField].textContent = null;
         inputField.formNoValidate = true; //skickar tillbaka true om det är godkänt
     }
     else {
         formErrorField[errorField].textContent = 'Fel angivet ' + inputField.name;
         inputField.formNoValidate = false; //skickar tillbaka false om det är icke godkänt
    }
    checkValidForm() //updaterar våra boolean variablar ifall saker är godkänt eller ej
 }
    