function creator1(o) {
  let obj = o;

  obj.property1 = 1;
  obj.property2 = 2;
  obj.property3 = 3;
  obj.property4 = 4;
  obj.property5 = 5;

  return obj;
}

function creator2() {
  let obj = {};

  creator1(obj);
  obj.property6 = 6;

  return obj;
}

console.log(creator2());
