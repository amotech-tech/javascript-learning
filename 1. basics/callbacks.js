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


function task2(callback){
    setTimeout(() => {
        console.log("task 2");
        callback();
        
    }, 4000);
}
function task1(callback){
    setTimeout(() => {
        console.log("task 1");
        callback();
        
    }, 3000);
}
task2(()=>{
    task1(()=>{
        
    })
})
///promises
const promise = new promise((resolve, reject)=>{
    const randomNumber=Math.floor(Math.random()*10);
    setTimeout(()=>{
        if(randomNumber<4){
            resolve('Well Done you guessed right')
        }
        else{
            reject('oops you guessed wrong,ublucky')
        }
    }, 2000)
});
console.log(promise)