const { range  }=require('./exercise05');
const { objectsDeeplyEqual } =require ('./exercise06');
const { arrayFiltering } =require ('./exercise07');
console.log(range(1,10,2));
console.log(range(19,22));
console.log(range(5,2,-1));

var obj = {here: {is:"an"},object: 2};
console.log(objectsDeeplyEqual(obj,obj));
console.log(objectsDeeplyEqual(obj,{ here: 1, object:2} ));
console.log(objectsDeeplyEqual(obj,{ here: {is:"an"}, object:2}));



var toFilter = [1, 2, 3,  4 ,5 , 6, 7, 8, 9];
var res = arrayFiltering(toFilter, function (value){
    return value % 3 ===0;
});
console.log(res);