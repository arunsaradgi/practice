// camelCase for factory function
// factory function create and return obj

function createAcc(accname,acctype,balance,active){
    let acc={
        name:accname,
        type:acctype,
        balance:balance,
        active:active,
        print:function(){
            console.log(`${this.name} has balance of ${balance}`);
        }
    }
    return acc;
}

console.log(createAcc('arun','savings',500,true))
console.log(createAcc('arun','savings',500,true).print())
