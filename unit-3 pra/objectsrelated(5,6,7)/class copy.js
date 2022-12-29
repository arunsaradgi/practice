class IPhone1 {
  constructor(generation, ASIN, weight, OS, RAM, color, display, camera) {
    this.generation = generation;
    this.ASIN = ASIN;
    this.weight = weight;
    this.OS = OS;
    this.RAM = RAM;
    this.color = color;
    this.display = display;
    this.camera = camera;    
  }

  call(){
    return `Iphone${this.generation} is ringing`;
  }
}

let i1=new IPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP');

console.log(i1);
console.log(i1.call());

class IPhone2 extends IPhone1{ 
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera,BT, internet){
        super(generation, ASIN, weight,OS, RAM, color, display, camera);
        this.BT = BT;
        this.internet = internet;
    }

    connectedBluetooth(){
        return `Iphone${this.generation} is connected to Bluetooth`;
    }
}

let i2=new IPhone2(2,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0','5.0','4G')
console.log(i2);
console.log(i2.connectedBluetooth());
console.log(i2.call());