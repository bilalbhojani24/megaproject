
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
    document.getElementById("disable1").disabled = false;
    document.getElementById("disable2").disabled = false;
    document.getElementById("disable3").disabled = false;
    document.getElementById("disable4").disabled = false;
    document.getElementById("disable5").disabled = false;
    document.getElementById("disable6").disabled = false;
}
function disable(){
    document.getElementById("disable1").disabled = true;
    document.getElementById("disable2").disabled = true;
    document.getElementById("disable3").disabled = true;
    document.getElementById("disable4").disabled = true;
    document.getElementById("disable5").disabled = true;
    document.getElementById("disable6").disabled = true;
}
function del() {
    var strng=document.getElementById("output").value;
    document.getElementById("output").value=strng.substring(0,strng.length-1);
}
