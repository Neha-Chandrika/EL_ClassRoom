const head = document.getElementById("title");
//console.log(head);
let allids = document.querySelectorAll("#title");
console.log(allids[0]);
allids.forEach((ids)=>{console.log(ids.textContent)});