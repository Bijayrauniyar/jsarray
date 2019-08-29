// join() method join all the elements of array into a string . join() method 
// take string argument which use to join the elements fo string . 
// we can pass argument like . , - = etc by default its take , 


const  arr = ['name1','name2','name3','name4','name5'];

console.log(arr.join(' ')); // join by space
console.log(arr.join());// join by without any string , by default use ,
console.log(arr.join('-')); // join by - string 


let name = 'bijay rauniyar'
 
const CamalCaseName= name.split(' ') // split name  [bijay, rauniyar] and return array.
.map(x=>x.charAt(0).toUpperCase()+x.slice(1))  // convert first char into upper case and add rest of char x.slice(1) return ijay string exclud charAt(0)
.join(' ');

console.log(CamalCaseName);