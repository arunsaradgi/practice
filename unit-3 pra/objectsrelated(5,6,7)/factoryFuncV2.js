

let userObj={
    sayHello:function (){
        return `${this.name} is a goooood boy.`;
    }
}

function UserCreator(name){
    let obj={}
    obj.name=name;
    Object.setPrototypeOf(obj,userObj);
    return obj;
}

let details=new UserCreator('arun');
console.log(details)
console.log(details.sayHello())

//employee
let empobj={
    earns:function () {
        return `${this.name} earns 100000`;
    }
}

Object.setPrototypeOf(empobj,userObj);

function employee(name){
    let obj={};
    obj.name=name;
    Object.setPrototypeOf(obj,empobj);
    return obj;
}

let empdetails=employee('bablya');

console.log(empdetails);
console.log(empdetails.earns());
console.log(empdetails.sayHello());
