let arr=[5,3,8,2,9,1];

let stk=[];
let out=[];
let top=-1;
for(let i=arr.length-1;i>=0;i--){
    while(top!=-1 && stk[top]<=arr[i]){
        pop();
    }
    if(top==-1){
        out.push(-1);
    }else{
        out.push(stk[top]);
    }
    push(arr[i]);
}


function push(a){
    top++;
    stk[top]=a;
}
function pop(){
    if(top!=-1){
        top--;
    }
}
function peek(){
    return stk[top];
}


console.log(out.reverse().join(" "));