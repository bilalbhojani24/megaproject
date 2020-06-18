function calculatetip() {
    const billamt = document.getElementById("billamount").value;
    const guest = document.getElementById("guest").value;
    const service = document.getElementById("tip").value;
    var finalamount;
    if (billamt.length === 0) {
        alert("Kindly, enter bill amount");
    }
    if (guest.length === 0) {
        alert("Kindly, enter number of guest");
    }

    if (service == 1) {
        var temp = (billamt / 100) * 20;
        finalamount = temp / guest;
        // alert(finalamount);
        document.getElementById("finalamount").value = "Rs."+finalamount;
    }
    if (service == 2) {
        var temp = (billamt / 100) * 15;
        finalamount = temp / guest;
        document.getElementById("finalamount").value = "Rs."+finalamount;
    }
    if (service == 3) {
        var temp = (billamt / 100) * 10;
        finalamount = temp / guest;
        document.getElementById("finalamount").value = "Rs."+finalamount;
    }

}