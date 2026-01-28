function checkEvenOdd(){
    let num=document.getElementById("evenOddInput").value;
    if(num%2==0)
    {
        console.log("It is even")
    }
    else{
        console.log("It is odd");
    }
}
function printTable()
{
    let num=document.getElementById("tableInput").value;
    for(let i=0; i<=10;i++){
        console.log(num,"*",i,"=",num*i);
    }
}

function fizzBuzz(){
    let num=document.getElementById("fizzBuzzInput").value;
    for (let index = 1; index <= num; index++) {
    if  (index%5==0 && index%3==0) {
        console.log("FizzBuzz");
    }
    else if(index%3==0){
        console.log("Fizz");
    }
    else if  (index%5==0) {
        console.log("Buzz");
    }
    else{
        console.log(index);
    }
}
}

    function printTriangle(){
    for(let i=1;i<6;i++)
    {
        let row=" " ;
    for (let j = 1; j<=i; j++) {
     row+="*";
    }
    console.log(row);
    }
}