let arr = [
  21, 14, 30, 43, 49, 50, 52, 28, 10, 73, 31, 45, 27, 88, 77, 75, 86, 97, 80,
  46, 10, 39, 13, 39, 97, 54, 11, 21, 42, 39, 45, 71, 50, 30, 3, 45, 61, 11, 48,
  90, 67, 35, 2, 9, 16, 37, 96, 20, 8, 38, 27, 68, 41, 39, 38, 19, 86, 98, 17,
  69, 55, 96, 10, 76, 23, 70, 36, 48, 26, 42, 36, 63, 91, 35, 80, 16, 53, 49,
  18, 66, 45, 28, 81, 27, 90, 95, 94, 60, 65, 14,90,10,50,11, 41, 82, 25, 22, 53, 98,
];

                                       //  1:Question  sorting Array
arr.sort(function(x,b){return x-b});
console.log(arr)
                                       //  2:Question Find Number and Indexing
 function findnumber(num){
    var count=0;
     arr.forEach(function(value,index){
        if(value == num){
            console.log(`index num:${index} repeated value: ${value}`)  
            count++;
        }  
 })
  console.log(`Number of Repetation :${count}`);
 }
 findnumber(3);

                                         // 3rd Question  Sum OF New Array

let newArray=arr.slice(2,-2);
console.log(newArray);
let sum=newArray.reduce((acc,val)=>{
  return acc+=val;
});
console.log(`Result is ${sum}`)

function myfun(num){
    var sum;
    return sum=sum+num;
}

