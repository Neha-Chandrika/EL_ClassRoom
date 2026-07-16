/*callback means passing a function as a parameter to another funtion and envoke it after this function excecution*/
/*EXAMPLE-1*/

hello(goodbye);
function hello(callback)
{
    console.log("Hello!");
    
}
function goodbye(){
    console.log("GoodBye!");
}



