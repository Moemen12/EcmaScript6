/*
                                                        Set Methods

let books=new Set('Moemen');
books.add("Moemen");
console.log(books);
books.delete('o');
console.log(books);
console.log(books.has("o"));
books.clear();
console.log(books);

output:
---------
{'M', 'o', 'e', 'm', 'n', …}
Set(5) {'M', 'e', 'm', 'n', 'Moemen'}
false
Set(0) {size: 0}




                                                Map vs Object

//object : convert key to string but Map dont work like this


var user={};
user['username']="Moemen";
user.website="Moemen.org";
user['10']="string";
user[10]="Number";

console.log(user);
console.log(user.username);
console.log(user['website']);

let myMap= new Map();

myMap.set("10","string").set(10,"number").set(false,"boolean").set({a:1,b:2},"Object").set(function doSomething(){},"function");

console.log(myMap);

-------------------------------------------

the same but from begin with setting information direct

var user={};
user['username']="Moemen";
user.website="Moemen.org";
user['10']="string";
user[10]="Number";

console.log(user);
console.log(user.username);
console.log(user['website']);

let myMap= new Map([

     ["10","string"],
     [10,"number"],
     [false,"boolean"],
     [{a:1,b:2},"Object"],
     [function doSomething(){},"function"],

]);

console.log(myMap);


output
------

{10: 'Number', username: 'Moemen', website: 'Moemen.org'}
work3.js:57 Moemen
work3.js:58 Moemen.org
work3.js:70 Map(5) {'10' => 'string', 10 => 'number', false => 'boolean', {…} => 'Object', ƒ => 'function'}


------------------------------------------------------------

let myMap= new Map([

     ["10","string"],
     [10,"number"],
     [false,"boolean"],
     [{a:1,b:2},"Object"],
     [function doSomething(){},"function"],

]);

console.log(myMap);
console.log(`My map element is: ${myMap.size}`);
console.log(`Using get method: ${myMap.get("10")}`);
console.log(`Using get method: ${myMap.get(10)}`);
console.log(`Using has method: ${myMap.has(10)}`);

console.log(`Using delete method: ${myMap.delete(10)}`);
console.log(`My map element is: ${myMap.size}`);
console.log(myMap);
myMap.clear();
console.log(`My map element is: ${myMap.size}`);
console.log(myMap);

output:
-------
Map(5) {'10' => 'string', 10 => 'number', false => 'boolean', {…} => 'Object', ƒ => 'function'}
 My map element is: 5
 Using get method: string
 Using get method: number
 Using has method: true
 Using delete method: true
 My map element is: 4
 Map(4) {'10' => 'string', false => 'boolean', {…} => 'Object', ƒ => 'function'}
 My map element is: 0
 Map(0) {size: 0}



                                                  Symbol Part 1



const mySymbol= Symbol();

console.log(typeof mySymbol);

const mySymbolOne=Symbol("Testing");
const mySymbolTwo=Symbol("Testing");

console.log(mySymbolOne===mySymbolTwo); //unique


const myNewSymbol=Symbol();
const myObject={
    username:"moemen",
    website:"Moemen.com",
    [myNewSymbol]:"this is hidden from iteration",

};

for(let value of Object.entries(myObject)){
    console.log(value);
}
console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));
console.log(Object.getOwnPropertySymbols(myObject));
console.log(JSON.stringify(myObject));

output:
------
symbol
 false
 ['username', 'moemen']
 ['website', 'Moemen.com']
 ['username', 'website']
 ['username', 'website']
[Symbol()]
{"username":"moemen","website":"Moemen.com"}


                                                 Symbol Part 2

keyFor and description its the same


const mySymbolOne=Symbol.for('testing1'); //symbol not exist create it
const mySymbolTwo=Symbol.for('testing2'); //symbol is exist create it

console.log(mySymbolOne===mySymbolTwo);
console.log(Symbol.keyFor(mySymbolOne));
console.log(Symbol.keyFor(mySymbolTwo));
console.log(mySymbolOne.description);

output:
------
false
testing1
testing2
testing1


                                                       forEach And Discussions


const arr = ["A", "B", "C", "D", ,"F"];

for (let i = 0; i < arr.length; i++) {

  console.log(`${i} - ${arr[i]}`);

}

console.log(`${"#".repeat(30)}`);

arr.forEach((el, i) => {

  console.log(`${i} - ${el}`);

});

console.log(`${"#".repeat(30)}`);

let callbacks = 0;

arr.forEach((el, i) => {

  console.log(`${i} - ${el}`);

  callbacks++;

});

console.log(callbacks);

console.log(`${"#".repeat(30)}`);

function makeTheLoop(element, index) {

  console.log(`${index} - ${element}`);

}

arr.forEach(makeTheLoop);

                                              forEach With Set And Map


const mySet = new Set([1, 1, 1, 2, 2, 2, 3, 4, 5]);
mySet.forEach((item,item2)=>{
    console.log(item+"-"+item2);
});

const myMap=new Map([["A",1],["B",2],["C",3],["D",{}]]);

myMap.forEach((v,k)=>{

       console.log(`${k}=>${v}`); 



})

                                                Set vs WeakSet And Garbage Collection

/*
  Set vs WeakSet
  ======================

  Set
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakSet
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys


let mainObject = {A: 1};

let mySet = new Set([ mainObject ]);

let objectOne = {B: 2};
let objectTwo = {C: 3};

mySet.add(objectOne);
mySet.add(objectTwo);

console.log(mySet);

console.log(mySet.has(objectOne));
console.log(mySet.has(objectTwo));

console.log(mySet.size);
console.log(mySet.keys());

mySet.delete(objectOne);
console.log(mySet.has(objectOne));

objectTwo = null;
console.log(mySet.has(objectTwo));

console.log(mySet);

mySet.add("String");
mySet.add(12);

console.log(mySet);

mySet.forEach(v => {

  console.log(v);

});

---------------------------------------------------------

let mainObject = {A: 1};

let myWeakSet = new WeakSet([ mainObject ]);

let objectOne = {B: 2};
let objectTwo = {C: 3};

myWeakSet.add(objectOne);
myWeakSet.add(objectTwo);

console.log(myWeakSet);

console.log(myWeakSet.has(objectOne));
console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size);
// console.log(myWeakSet.keys());

myWeakSet.delete(objectOne);
console.log(myWeakSet.has(objectOne));

objectTwo = null;
console.log(myWeakSet.has(objectTwo));

console.log(myWeakSet);

// myWeakSet.add("String");
// myWeakSet.add(12);

// myWeakSet.forEach(v => {

//   console.log(v);

// });


                                                     Map vs WeakMap


/*

  Map vs WeakMap
  ======================

  Map
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakMap
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys



let myMap = new Map();
let objectOne = {a: 1};
myMap.set(objectOne, "Test");
myMap.set("b", 2);
myMap.set("c", 3);
myMap.set(1, 15);

console.log(myMap);
console.log(myMap.get("c"));
console.log(myMap.get(objectOne));

console.log(myMap.has("b"));
myMap.delete("b");
console.log(myMap.has("b"));

objectOne = null;
console.log(myMap.get(objectOne));

console.log(myMap.size);

let myWeakMap = new WeakMap();
let objectOne = {a: 1};
let objectTwo = {b: 2};
myWeakMap.set(objectOne, "Test1");
myWeakMap.set(objectTwo, "Test2");
// myWeakMap.set("b", 2);
// myWeakMap.set("c", 3);
// myWeakMap.set(1, 15);

console.log(myWeakMap);

console.log(myWeakMap.get(objectOne));

console.log(myWeakMap.has(objectTwo));
myWeakMap.delete(objectTwo);
console.log(myWeakMap.has(objectTwo));

objectOne = null;
console.log(myWeakMap.get(objectOne));

console.log(myWeakMap);

// console.log(myWeakMap.size);


                                                    Symbol Iterator And For Of Loop


/*

  Symbol Iterator & For Loop

  Iterable => Object Has Symbol.Iterator
  Iterator
    - Object With Interface Designed For Iteration
    - All Iterators Has Next() Method That Return Result Object
    - The Result Object Has Two Props
    --- [1] Value => The Next Value
    --- [2] Done => Boolean Value To Tell If The Next Value Exists Or No

  For ... Of Loop

  [1] Call Symbol.Iterator With Next Method
  [2] Save Value Inside Variable
  [3] Check For Done If Its True => Exit The Loop


let myArray = [1, 2, 3];
let myName = "Osama";
let myNumber = 1000;
let myObject = {};

console.log(typeof(myArray[Symbol.iterator]));
console.log(typeof(myName[Symbol.iterator]));
console.log(typeof(myNumber[Symbol.iterator]));
console.log(typeof(myObject[Symbol.iterator]));

let theIterator = myName[Symbol.iterator]();

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for (let char of myName) {

  console.log(char);

}

// for (let num of myNumber) {

//   console.log(num);

// }

// for (let a of myObject) {

//   console.log(a);

// }


*/
