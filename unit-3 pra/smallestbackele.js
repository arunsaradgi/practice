let arr=[12,52,44,11,2,3,5];

let stk=[];
let out="";
for(let i=0;i<arr.length;i++){
    while(stk.length!=0 && stk[stk.length-1]>=arr[i]){
        stk.pop();
    }
    if(stk.length==0){
        out+=-1+" ";
    }
    if(stk.length!=0){
        out+=stk[stk.length-1]+" ";
    }
    stk.push(arr[i]);
}
console.log(out);