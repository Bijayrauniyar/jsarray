// Array filter creates a new array with all elements that pass the 
// test implemented by the provided function.

let items = [7,5,3,2,1,8];
 let filterItems = items.filter(x=>x>3);

 console.log(filterItems);


 const lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Functions in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
];

const minViews = 1000;
const searchTerm = 'array';


const filterData= lessons
.filter(x=>x.tags.indexOf(searchTerm)>-1)
.filter(x=>x.views>minViews)
.sort((a,b)=>b.views-a.views)
.map(x=>`${x.title} ${x.views}`);

console.log(filterData);
                      