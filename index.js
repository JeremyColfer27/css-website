class Virus{
    constructor(id, closeButton){
        this.id = id;
    }

    show(){
        document.getElementById(this.id).style = "display: block";
        document.getElementById('jason-virus-audio').play();
    }

    hide(){
        document.getElementById(this.id).style = "display: none;";
    }


}

let jasonVirus = new Virus("virus1");
let topLeftClose = document.getElementById("jason-virus-close-top-left");
let topRightClose = document.getElementById("jason-virus-close-top-right");
let botRightClose = document.getElementById("jason-virus-close-bot-right");
let botLeftClose = document.getElementById("jason-virus-close-bot-left");


topLeftClose.addEventListener("click", function()
{
    topLeftClose.style = "display:none;";
    topRightClose.style = "display:block;";
}
);
topRightClose.addEventListener("click", function()


{
    topRightClose.style = "display:none;";
    botLeftClose.style = "display:block;";
}
);

botLeftClose.addEventListener("click", function()


{
    botLeftClose.style = "display:none;";
    botRightClose.style = "display:block;";
}
);

botRightClose.addEventListener("click", function()
{
    jasonVirus.hide();
}
);






setTimeout(function(){
    jasonVirus.show();

}, 1000);

//showJasonVirus();


