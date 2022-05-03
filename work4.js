/*
                                               Custom Iterable Object


const myObject={
  name:"osama",
  age:36,
  country:"lebanon",
  favSkill:"javaScript",
  [Symbol.iterator](){
    let step=0;
    let properties=Object.keys(this); // if want the value myObject[properties[step]],
    console.log(properties);
    return{
      next(){
        return{
          value: properties[step] ,
          done: step++ === properties.length
        }
      }
    }

  }
}

for(let prop of myObject){

  console.log(prop);
}


                                               Generators Part 1 Intro And Whats Generators

 function * generateTickets(){
         
   yield 1;
   yield 2;
   yield 3;
   yield 4;
   yield 5;


}

let iterator= generateTickets();
console.log(typeof iterator);
console.log(iterator.next());
console.log(iterator.next().value);
console.log(`#######`.repeat(10));
console.log(`we will do something before yielding the next ticket`);
console.log(iterator.next().value);
console.log(`#######`.repeat(10));
console.log(`function Stop Execution After each yield`);
console.log(`#######`.repeat(10));
console.log(`function give you the control to yield`);
console.log(iterator.next().value);
console.log(`#######`.repeat(10));

let myNumbers=[10,20,30,40,50];

function * generateNumbers(nums){
  for(let i=0; i<nums.length;i++){
   
    yield nums[i];

}
}
let Generators=generateNumbers(myNumbers);
console.log(Generators.next().value);
console.log(Generators.next().value);
console.log(Generators.next().value);
console.log(Generators.next().value);
console.log(Generators.next().value);

console.log(`#######`.repeat(10));


function * generateNums(){

   yield * [1,2,3,4,5];
   yield 7;

}
let Generate=generateNums();
console.log(Generate.next().value);
console.log(Generate.next().value);
console.log(Generate.next().value);
console.log(Generate.next().value);
console.log(Generate.next().value);
console.log(Generate.next().value);



                                               Generators Part 2 Functionality And Return


function orderBook(){

    window.alert("You clicked on button to order A book");
    console.log("You clicked on button to order A book");
    window.alert("You Added the book to Cart");
    console.log("You Added the book to Cart");
    window.alert("Payment is Done");
    console.log("Payment is Done");


}
let ordering= orderBook();

--------------------------------------

function * orderBook(){

    window.alert("You clicked on button to order A book");
    console.log("You clicked on button to order A book");
    window.alert("You Added the book to Cart");
    console.log("You Added the book to Cart");
    window.alert("Payment is Done");
    console.log("Payment is Done");


}
let ordering= orderBook();

------------------------------------

function * mySkills(){

   yield "Html";
   yield "php";
   yield "css";
   yield "java";
   yield "python";
}

let theSkills= mySkills();

for(skill of theSkills){

      console.log(skill);

}
---------------------------

for(let s of mySkills()){

    console.log(s);

}
-----------------------
function  * SayNames(){

   yield "osama";
   yield  "Ahmed";
}

let theName=SayNames();
console.log(theName.next());
console.log(theName.next());


                                                         Generators Part 3 Create Infinite Numbers

function * createInfinite(){

    let i=0;
    while(true){
      yield i++;
    }
  
}

let infinitIterator = createInfinite();
 console.log(infinitIterator.next());
 console.log(infinitIterator.next());
 console.log(infinitIterator.next());


 for(let Number of infinitIterator){

    if(Number>20){
      break;
    }
  console.log(Number);
 }


                                                 Generators Part 4 Delegating Generators


function * generateNumbers(){

  yield 1;
  yield 2;
  yield 3;


}


function * generateNames(){

  yield 'moemen';
  yield 'ali';
  yield 'Yousof';

}

function * generateAll(){

   yield * generateNumbers();
   yield * generateNames();
   

}
let genAll= generateAll();

console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());

                                                     New Array Methods Part 1
                                                     
/*
  New Array Methods
  Array.of
  Array.from
  Array.fill


// Array.of(Elements To Create The Array)

let oldArray = Array(100);
console.log(oldArray);
console.log(oldArray.length);

let newArray = Array.of(100);
console.log(newArray);
console.log(newArray.length);

// Array.from(Iterable, Mapfn, This)

let myName = "Osama";
let arrayOfLetters = Array.from(myName);

console.log(myName);
console.log(arrayOfLetters);

let myNumbers = [10, 20, 30, 15, 18, 100, 60];

let numbersMinusTen = Array.from(myNumbers, (number) => number - 10);

console.log(numbersMinusTen);

// Array.fill(Value To Fill, Start Default 0, End Default Array.length)

let theNumbers = [1, 10, 30, 70, 90];

theNumbers.fill(100); // All Will Be 100
theNumbers.fill(100, 2); // From 30
theNumbers.fill(100, 1, 3); // Will Fill 10 And 30

console.log(theNumbers);


                                                     New Array Methods Part 2

 /*
  New Array Methods
  Array.find()
  Array.findIndex()
  Array.copyWithin()


// Array.find() Not Returning All Values

let myNumbers1 = [1, 10, 20, 30, 40];
let found1 = myNumbers1.find(el => el > 10);
console.log(found1);

console.log(`${"#".repeat(20)}`);

// Array.findIndex() Not Returning All Values

let myNumbers2 = [1, 10, 20, 30, 40];
let found2 = myNumbers2.findIndex(el => el > 10);
console.log(found2);

console.log(`${"#".repeat(20)}`);

// Array.copyWithin(Target, Start Default 0, End Default Array.length)

// "A", "F", "G", "D", "E", "F", "G", "H"
let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
myLetters.copyWithin(1, 5, 7);
console.log(myLetters);


                                                Modules - Part 1 Import & Export

const a=1;
 let myArray=[1,2,3,4,5,6];
 function sayHello(name){
  return`Hello ${name}`;
}

export{
  a,
  myArray,
  sayHello
}

                                              Modules - Part 2 Import All And Aliases
const a=100;
function sayHello(name){
  return`Hello ${name}`;
}

let myArray=[1,2,3,4,5];

export{
  a as myRank,
  sayHello,
  myArray
}

                                             Modules - Part 3 Named Export Vs Default Export

const a = 100;
const b = 200;

export {
  a, b
}

const c = 300;

export default function sayHello() {

  return `Hello`;

}

const myObject = {
  name: "Osama",
  age: 36,
  country: "Egypt"
}

export default c;


*/




