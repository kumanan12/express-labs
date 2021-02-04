var finance = new Finance();

function calculateFutureValue() {

    let p = get("P").value;
    let n = get("N").value;
    let r = get("R").value;
    let fv = get("fvResult");
    console.log(`p is ${p}, n is ${n} and r is ${r}`);
  
    var result = finance.FV(r, p, n);
    fv.innerHTML = result;
}

function calculateCAGR() {
    log("calculateCAGR");
    let n = get("numberOfYears").value;
    let intialAmount = get("intialAmount").value;
    let finalAmount = get("finalAmount").value;
    let cagr = get("cagrResult");
    var result =  finance.CAGR(intialAmount, finalAmount, n);
    cagr.innerHTML = result;
    
}

function calculateAmortizedValue(params) {
    log("inside calculateAmortizedValue ");
    let p = get("AP").value;
    let n = get("AN").value;
    let r = get("AR").value;
    let am = get("amResult");
    console.log(`p is ${p}, n is ${n} and r is ${r}`);
  // e.g., If principal is $20,000, rate is 7.5%, total number of payments is 5, and payment type is 0 (years), monthly payment is $400.76.

 
    var result = finance.AM(p, r, n, 0);
    am.innerHTML = result;
}

function get(id) {
    return document.getElementById(id);
}

function show(id) {
    get(id).style.display = "";
}

function hide(id) {
    get(id).style.display = "none";
}

function log(msg) {
    console.log(msg);

}

function hideAllCalculators(){
    hide("fv-calculator");
    hide("am-calculator");
    hide("cagr-calculator");
}
hideAllCalculators();

function showCalculator() {
    hideAllCalculators();
    var selectedCalculator = get("ddlCalculator").value;
    log(selectedCalculator);
    switch (selectedCalculator) {
        case "am":
            show("am-calculator");
            break;
        case "fv":
            show("fv-calculator");
            break;
        case "cagr":
            show("cagr-calculator");
            break;

        default:
            hideAllCalculators();
            break;
    }
}
