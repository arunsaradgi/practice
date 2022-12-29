class IPhone1{
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera){
        this.generation=generation;
        this.ASIN=ASIN;
        this.weight=weight;
        this.OS=OS;
        this.RAM=RAM;
        this.color=color;
        this.display=display;
        this.camera=camera
    }

    dial(){
        return `Iphone${this.generation} is ringing.`
    }

    sendMessage(){
        return `Iphone${this.generation} is sending message.`
    }
}

let i1=new IPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP');
console.log(i1)
console.log(i1.dial())
console.log(i1.sendMessage());



class IPhone2 extends IPhone1{
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera,BT, internet){
        super(generation, ASIN, weight, OS, RAM, color, display, camera);
        this.bT=BT
        this.internet=internet;
    }
    connectBluetooth(){
        return `Iphone${this.generation} is connected to bluetoooth`
    }
}

let i2=new IPhone2(2,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP','5.0','4G');

console.log(i2)
console.log(i2.connectBluetooth())
console.log(i2.dial());
console.log(i2.sendMessage());
