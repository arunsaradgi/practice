
iphone1.prototype.dial=function (){
   return ('tring.. tring...')
}
iphone1.prototype.camera=function () {
    return ('clicked........')
}

function iphone1(o,name,price,weight,ios,ram){
    let obj=o;

    Object.setPrototypeOf(obj,iphone1.prototype);
    obj.name=name;
    obj.price=price;
    obj.weight=weight;
    obj.ios=ios;
    obj.ram=ram;

    return obj;
}

let out1=iphone1({},'iphone1',20000,200,'ios','128mb');
console.log(out1.camera())
console.log(out1.dial())


iphone2.prototype.bluetooth=function () {
    return ('connected........');
}
Object.setPrototypeOf(iphone2.prototype,iphone1.prototype)

function iphone2(name,price,weight,ios,ram,bluetooth){
    // let obj={};

    iphone1(this,name,price,weight,ios,ram);
    Object.setPrototypeOf(this,iphone2.prototype);
    // obj.name=name;
    // obj.price=price;
    // obj.weight=weight;
    // obj.ios=ios;
    // obj.ram=ram;
    this.bluetooth=bluetooth;
    // return obj;
}

let out2=new iphone2('iphone2',20000,200,'ios','128mb','5.0 BT');
console.log(out2);