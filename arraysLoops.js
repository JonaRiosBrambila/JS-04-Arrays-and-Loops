/*
//Exercise #1

var arr = [ 'Sofia', 'David', 'Juan' ];

console.log(arr);

var nuevaLongitud = arr.push("Sara", "Agustin");
console.log(arr);

let primero = arr.shift();
console.log(arr);

arr.splice(1,0,'Renata');
console.log(arr);


arr.push("Elena ");
console.log(arr);

//Write a JavaScript program to construct the following pattern, using a nested for loop
var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}

//Write a method with a while loop to print 1 through n in square brackets
for (let num1 = 0; num1 <= 100; num1++
    ){
    
      console.log(num1);
    }
    
    function logArrayElements(element, index, array) {
        console.log("a[" + index + "] = " + element);
    }
    
    [2, 5, 4, 9].forEach(logArrayElements);
    // salida:
    // a[0] = 2
    // a[1] = 5
    // a[2] = 9
    
   
   //rite a method with a while loop that computes the sum of first n positive integers
    let actualNum = 0;
let i = 1;
while (i <= 20) {
  actualNum += i;
  console.log(`Iteracion ${i}: ${actualNum}`);
  i++;
}
*/


//Repeatedly print the value of the variable xValue, decreasing 
//it by 0.5 each time,as long as xValue remains positive.

var i = 1-0.5;
while (i < 10) 
{
  console.log(i);
   i++; // i=i+1 esto sería lo mismo 
}