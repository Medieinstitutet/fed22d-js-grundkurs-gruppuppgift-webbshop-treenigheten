// ----- Array med munk information ----- // 

const donutArray = [
    {
        id: 'donut1',                        // Munkens id
        picture1: "images/donut_1.png",      // Munk bild 2
        picture2: "images/donut_1.png",      // Munk bild 2
        name: 'Socker Munk',                 // Munkens Namn
        price: 25,                           // Munkens Pris
        quantity: 2,                         // Antal Munkar
        category: 'Budget',                  // Munkens Kategori  Budget/Economy/Deluxe
        rating: 1                            // Munkens Rating 1-5 stjärnor
    },
    {
        id: 'donut2',
        picture1: "images/donut_2.png",
        picture2: "images/donut_2.png",
        name: 'Choklad Munk',
        price: 25,
        quantity: 0,
        category: 'Budget',
        rating: 3
    },
    { 
        id: 'donut3',
        picture1: "images/donut_3.png",
        picture2: "images/donut_3.png",
        name: 'Vanilj Munk',
        price: 25,
        quantity: 0,
        category: 'Budget',
        rating: 2
    },
    {
        id: 'donut4',
        picture1: "images/donut_4.png",
        picture2: "images/donut_4.png",
        name: 'Äppel Munk',
        price: 25,
        quantity: 0,
        category: 'Budget',
        rating: 1
    },
    {
        id: 'donut5',
        picture1: "images/donut_5.png",
        picture2: "images/donut_5.png",
        name: 'Saffrans Munk',
        price: 25,
        quantity: 0,
        category: 'Economy',
        rating: 1
    },
    {
        id: 'donut6',
        picture1: "images/donut_6.png",
        picture2: "images/donut_6.png",
        name: 'Kokos Munk',
        price: 35,
        quantity: 0,
        category: 'Economy',
        rating: 3
    },
    {
        id: 'donut7',
        picture1: "images/donut_7.png",
        picture2: "images/donut_7.png",
        name: 'Citron Munk',
        price: 35,
        quantity: 0,
        category: 'Economy',
        rating: 3
    },
    {
        id: 'donut8',
        picture1: "images/donut_8.png",
        picture2: "images/donut_8.png",
        name: 'Blåbärs Munk',
        price: 35,
        quantity: 0,
        category: 'Economy',
        rating: 4
    },
    {
        id: 'donut9',
        picture1: "images/donut_9.png",
        picture2: "images/donut_9.png",
        name: 'Holy Munk',
        price: 45,
        quantity: 0,
        category: 'Deluxe',
        rating: 5
    },
    {
        id: 'donut10',
        picture1: "images/donut_10.png",
        picture2: "images/donut_10.png",
        name: 'Ängla Munk',
        price: 45,
        quantity: 0,
        category: 'Deluxe',
        rating: 4
    },
    {
        id: 'donut11',
        picture1: "images/donut_11.png",
        picture2: "images/donut_11.png",
        name: 'Gloria Munk',
        price: 45,
        quantity: 0,
        category: 'Deluxe',
        rating: 4
    },
    {
        id: 'donut12',
        picture1: "images/donut_12.png",
        picture2: "images/donut_12.png",
        name: 'Gudomlig Munk',
        price: 45,
        quantity: 0,
        category: 'Deluxe',
        rating: 5
    },   
]

let shop = document.querySelector('#shop')

let totalDonuts = [];  // Denna Array innehåller vilka munkar och hur många som har valts av varje munk.
console.log(totalDonuts)


let generateDonuts = () => {                              // Denna funktion skapar nya munkar i html strukturen med datan från donutArray
    return (shop.innerHTML = donutArray.map((x) => {
        let {id, name, price, picture1, picture2, quantity, category, rating} = x;
        return ` 
        <div id=product-id-${id} class="item">
        <img width="275" src=${picture1} alt="Munk bild ett.">
        <div class="description">
            <h3>${name}</h3>
            <p>RATING ${rating}</p>
            <h2>${price} kr</h2>
            <div class="price-quantity">
    
                <div class="buttons">
                    <i onclick="minusDonut(${id})" class="bi bi-dash-circle-fill"></i>
                    <div id=${id} class="quantity">${quantity}</div>
                    <i onclick="plusDonut(${id})" class="bi bi-plus-circle-fill"></i>
                </div>
            </div>
        </div>
    </div>
        `;
    }).join(""));
};

generateDonuts ();   // Denna funktion skapar nya munkar i html strukturen med datan från donutArray



const plusDonut = (id) => {     // Denna funktion gör så plus knappen funkar och lägger till datan i en ny array
    
    let selectedDonut = id;
  
    let search = totalDonuts.find((x) => x.id === selectedDonut.id);

    if (search === undefined) {
        totalDonuts.push({
            id: selectedDonut.id,
            amount: 1,
        })
    }
else{
    search.amount +=1;
}
// console.log(totalDonuts)
updateDonut(selectedDonut.id)

};


const minusDonut = (id) => {    // Denna funktion gör så minus knappen funkar och lägger till datan i en ny array
    let selectedDonut = id;
  
    let search = totalDonuts.find((x) => x.id === selectedDonut.id);

    if (search.amount === 0) return;   // stoppar loopen om värdet blir 0
else{
    search.amount-=1;
}
updateDonut(selectedDonut.id)
};

const updateDonut = (id) => {      // Denna funktion gör så att antalet uppdateras & skrivs ut i html dokumentet.
    let search = totalDonuts.find((x) => x.id === id);
    console.log(search.amount);
    document.getElementById(id).innerHTML = search.amount;
};



// Evelinas kod

const kundvagn = document.querySelector("#donuts-kundvagn");
const totalpris = document.querySelector("#totalpris");
let rabattkod = document.querySelector("#rabattkod");

const d = new Date();
// skapar dagens datum
let dd = String(d.getDate()).padStart(2, '0');
let mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
let today = mm + '/' + dd;
console.log(today)

// Skapar veckodag 1-7
let day = d.getDay();
console.log(day)

//skapar numret på aktuell vecka
startDate = new Date(d.getFullYear(), 0, 1);
var days = Math.floor((d - startDate) /
        (24 * 60 * 60 * 1000));
          
var weekNumber = Math.ceil(days / 7);
console.log(weekNumber)

// skapar aktuellt klockslag
let hours = d.getHours()
let minutes = d.getMinutes()
let time = hours + ":" + minutes;
console.log (time)

let totalt = 0;

for (let i = 0; i < donutArray.length; i ++){

    totalDonutPrice = donutArray[i].price*donutArray[i].quantity;
    
    // 10% rabatt om fler än 10 av en sort
    if (donutArray[i].quantity > 10){
        totalDonutPrice = totalDonutPrice * 0.9;
    }
    
    totalt += totalDonutPrice; // räknar it totalsumman av alla donuts

    if (donutArray[i].quantity > 0) {
        kundvagn.innerHTML += `
        <ul>
            <li><img src = "${donutArray[i].picture1}"></li>
            <li>${donutArray[i].name}</li>
            <li>${donutArray[i].quantity} st</li>
            <li> ${donutArray[i].price} kr/st</li>
            <li>tot ${totalDonutPrice} kr</li>
        </ul>`

        totalpris.textContent = `Totalpris: ${totalt} kr`
    }
}


// rabatt för tisdag och jämn vecka
if(weekNumber % 2 == 0 && day === 2 && totalt > 25){
    totalt = totalt * 0.75;
    totalpris.innerHTML = `Tisdag jämn vecka, 25% rabatt!<br>Totalpris: ${totalt} kr`
    }

// luciabulle på köpet

if (today === "12/13"){
    totalpris.innerHTML = `Totalpris: ${totalt} kr<br>Du får en luciabulle på köpet!`;
}

// 10% måndagar innan kl10

if(day === 1 && hours < 11 && minutes < 60){
    totalt = totalt * 0.9;
    totalpris.innerHTML = `Måndag innan kl 10, 10% rabatt!<br>Totalpris: ${totalt} kr`
}

//Om lucia och jämn vecka och tisdag
if(weekNumber % 2 == 0 && day === 3 && totalt > 25 && today === "12/13"){
    totalt = totalt * 0.75;
    totalpris.innerHTML = `Tisdag jämn vecka, 25% rabatt!<br> Totalpris: ${totalt} kr.<br> Du får dessutom luciabulle på köpet!` 
}

//Om lucia och måndag innan kl10

if (today === "12/13" && day === 1 && hours < 11 && minutes < 60){
    totalt = totalt * 0.9;
    totalpris.innerHTML = `Måndag innan kl 10, 10% rabatt!<br>Totalpris: ${totalt} kr.<br>Du får dessutom luciabulle på köpet!` 
}



// funktion för rabattkod a_damn_fine-cup_of-coffee
function rabatt(){
    if (rabattkod.value ==="a_damn_fine-cup_of-coffee"){
        totalpris.textContent = `Grattis, beställningen är gratis!`;
        totalt = 0;
        rabattkod.value = "";
        console.log(totalt);
    }

}



//-=JESPERS KOD=-//

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
    let validFirstName = null;
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
    else { //ingethänder
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