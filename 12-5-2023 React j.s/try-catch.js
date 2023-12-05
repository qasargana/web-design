try{
    console.log(a+b);
} catch(err){
    console.log (err)
    console.log("Thre was an error");
    console.log("The error was aved in error log");
}
console.log("My program does not stop");
class Car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }
    turboOn(){
        console.log('Turbo is on');
    }
}
const car1= new Car('White', 440);
car1.turboOn();

// car1.color;
// car1.speed;
console.log(`${1+1+1+1+1}Stars!`)
let greet="Hello";
let place="World";
console.log(`${greet} ${place}!`)

 let top3= [
    'Lahore','Islamabad', 'Thokar'
 ]
function showItinerary(place1,place2,place3){
    console.log("Visit "+place1);
    console.log("Then visit "+place2);
    console.log("Finish with a visit to "+place3);

}
showItinerary(...top3);
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item=> taxRate*item)
}
let shoppingCart=addTaxToPrices(1.1,46,89,35,79);
console.log(shoppingCart);