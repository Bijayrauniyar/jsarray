const items =[1,3,4,2,1,];

const sum = items.reduce((acc,i)=>{
    console.log({acc,i});
    return acc+i
})

const avg = sum/items.length

console.log({avg,sum});

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});

console.log(newUsers);