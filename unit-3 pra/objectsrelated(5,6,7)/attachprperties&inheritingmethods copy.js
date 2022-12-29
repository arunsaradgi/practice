IPhone1.prototype.call=function () {
    return `Iphone${this.generation} is ringing`;
}

function IPhone1(generation, ASIN, weight, OS, RAM, color, display, camera){
    this.generation=generation;
    this.ASIN=ASIN;
    this.weight=weight;
    this.OS=OS;
    this.RAM=RAM;
    this.color=color;
    this.display=display;
    this.camera=camera;
}

let iphone1Details=new IPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP');

console.log(iphone1Details.call());

//iphone2 
//connecting iphone2 prototype to iphone1 prototype
Object.setPrototypeOf(IPhone2.prototype,IPhone1.prototype)

IPhone2.prototype.bluetooth = function(){
    return `Iphone${this.generation} is connected to bluetooth`
}


function IPhone2(generation, ASIN, weight, OS, RAM, color, display, camera, BT){
    
    IPhone1.call(this,generation, ASIN, weight, OS, RAM, color, display, camera);
    this.BT=BT;

}

let iphone2Details=new IPhone2(2,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP','BT 5.0');
console.log(iphone2Details.bluetooth())
console.log(iphone2Details.call())