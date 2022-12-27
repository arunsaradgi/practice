let arr=[39,27,11,4,24,32,32,1];
let stk1=[];    
let out1=[];

for(let i=arr.length-1;i>=0;i--){
    while(stk1.length!=0 && stk1[stk1.length-1]>=arr[i]){
        stk1.pop()
    }
    if(stk1.length==0){
        out1.push(-1);
    }else{
        out1.push(stk1[stk1.length-1])
    }
    stk1.push(arr[i]);
}

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

console.log(out1.reverse(),out.trim().split(" ").map(Number))