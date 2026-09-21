let fruits = ["Apple", "banana", "mango", "orange"];
console.log(fruits);
console.log(fruits[2]);

// loop through arrays
for(let fruit of fruits){
    console.log(fruit);
}
//array lenght
let len = fruits.length;
console.log(len);

//access last element
let last= fruits[fruits.length-1];
console.log(last);
//remove last element
fruits.pop();
let last1= fruits[fruits.length-1];

console.log(last1);
//shift()--> removes first element
//unshift()->adds element at the beggining
//toString()->changes array to string
//push()-->Adds an element to the end
//concat()-->concatenates 
//sort()
//reverse()


//map()

let num1 =[1,2,3,4,5,6,7];
let num2= num1.map(multiply);
function multiply(value){
    return value+2;

}
console.log(num2);

//filter()
let num3 = num1.filter(comp);
function comp(value){
    return value>4;
}
console.log(num3);

//reduce()
let num4 = num1.reduce(sum);
function sum(total, value){
    return total+value;

}
console.log(num4);