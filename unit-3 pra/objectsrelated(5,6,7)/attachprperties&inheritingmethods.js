IPhone1.prototype.call = function(){
   return (`${this.generation} is tring..`);
  
};

function IPhone1(generation, ASIN, weight, OS, RAM, color, display, camera) {

    (this.generation = generation),
    (this.ASIN = ASIN),
    (this.weight = weight),
    (this.OS = OS),
    (this.RAM = RAM),
    (this.color = color),
    (this.display = display),
    (this.camera = camera);   
}

let IPhone1details =new IPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

console.log(IPhone1details.call());

//iphone2


//connecting iphone2.prototype to iphone1.prototype
Object.setPrototypeOf(Iphone2.prototype, IPhone1.prototype);


Iphone2.prototype.bluetooth=function(){
    return `${this.generation}'s bluetooth connected`;
}

function Iphone2(generation, ASIN, weight, OS, RAM, color, display, camera){

    IPhone1.call(this,generation, ASIN, weight, OS, RAM, color, display, camera);
    
}

let Iphone2details =new Iphone2(2,"C09X67JBQV",
5.0,
"IOS",
"256mb",
"blue",
"80mm",
"5.0 MP")

console.log(Iphone2details.bluetooth());
console.log(Iphone2details.call());
