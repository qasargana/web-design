try{
    console.log(a+b);
} catch(err){
    //do somwething
    console.log(err);
    console.log('there was an error');
    console.log('the error was saved in error log')
}

console.log('this line runs now')


class Car{
    constructor(color,speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log("turbo is on")
    }
}

  const car1 = new Car ("red", 120)
  car1.turboOn();


  let {PI} = Math;
  PI;


  let greet = "hello";
  let place = "World";
  console.log(`${greet} ${place}!`)

  console.log(`${1+1+1+1+1} stars!`)



  let top3 = ["multan", "lahore", "Islambad"];
   function honeyMoon(place1, place2, place3){
    console.log("visit" + place1)
    console.log("Then visit" + place2)
    console.log("Fer visit" + place3)
   }

   honeyMoon(...top3)
   function addTaxToPrice(taxRate, ...itemsBought){
    return itemsBought.map(item =>taxRate*item)
//map always use in array
   }
   let shoppingCart=addTaxToPrice(1.1,46,89,35,79);
   console.log(shoppingCart);
   const items=[
    {name: 'Bike' ,price: 100},
    {name: 'Tv ' ,price: 200},
    {name: 'ALbum', price:300},
    {name: 'keyword', price:400},
    {name: 'Bike' ,price:500},
    {name: 'Bike' ,price:4400},
    {name: 'Bike' ,price:7700}

    
   ]
   var itemNames = items.map((item)=>{
    return item.price
   })
   var filtereditems=items.filter((items)=>{
    return items.price<=500
   })
   console.log(items)
 console.log(filtereditems)
   console.log(itemNames)