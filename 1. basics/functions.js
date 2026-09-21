//functions
function greet(){
    console.log("hello Amo");
}
greet();

//parameterised
function greetings(name){
    console.log("Hello" + name);

}
greetings("John");
//multiple parameters
 function add(a,b){
    console.log(a+b);

 }
 add(3,4);


 //use case
 
 function checkAge(age){
    if(age<18){
        console.log("You are young");
    }
    else{
        console.log("you are an adult");
    }
 }
 checkAge(77);