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

class Robot {
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