var result = 50;
if(result>50){
    console.log('congratulations you passed.');

}
else{
    console.log('unfortunately you did not passed');
}
var food='hot';
if(food=='hot'){
    console.log('Too hot');
}
else if(food=='cold'){
    console.log('Too cold')
}
else{
    console.log('just right')
}
var food='hot';
switch(food){
    case 'hot':
        console.log('Too hot')
        break;
        case 'cold':
         console.log('Too hot')
         break;
        default:
             console.log('just right')

}
var place='first';
switch(place){
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;

    case 'third':
        console.log('Bronze');
        break;
        default:
    console.log('No medal');

}
for