// Sort can automatically arrange items in an array


const arr = ['bijay','ajay','jay'];
console.log(arr.sort()); // sort alphabatically

const arr2 = [3,4,5,11,2,10,]
console.log(arr2.sort()); 
// When calling sort on an array with numbers, what actually happens is each number is converted 
// to a string, and they're compared using their position in Unicode.
// so it return [ 10, 11, 2, 3, 4, 5 ]
// This is because, in Unicode, 10 does come before 2. Again, this is because these
//  numbers are being converted to strings first.


// To pre-form a numeric sort on an array such as this, we need to provide a comparative function. 
// A comparator has A and B being the left and right item of the sort algorithm. To sort this array 
// in ascending order, we can simply provide A minus B and we get a correct sort.

console.log(arr2.sort((a,b)=>{ //If A - B = 0 return 0 If A - B < 0 return -1. If it's more than 0 return 1
  
    return a-b
}));

// for decending sort 
 console.log(arr2.sort((a,b)=>b-a));

 // application ...

// Array.prototype.sort();

var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

 // sort in decending order
 let lists = lessons.sort((a,b)=>b.views-a.views) 
 .map(x=> `${x.title} (${x.views})`)
 .join('\n');
 
 
 console.log(lists);