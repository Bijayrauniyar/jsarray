// Array.prototype.indexOf();
// index of used to search for value or reference in side array.

let whiteList =['.css','.js'];
let events = [
    {
      file: 'css/core.css'
    },
    {
      file: 'js/app.js'
    },
    {
      file: 'index.html'
    }
  ];


  let filterdResult = events.filter(event=>{
     let ext =  event.file.substring(event.file.lastIndexOf('.'));
     return whiteList.indexOf(ext)> -1;
  });

  let filterResult1 = events.filter(e=>{
      let ext = e.file.substring(e.file.lastIndexOf('.'));
      return whiteList.indexOf(ext)>-1;
  });

  console.log(filterdResult);
  console.log(filterResult1);