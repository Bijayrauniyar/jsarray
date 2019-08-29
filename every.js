// The every method returns true or false based on whether or not every item
// in the array passes the condition you provide in a callback function. it opposite of some methods

const  videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 460,
        viewed: 460
    }
];

function complete (x){
return x.viewed===x.length
}

const isComplete =videos.every(complete);
const completed= videos.filter(complete);
console.log({isComplete,completed});