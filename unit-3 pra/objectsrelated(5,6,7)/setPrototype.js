let someObj={
    print:function(){
        return `This account belongs to ${this.accname}.\nHe is multi-millionaire`
    }
}

function createAcc(accname,acctype,balance,active){
    let acc={
        accname,acctype,balance,active
    }
    Object.setPrototypeOf(acc,someObj);

    return acc;
}

let details=createAcc('arun','savings',500,true);

console.log(details)
console.log(details.print())
  