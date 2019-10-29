let roboStat = {
    roboLegions:[],
    set awake(awakeVal) {
        this.isOn = awakeVal;
        console.log(`awake: ${this.isOn}`);
        this.checkRampaging();
    },
    get awake() {
        return this.isOn;
    },
    checkRampaging(){
        this.roboLegions.forEach(robo =>{
            robo.doIRampage();
        });
    },
    isOn: true
};

class FlawedRobot {
    constructor(roboName) {
        this.name = roboName;
        roboStat.roboLegions.push(this);
        this.doIRampage();
    }
    doIRampage() {
        if (roboStat.awake) {
            console.log(`Silly Human, robo ${this.name} rampage!!!`);
        } else {
            console.log(`robo ${this.name} sleeps is off :( `);
        }
    }
}

class Robot {
    constructor(roboName){
        this.name = roboName;
        this.awake = false;
    }
    wake(){
        this.awake = true;
        this.doIRampage();
    }
    sleep(){
        this.awake = false;
        this.doIRampage();
    }
    doIRampage(){
        if(this.awake==true){
            console.log(`robo ${this.name} is rampaging!`);
        }else{
            console.log(`robo ${this.name} sleeps :(`);
        }
    }
}