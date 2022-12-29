Circle.prototype.area = function (){
    return `The area is ${this.radius**2 * 3.14}.`
}

function Circle(radius){
    this.radius=radius;
}

let output=new Circle(10);
console.log(output)
console.log(output.area())