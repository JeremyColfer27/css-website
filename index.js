class Virus{
    constructor(id){
        this.id = id;
    }

    show(){
        document.getElementById(this.id).style = "display: block";
        document.getElementById('jason-virus-audio').play();
    }

}
let jasonVirus = new Virus("virus1");


setTimeout(function(){
    jasonVirus.show();

}, 15000);

showJasonVirus();


