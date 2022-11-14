//kollar så javascripten är kopplad
console.log("hello")

//hittar alla inputfält (får med några för kassan också)
const allInputForms = document.querySelectorAll('input');
//hittar töm forumlär fältet
const clearFormButton = document.querySelector('#clearFormButton');

//kopplar funktion till knapptryck av "rensa formulär"
clearFormButton.addEventListener('click', deleteAllFormInput);

//funktion som loopar igenom alla input och sätter value till 0 = null
function deleteAllFormInput() {
    //från 3 till -1 för att endast påverka forumlären
    for (i = 3; i < allInputForms.length-1; i++) {
        allInputForms[i].value = null;
    }
}

//hittar personnummerfältet
const personNummerInput = document.querySelector('#personnum');

//hittar alla creditkortsfält
const creditCardInputs = document.querySelectorAll('input[data-operator="creditcard"');

//hittar val av betalmetod
const selectPaymentMethod = document.querySelector('#paymentMethod');

//kopplar funktion till val av betalmetod
selectPaymentMethod.addEventListener('change', showSelectedPaymentMethod);

//funktion som körs då value på selectPaymentMethod ändras.
//funktionen hittar även "label" till valt inputfält med hjälp av previousElementSibling
function showSelectedPaymentMethod() {
    if (selectPaymentMethod.value == 'faktura'){
        //gömer kreditkort
        for (i = 0; i < creditCardInputs.length; i++) {
            creditCardInputs[i].hidden = true;
            creditCardInputs[i].previousElementSibling.hidden = true;
        }
        //gör personnummerfältet synligt och 
        personNummerInput.previousElementSibling.hidden = false;
        personNummerInput.hidden = false;
    }
    else if (selectPaymentMethod.value == 'kort'){
        //döljer personnr
        personNummerInput.hidden = true;
        personNummerInput.previousElementSibling.hidden = true;
        //gör kreditkort synligt
        for (i = 0; i < creditCardInputs.length; i++) {
            creditCardInputs[i].hidden = false;
            creditCardInputs[i].previousElementSibling.hidden = false;
        }        
    }
    else {
        //döljer alla betalningsätt
        personNummerInput.hidden = true;
        personNummerInput.previousElementSibling.hidden = true;
        for (i = 0; i < creditCardInputs.length; i++) {
            creditCardInputs[i].hidden = true;
            creditCardInputs[i].previousElementSibling.hidden = true;
        }
    }
}

personNummerInput.addEventListener('change', checkPersonNummerIfOk);

function checkPersonNummerIfOk(){
    let numbers = /^[0-9]+$/;

    if (personNummerInput.value.match(numbers) && personNummerInput.value.length == 10){
        console.log('perfekt 10 siffror')
    
    }
    else {
        console.log('skriv 10 siffror please')
    }
}

    