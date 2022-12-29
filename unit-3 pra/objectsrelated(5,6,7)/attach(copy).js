function creator1(o,a,b,c,d,e) {
  let obj = o;

  obj.property1 = a;
  obj.property2 = b;
  obj.property3 = c;
  obj.property4 = d;
  obj.property5 = e;

  return obj;
}

function creator2(a,b,c,d,e,f) {
  let obj = {};

  creator1(obj,a,b,c,d,e);
  obj.property6 = f;

  return obj;
}

console.log(creator2('a','b','c','d','e','f'));
