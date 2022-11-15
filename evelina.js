// munkar som har mer än 0 läggs i vaukorg när kund trycker på "lägg i varukorg"
// då visas namn, antal, pris och totalpris
//längst ner syns summan av alla munkar
// lägg till fält för rabattkod
//sedan läggs även specialerbjudanden in. 
// "till betalning-knapp"







const donutAmount = document.querySelector("#donut-amount");
const addButton = document.querySelector("#add-button");
const reduceButton = document.querySelector("#reduce-button");
const toBasketBtn = document.querySelector("#add-basket");
let donutName = "Choklad Munk";
let donutPrice=25;
let amount = 0;

const CheckoutDonut = document.querySelector(".checkOutDonuts");



addButton.addEventListener("click", function(){     amount+=1;     donutAmount.textContent = amount; } )
reduceButton.addEventListener("click", function(){     amount-=1;     donutAmount.textContent = amount; })
toBasketBtn.addEventListener("click", function(){     CheckoutDonut.innerHTML = `<p>${donutName}</p><p>${donutPrice} kr/st</p><p>antal: ${amount}st</p><p>tot: ${amount*donutPrice} kr</p>`; })




