function greet(name, callback){
    console.log("hello"+name);
    callback();

}
function finish(){
    console.log("it is finished");
}
greet("Amo",finish);