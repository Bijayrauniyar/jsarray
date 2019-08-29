// Map is one of the most useful array methods. It creates a new array with 
// the exact same number of items as the source and can be used to modify values, 
// change their type, add fields to objects, simplify objects etc.

const items = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];


const output = items
.filter(x=>x.active)
.map(x=> {
   
    let fName= x.firstname.charAt(0).toUpperCase()+x.firstname.slice(1)

    let lName=  x.lastname.charAt(0).toUpperCase()+x.lastname.slice(1)
    return `${fName} ${lName}`
})

console.log(output);
