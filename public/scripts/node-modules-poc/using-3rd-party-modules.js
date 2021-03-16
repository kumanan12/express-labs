const ld = require("lodash");

const moment = require("moment");

const currentDate = moment();

const tenDayslater = currentDate.add(10,'day');

console.log(`Current date: ${moment()}. Ten days later: ${tenDayslater}`);



const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = ld.concat(arr1,arr2);
console.log(arr3);
const avgValue = ld.mean(arr3);

var result = ld.camelCase('--foo-bar--');
console.log(result);
console.log(`the avg value is ${avgValue}`);
