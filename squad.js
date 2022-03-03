class PlayerCard{
    constructor(id){
        this.id = id;
        this.elem = document.getElementById(this.id);
        this.img = this.elem.getElementsByClassName("playercard-image")[0];
    }

    getImage(){
        return this.img;
    }

    setImage(newImg){
        this.img.src = newImg;
        document.getElementById(this.id).getElementsByClassName("playercard-image")[0].src = newImg;
    }
}

class PlayerSelector{
    constructor(){
        this.first = -1;
        this.second= -1;
    }

    update(playerCard){
        if (this.first == -1){
            this.first = playerCard;
        }
        else if (this.second == -1){
            this.second = playerCard;
            this.swap();
        }
    }
    swap(){
        let card1 = playerCards[this.first];
        let card2 = playerCards[this.second];
        card1.getImage().style = "outline: 0px;"
        card2.getImage().style = "outline: 0px;"
        let temp = card1.getImage().src;
        card1.setImage(card2.getImage().src);
        card2.setImage(temp);
        this.first = -1;
        this.second = -1;
    }



}


playerCards = [new PlayerCard("gk"), new PlayerCard("lb"),
               new PlayerCard("lcb"), new PlayerCard("rcb"),
               new PlayerCard("rb"), new PlayerCard("lcm"),
               new PlayerCard("cm"), new PlayerCard("rcm"),
               new PlayerCard("lw"), new PlayerCard("st"),
               new PlayerCard("rw"),
               new PlayerCard("sub1"), new PlayerCard("sub2"),
               new PlayerCard("sub3"), new PlayerCard("sub4"),
               new PlayerCard("sub5"), new PlayerCard("sub6"),
               new PlayerCard("sub7"), new PlayerCard("sub8"),
               new PlayerCard("sub9"), new PlayerCard("sub10"),
               new PlayerCard("sub11")
              ];

playerCards[0].setImage("images/Player Cards/TONI.png");
let selector = new PlayerSelector();
for (let i = 0; i<22; i++){
    let currentCard = playerCards[i];

    currentCard.elem.addEventListener("click", function(){
        console.log("clicked!");
        currentCard.getImage().style.outline = '2px green solid';
        selector.update(i);
        currentCard.elem.removeEventListener("mouseover", myFunction);
    })

    currentCard.elem.addEventListener("mouseover", function(){
        currentCard.elem.style.filter = "drop-shadow(0 0 10px yellow)";
    }
    )
    currentCard.elem.addEventListener("mouseout", function(){
        currentCard.elem.style.filter = "drop-shadow(0 0 0px black)";
    }
    )


}