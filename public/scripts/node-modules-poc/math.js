const sum = function(x,y) {
    return x + y;
}


const square = function (x) {
    return x * x;
}

exports.mean = function (data) {
    return data.reduce(sum)/data.length;
}



exports.name= "Kumanan";
exports.student = {
    'name': 'Meghaa'
}

exports.sum = sum;



