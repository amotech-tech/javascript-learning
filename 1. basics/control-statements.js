//if statement
let age=20;
if(age >= 18){
    console.log("You are an adult");
}
//if else 


if(age>=18){
    console.log("You are an adult");
}
else{
    console.log("you are a minor");
}


//if else if
if(age>18){
    console.log("You are an adult");
}
else if(age=18){
    console.log("are you sure");

}
else{
    console.log("you are a minor");
} 

//nested if
if(age >= 18){
    console.log("you are an adult");
    if(age >=60)
    console.log("You are a legend");
}
else{
    console.log("you are a minor");
} 


//switch

let day = 2;
let dayname;
switch(day){
    case 1:
        dayname="Monday";
        break;
     case 2:
        dayname="teusday";
        break;
     case 3:
        dayname="wednesday";
        break;
    case 4:
        dayname="thursday";
        break;
     case 5:
        dayname="friday";
        break;
     case 6:
        dayname="saturday";
        break;
     case 7:
        dayname="sunday";
        break;
    default:
        console.log("program run successfully");
       
}
console.log(dayname);