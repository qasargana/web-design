var table={
    legs:3,
    color:'brown',
    priceUSD:100,
}
console.log(table);
console.log(table.color);
console.log(table["color"]);
var car={};
car["color"]="green";
car['speed']=200;
car.speed=100;
console.log(car);
var arrofkeys=['speed','altitude','color'];
// var drone={
//     speed:100,
//     altitude:200,
//     color:Red,
// }
// for(var i=0; i<arrofkey.length;i++){
// console.log(drone[arrofkey[i]])
// }
function arraybuilder(one,two,three){
    var arr=[];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simplearr=arraybuilder('apple','pear','pulm');
console.log(simplearr);
