function add(n1,n2){
    return n1 + n2;
}

function multiply(n1,n2){
        return n1 * n2;
}
    

var ninjaCalculator = {
    x: 1,
    y:"kumanan",
    add111: add,
    multiply:multiply

};

console.log(ninjaCalculator.add111(2,7));