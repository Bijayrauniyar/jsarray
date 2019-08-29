// some returns a boolean value after passing each item in the source array through the test
// function that you pass in as the first parameter. This makes it well suited to the types of
//  queries that require a simple yes or no answer.
// once some function get true vlaue it terminate the loop and return true value .

const items =[1,3,5,6,2];
const hasThree = items.some(x=>{
    console.log(x);
   return x===3});

 console.log(hasThree);


 var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: true
    },
    {
        title: 'Watch the array lessons on egghead.io',
        completed: true
    }
];

function addTask (title){
    // user some function make sure array don't have element already
    
    if (tasks.some(x=>x.title===title)) return
    tasks.push({title:title,completed:false})
}

addTask('Feed the cat');
addTask('new task is added');
 console.log(tasks);