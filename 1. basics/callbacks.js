function greet(name, callback){
    console.log("hello"+name);
    callback();

}
function finish(){
    console.log("it is finished");
}
greet("Amo",finish);
//

console.log("start");
setTimeout(()=>{
    console.log("Data received");
},2000);
console.log("end");