class Product {


    constructor(title, price, id){
        this.title = title;
        this.price = price;
        this.id = id;
        this.elem = document.getElementById(id);
    }

    updateTitle(newTitle){
        this.title = newTitle;
        document.getElementById(this.id).getElementsByClassName("product-name")[0].innerHTML = this.title;
    }

    updatePrice(nationalIndex){
        let newPrice = this.price * conversionRates[nationalIndex];
        let returnString = newPrice + " "  + currencySymbols[nationalIndex];
        if (nationalIndex == 2) returnString += " e^24324"
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




let conversionRates = [1,0.08,376453357];
let currencySymbols = ["GBP", "Sheep", "Lira"];

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

let englandToggle = document.getElementById("england-button");
englandToggle.addEventListener("click", function()
{
    updatePrices(0);
    updateToggles(0);
}
);

let walesToggle = document.getElementById("wales-button");
walesToggle.addEventListener("click", function(){updatePrices(1);updateToggles(1)});


let turkeyToggle = document.getElementById("turkey-button");
turkeyToggle.addEventListener("click", function(){updatePrices(2);updateToggles(2)});

let currenyButtons = [englandToggle, walesToggle, turkeyToggle];
updateToggles(0);
function updateToggles(nationalIndex){
    for (let i = 0; i<currenyButtons.length; i++){
        currenyButtons[i].getElementsByClassName("flag-cover")[0].style.visibility = "visible";
    }
    currenyButtons[nationalIndex].getElementsByClassName("flag-cover")[0].style.visibility = "hidden";
}

for (let i = 0; i<products.length; i++){
    let currentProduct = products[i].elem;

    let currentImage = currentProduct.getElementsByClassName("product-image")[0];
    let currentDesc = currentProduct.getElementsByClassName("product-description")[0];
    let buttons = [currentImage,currentDesc];
    for (let j = 0; j<buttons.length; j++){
        buttons[j].addEventListener("mouseover", function(){
            console.log("hovered!!");
            currentDesc.style.visibility = "visible";
            currentImage.style.opacity = "15%";
            currentImage.style.cursor = "pointer";

        })
    
        buttons[j].addEventListener("mouseout", function(){
            console.log("hovered!!");
            currentDesc.style.visibility = "hidden";
            currentImage.style.opacity = "100%";
        })
    }



}
