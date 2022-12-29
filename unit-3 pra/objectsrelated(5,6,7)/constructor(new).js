//PascalCase

function CreateAcc(accname, acctype, balance, active) {
  (this.accname = accname),
    (this.acctype = acctype),
    (this.balance = balance),
    (this.active = active),
    (this.print = function () {
      return `${accname} is multi-millionaire`;
    });
}

let details = new CreateAcc("arun", "savings", 500, true);

console.log(details.accname);
console.log(details.print());
