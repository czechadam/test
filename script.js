function checkAmt(){
    var p = document.getElementById("principal").value;
    if (isNaN(p)){
        alert("Wrong amount"+ principal.value);
        principal.focus();
        document.getElementById("btn").disabled = true;
        return false;
    }else{
        document.getElementById("btn").disabled = false;
    }



}

function compute()
{

    var p = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var result = document.getElementById("result");


     prinpFloat = parseFloat(principal.value);
    

    finalYear = new Date().getFullYear() + parseInt(years.value);

    out = prinpFloat;
    for (i = 1;  i <= years.value; i++){
        out = out + (out * rate.value )  / 100.0;
    }

    
    result.innerHTML = "If you deposit " + p + "<br>"+
                        " at interest rate of "+ rate.value +" <br/>"+
                        " You will receive an amount of "+ out +"<br>" +
                        "in the year " +finalYear+ "<br>";
    return false;
}
        