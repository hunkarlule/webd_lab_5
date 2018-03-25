/*
Web Development: Lab_5 - JavaScript Lab_3
Hunkar Lule
*/

/*Answer-1*/
//a
var arr = ["dog", "cat", "deer"];
var result = arr[0] + arr[2];
//value of result = "dogdeer"
console.log(result);
/*========================================================*/
//b
  var girls = ["Cecilie", "Lone"];
  var boys = ["Emil", "Tobias", "Linus"];
    var children = girls.concat(boys);
    document.getElementById("demo").innerHTML = children;
/*========================================================*/
//c

var arr = [20, 30];
for(var i = arr.length; i < 5; i += 1) {
  arr[i] = Math.pow(i, 2);
  console.log(i);
  console.log(arr[i]);
  
}
//the array after loop is [20, 30, 4, 9, 16]
console.log(arr);
/*========================================================*/
//d
var arr = [10, 20, 30, 40, 50, 60, 70, 90];
var sum = 0;
//the sum = 270 for this loop
for(var i = 1; i < 7; i += 1) {
  sum = sum + arr[i];
}
console.log(sum);

 //to correct the sum loop should be below
sum = 0;
for(var i = 0; i < arr.length ; i += 1) {
  sum = sum + arr[i];
}
console.log(sum);
/*========================================================*/
//e
var DL = 5;
var d = [25.0, 9.0, 10.0, 25.0, 15.0];
var mi = 0;
var m = d[mi];
 for(var i = 1; i < DL; i++) {
   if(d[i] < m) {
     mi = i;
     m = d[mi];
     console.log(m);
   }
 }
console.log("mi=",mi,"m=",m);
//output :mi= 1 m= 9

/************************************************************/
/************************************************************/

/*Answer-2*/
function sumarray(arr, number) {
  var sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    for( let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
  }
  console.log(sum);  
}

sumarray([[1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [5, 6, 7, 8, 9]], 5);