var car=[];
car.mileage=98765;
car.color="red1";
console.log(car);
car.trunthekey=function(i){
    if (i==1){
            console.log("The engine is running");
        }
else{
    console.log("The engine is off"); 
}
}
car.lightson=function(i){
if(i==1){   
     console.log("The lights are on");
    }
else{
    console.log("The lights are off");
}
}
console.log(car);
car.trunthekey(0);
car.lightson(0);