// Array slice creates a shallow copy of an array
// array.proptype.slice()
const array = [1,2,3,4];
const arrayCopy = array.slice();


arrayCopy.push(5);
arrayCopy.push(6);
arrayCopy[0]=500;
console.log({array,arrayCopy});



// with slice if we copy with object in it . then if only copy reference not actual object .
// so if we change object of copied array orginal object of array also changed.

const person = {name:'bijay'};
const arr =['str1','str2',person];

const arrcopy = arr.slice();

arrcopy[2].name= 'Bijay Rauniyar'

// result of arr and arrcopy is same
console.log({arr,arrcopy});


const array1 = [1,2,3,4];
const arrayCopy1 = array.slice(0,2); // slice array with start and end index of array
const lastElementArray = array.slice(-2)// it will return last two elements of array
console.log({arrayCopy1}); // [1,2]  it end at 3 so not print
console.log({lastElementArray});// [3,4]



// practical uses 

let person1 ={
    name:'bijay rauniyar'
}

let filters ={
    deslugify:x=>x.replace('-',' '),
    uppercase:x=>x.toUpperCase()
};

let input  = 'name | deslugify | uppercase';  

let sections = input.split('|').map(x=>x.trim());  // [name, deslugify, uppercase]
let ref = person1[sections[0]]; // person1[name] = bijay rauniyar

let output = sections.slice(1) // new array [deslugify,uppercase]
.reduce((prev,next)=>{ 
        return filters[next].call(null, prev);
  
},ref)

console.log(output);