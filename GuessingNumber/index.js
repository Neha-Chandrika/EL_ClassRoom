let usernum;
let min = 1 , max = 100;
let running= true;
let answer = Math.floor(Math.random() * (max - min + 1))+min;
let result = document.getElementById("p1");
let attemts = 0;
let submit = document.getElementById("mybtn");

submit.onclick = function(){
    usernum = Number(document.getElementById("usernum").value)

    
    if(usernum < min || usernum > max || isNaN(usernum))
    {
        result.textContent = "INVALID INPUT TRY AGAIN!";
    
    }
    else{
        if(usernum < answer)
        {
            result.textContent = "TOO LOW! TRY AGAIN";
            
        }
        if(usernum > answer)
        {
            result.textContent = "TOO HIGH! TRY AGAIN";

        }
        else{
            result.textContent = `YAY CORRECT ANSWER! YOU DID IT IN ${attemts} attemts`;

        }
        attemts++;
    }
}
