let dec;
let inc;
let reset;

function updateNumber(change) {
    let num = Number(document.getElementById("number").textContent);
    num += change;
    document.getElementById("number").textContent = num;
}

document.getElementById("btn1").onclick = () => updateNumber(-1);
document.getElementById("btn2").onclick = () => document.getElementById("number").textContent = "0";
document.getElementById("btn3").onclick = () => updateNumber(1);