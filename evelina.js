

//Om rabattkoden a_damn_fine-cup_of-coffee matas in, blir hela 
//beställningen 0 kr oavsett övriga gällande specialregler
// Om luciadagen = gratis luciamunk
//Om jämn vecka + tisdag = 25% rabatt om totalsumman över 25 kr
//Om kundar tar mer än 15 min på att beställa Alert: För långsam allt tas bort
// Om 10 munkar av samma sort = 10% rabatt på den munken 
//10% rabatt innan kl 10 på måndagar 

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
let days = Math.floor((d - startDate) /
        (24 * 60 * 60 * 1000));
          
let weekNumber = Math.ceil(days / 7);
console.log(weekNumber)

// skapar aktuellt klockslag
let hours = d.getHours()
let minutes = d.getMinutes()
let time = hours + ":" + minutes;
console.log (time)




// matar in donutsen i kundkorgen samt ger 10% rabatt om fler än 10 av en sort
const donutArray = [
    {
        id: 'donut1',                        // Munkens id
        picture1: "images/donut-1.png",      // Munk bild 2
        picture2: "images/donut-1.png",      // Munk bild 2
        name: 'Socker Munk',                 // Munkens Namn
        price: 25,                           // Munkens Pris
        quantity: 3,                         // Antal Munkar
        category: 'Budget',                  // Munkens Kategori  Budget/Economy/Deluxe
        rating: 1                            // Munkens Rating 1-5 stjärnor
    },
    {
        id: 'donut2',
        picture1: "images/donut-1.png",
        picture2: "images/donut-1.png",
        name: 'Choklad Munk',
        price: 25,
        quantity: 3,
        category: 'Budget',
        rating: 3
    },
    { 
        id: 'donut3',
        picture1: "images/donut-1.png",
        picture2: "images/donut-1.png",
        name: 'Vanilj Munk',
        price: 30,
        quantity: 10,
        category: 'Budget',
        rating: 2
    },   
]

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

