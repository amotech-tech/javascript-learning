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
    const allWentWell= true;
    if(allWentWell){
        resolve('all things went well')
    }
    else{
        reject('oops! something went wrong')
    }
});
console.log(promise)