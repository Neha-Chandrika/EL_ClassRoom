const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const button = document.getElementById("mybtn")
let randomNumber1;
let randomNumber2;
let randomNumber3;

button.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * 6)+1;
    label1.textContent = `${randomNumber1}`;
    randomNumber2 = Math.floor(Math.random() * 6)+1;
    label2.textContent = `${randomNumber2}`;
    randomNumber3 = Math.floor(Math.random() * 6)+1;
    label3.textContent = `${randomNumber3}`;
}
