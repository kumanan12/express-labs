function calculate(params) {

    var principle = get("P").value;
    var numberOfYears = get("N").value;
    var interestRate = get("R").value;
    var finalAmount = get("finalAmount");

    var finance = new Finance();
    //finance.AM(principal, rate, total number of payments, [type]);
    var payment = finance.AM(principle,interestRate,numberOfYears)
    finalAmount.textContent = payment;

    
}

function showCalculator(){
    var amortizationCalculator = get("amortization");
    var futureValueCalculator = get("futureValue");
    
    var selectElement = get("calculatorOptions");
    var selectedValue = selectElement.value;
    switch (selectedValue) {
        case "1":
            console.log("show amortization");
            show(amortizationCalculator);
            hide(futureValueCalculator);
            break;
        case "2":
            console.log("show future value");
            show(futureValueCalculator);
            hide(amortizationCalculator);
            break;
        case "3":
            console.log("Compount Interest");
            break;
        default:
            break;
    }
    if (selectedValue == 1) {
        console.log("show amortization");
     
        
    }else{
        console.log("show future value");
       
    }

}



function get(id){
    return document.getElementById(id);
}

function show(el){
    el.style.display = "";

}

function hide(el){
    el.style.display = "none";
}