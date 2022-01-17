/**********************
JAVASCRIPT HOMEWORK 1 
*********************/

/*Q1*/
const x = 10; 

/*Q2*/
let y = null; 

/*Q3*/
y=20;

/*Q4*/
const dog = {
	name: "Rex",
	age: 4,
	trick: "The Roll Over",
	goodBoy: true
};

/*Q5*/
function add(a,b) {
	return a + b;
};


/*Q6*/
function isLessThan(a,b) {
return a < b;
}

/*Q7*/
let z = add(x,y);

/*Q8*/
console.log(`The number ${z} is the sum of ${x} and ${y}`)

/*Q9*/
console.log(`Our ${dog.name} is ${dog.age} years old. He can do ${dog.trick}!`)

/*Q10*/
function displayIsGood() {
	if(dog.goodBoy === true) {
		console.log (`Yes, ${dog.name} is a good boy!`);
	} 
	else 
	{
		console.log(`No, sadly ${dog.name} is evil :`);
	}
}
