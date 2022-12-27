let arr=[1,2,0,10,4,20];

let stk=[];

let out=[];

for(let i=arr.length-1;i>=0;i--){
    while(stk.length!=0 && stk[stk.length-1]>=arr[i]){
        stk.pop()
    }
    if(stk.length==0){
        out.push(-1);
    }else{
        out.push(stk[stk.length-1])
    }
    stk.push(arr[i]);
}

let output=out.reverse().join(" ");
console.log(output);