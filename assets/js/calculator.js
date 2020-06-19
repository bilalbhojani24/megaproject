// const output = document.getElementById("output");
// let button = document.querySelector("button");
// disable();
function number1(){ 
    const output = document.getElementById("output");output.value+="1";}
function number2(){ 
    const output = document.getElementById("output");output.value+="2";}
function number3(){ 
    const output = document.getElementById("output");output.value+="3";}
function number4(){ 
    const output = document.getElementById("output");output.value+="4";}
function number5(){ 
    const output = document.getElementById("output");output.value+="5";}
function number6(){ 
    const output = document.getElementById("output");output.value+="6";}
function number7(){ 
    const output = document.getElementById("output");output.value+="7";}
function number8(){ 
    const output = document.getElementById("output");output.value+="8";}
function number9(){ 
    const output = document.getElementById("output");output.value+="9";}
function number0(){ 
    const output = document.getElementById("output");output.value+="0";}
function dot(){ 
    const output = document.getElementById("output");output.value+=".";}
function plus(){
    const output = document.getElementById("output"); output.value+="+";}
function minus(){ 
    const output = document.getElementById("output");output.value+="-";}
function multiply(){ 
    const output = document.getElementById("output");output.value+="*";}
function divide(){ 
    const output = document.getElementById("output");output.value+="/";}
function percent(){ 
    const output = document.getElementById("output");output.value+="%";}
function calculate(){
    const output = document.getElementById("output");
    var total = eval(output.value);
    output.value =total;
}
function empty(){
     output.value=" ";
     disable();
    }
function enable(){
    for(var i=1; i<=7;i++);
    {
        document.getElementById(`disable${i}`).disabled = false;
    }
}
function disable(){
    for(var i=1; i<=7;i++);
    {
        document.getElementById(`disable${i}`).disabled = true;
    }
}
    