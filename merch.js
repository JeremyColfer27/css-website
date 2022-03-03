class Product {


    constructor(title, price, id){
        this.title = title;
        this.price = price;
        this.id = id;
    }

    updateTitle(newTitle){
        this.title = newTitle;
        document.getElementById(this.id).getElementsByClassName("product-name")[0].innerHTML = this.title;
    }

    updatePrice(nationalIndex){
        let newPrice = this.price * conversionRates[nationalIndex];
        let returnString = newPrice + " "  + currencySymbols[nationalIndex];
        document.getElementById(this.id).getElementsByClassName("product-price")[0].innerHTML = returnString;
    }

}
class SoilProduct extends Product{
    updatePrice(nationalIndex){
        let newPrice = this.price * conversionRates[nationalIndex];
        let returnString = newPrice + " "  + currencySymbols[nationalIndex] + "/gram";
        document.getElementById(this.id).getElementsByClassName("product-price")[0].innerHTML = returnString;
    }


}
let conversionRates = [1,376453357];
let currencySymbols = ["GBP", "Lira"];

let shirt = new Product("Pulling Tonight Unisexdsfdsf Tee", 85, "t-shirt");
let pasta = new Product("James' Pasta (E-book)", 24, "pasta");

let products = [new Product("Pulling Tonight Unisexdsfdsf Tee", 85, "t-shirt"),
                new SoilProduct("victory soil", 25, "soil"),
                new Product("Jack Kidd's Organic Vomit", 55, "vomit"),
                new Product("James' Pasta (E-book)", 24, "pasta")];

function updatePrices(nationalIndex){
    for (let i = 0; i<products.length;i++){
        products[i].updatePrice(nationalIndex);
        console.log("modification");
    }
}

function updateTurkeyPrices(){
    for (let i = 0; i<2;i++){
        products[i].updatePrice(1);
        console.log("turkey modification");
    }
}
function updateEnglandPrices(){
    for (let i = 0; i<2;i++){
        products[i].updatePrice(0);
        console.log("England modification");
    }
}

let englandToggle = document.getElementById("england-button");
englandToggle.addEventListener("click", function(){updatePrices(0)});

let turkeyToggle = document.getElementById("turkey-button");
turkeyToggle.addEventListener("click", function(){updatePrices(1)});