let arr=[394, 564, 16, 898, 218, 631, 4, 333, 361, 467, 360, 785, 607, 164, 163, 705, 664, 420, 546, 553, 595, 341, 10, 86, 655, 404, 993, 900, 868, 70, 764, 543, 585, 263, 70, 59, 450, 120 ];

let stk=[];
let out=[];
let counter=0;
for(let i=0;i<arr.length;i++){
    counter++;
    while(stk.length!=0 && stk[stk.length-1]<arr[i]){
        stk.pop();
    }
    if(stk.length==0){ 
        out.push(-1);
    }else{
        if(counter===i){
            out.push(arr.indexOf(stk[stk.length-1]));
        }
        
        
    }
    stk.push(arr[i]);
    
}
let output="";

out.forEach((element,index) => {
    output+=(index-element)+" ";
});
console.log(output);
