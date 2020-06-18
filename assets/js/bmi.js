
// alert(height.value);

function bmi(){
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    var final_result = document.getElementById("result");
    var update = document.getElementById("update");
    var heightcm = height.value/100
    var result = [(weight.value) / (heightcm*heightcm)];
    // final_result.innerHTML = parseFloat(result).toFixed(2);

    if(result<18.50)
    {
        final_result.innerHTML = parseFloat(result).toFixed(2);
        final_result.style.color = "red";
        update.innerHTML = "Underweight";
        update.style.color = "red";
    }
    else if(result>18.51 && result<24.90)
    {
        final_result.innerHTML = parseFloat(result).toFixed(2);
        final_result.style.color = "green";
        update.innerHTML = "You are perfectly fit";
        update.style.color = "green";
    }
    else if(result>25.91 && result<30.00)
    {
        final_result.innerHTML = parseFloat(result).toFixed(2);
        final_result.style.color = "red";
        update.innerHTML = "Overweight";
        update.style.color = "red";
    }
    else if(result>30.00 && result<40.00)
    {
        final_result.innerHTML = parseFloat(result).toFixed(2);
        final_result.style.color = "red";
        update.innerHTML = "Obese";
        update.style.color = "red";
    }
    else
    {      
        final_result.innerHTML = parseFloat(result).toFixed(2);
        final_result.style.color = "red"; 
        update.innerHTML = "Morbidly obese";
        update.style.color = "red";
    }
    
}