// ----- Array med munk information ----- // 

const donutArray = [
    {
        id: 'donut1',                        // Munkens id
        picture1: "images/donut_1.png",      // Munk bild 2
        picture2: "images/donut_1.png",      // Munk bild 2
        name: 'Socker Munk',                 // Munkens Namn
        price: 25,                           // Munkens Pris
        quantity: 0,                         // Antal Munkar
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


let generateDonuts = () => {  // Denna funktion skapar nya munkar i html strukturen med datan från donutArray
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
                    <i onclick="removeDonut(${id})" class="bi bi-dash-circle-fill"></i>
                    <div id=${id} class="quantity">${quantity}</div>
                    <i onclick="addDonut(${id})" class="bi bi-plus-circle-fill"></i>
                </div>
            </div>
        </div>
    </div>
        `;
    }).join(""));
};

generateDonuts ();  


const addDonut = (id) => {
    let selectedDonut = id;
    let search = donutArray.find((x) => x.id === selectedDonut.id);

    if (search === undefined){
        donutArray.push({
            id: selectedDonut.id,
            quantity: 1,
        }) 
    }
    else {
        search.quantity += 1;
    }      
    updateQuantity(selectedDonut.id)    
};


const removeDonut = (id) => {
    let selectedDonut = id;
    let search = donutArray.find((x) => x.id === selectedDonut.id);

    if (search.quantity === 0) return;
    else {
        search.quantity -= 1;
    }      
    updateQuantity(selectedDonut.id)    
};

let updateQuantity = (id) => {
    let search = donutArray.find ((x) => x.id === id);
    console.log(search.quantity);
    document.getElementById(id).innerHTML = search.quantity;
};