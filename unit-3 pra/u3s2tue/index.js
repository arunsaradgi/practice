function createAcc(name,age,balance){
  /*  return {
    name,age,balance,
    sayAge: function(){console.log(age)};
   } */
   
    /* return {
    name:name,
    age:age,
    balance:balance,
    sayAge:function(){
        console.log(this.age);
    }
   } */
   
    let obj={};
    obj.name = name;
    obj.age=age;
    obj.balance=balance;
    obj.sayAge= function (){
        return (this.age);
    }
    console.log(obj);

}

let arun=createAcc("arun",20,180000);
