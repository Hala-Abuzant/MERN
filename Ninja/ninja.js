class Ninja{
    constructor(name){
        this.name=name;
        this.health=0;
        this.speed=3;
        this.strength=3;}

        sayName(){
        console.log(this.name);
        }
        
        showStatus(){
            console.log("name:"+this.name);
            console.log("health:"+this.health);
            console.log("speed:"+this.speed);
            console.log("strength:"+this.strength);
        }

        drinkSake(){
            this.health+=10;
        }
        
}


class superNinja extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }

    speakWisdome(){
        super.drinkSake();
        console.log("wise message");
    }

}

// var ninja1=new Ninja("hala");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStatus();

var ninja2=new superNinja("hala2");
ninja2.speakWisdome();
ninja2.showStatus();
