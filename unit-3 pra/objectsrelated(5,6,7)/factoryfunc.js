// camelCase for factory function
// factory function create and return obj

function createAcc(accname,acctype,balance,active){
    //..short hand and returning directly
    return{
        accname,acctype,balance,active,
        print:function(){
            return (`${this.accname} has balance of ${this.balance}`);
        }
    }

    //.. full declaration 
    // let acc={
    //     name:accname,
    //     type:acctype,
    //     balance:balance,
    //     active:active,
    //     print:function(){
    //         console.log(`${this.name} has balance of ${balance}`);
    //     }
    // }
    // return acc;
}

console.log(createAcc('arun','savings',500,true))
console.log(createAcc('arun','savings',300,true).print())
