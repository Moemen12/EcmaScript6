/*
                                         New String Methods - Includes, Repeat

let x='Elzero Web School';
console.log(x.includes('Web',0));

console.log(x.repeat(3));


                                            Destructuring Object Part 1 


before
--------

var user={
    Name:"moemen",
    age:30,
    gender:"male",
}

N=user.Name;
A=user.age;
G=user.gender;

console.log(`My name is ${N}, I am ${A},and I am ${G}`);


After
-------

const user={
    Name:"moemen",
    age:30,
    gender:"male",
}

const {Name,age,gender,theme='default'}=user;

console.log(`My name is ${Name}, I am ${age},and I am ${gender},my theme is ${theme}`);



-----------------------------------

const user={
    Name:"moemen",
    age:30,
    gender:"male",
    langs:{
        html:'70%',
        css:'80%',
        js:'10%',
    }
}

const {Name,gender,langs:{html,css}}=user;

console.log(`My name is ${Name},I am ${gender} ,My html progress is ${html}`);

-----------------------------------------

const user={
    Name:"moemen",
    age:30,
    gender:"male",
    langs:{
        html:'70%',
        css:'80%',
        js:'10%',
    }
}

const {html,css,js}=user.langs;
console.log(`${html},${css},${js}`);



                                                     Destructuring Array Part 1


const food=['burger','pizza','chicken','Meat','rice'];
const [one,,three,four="default",]= food;
console.log(`I love these foods ${one},${three} and it is 1 by ${four}`);


                                                      Destructuring Array Part 2


const food=['burger','pizza','chicken',['Apple','Banana','Mango',['egyOrange','pakisOrrange']]];
const [one,two,three,[foor,five,six,[seven,eigth]]]= food;
console.log(`I love these foods ${one},${two} and ${three}`);
console.log(`This fruits that I love is ${foor},${five} and ${six}`);
console.log(`All kindes of oranges is ${seven} and ${eigth}`);


output:
------
I love these foods burger,pizza and chicken
This fruits that I love is Apple,Banana and Mango
All kindes of oranges is egyOrange and pakisOrrange

------------------------------------------------

const food=['burger','pizza','chicken','Apple','Banana','Mango'];
const [one,two,three,...otherFood]= food;
console.log(`I love these foods ${one},${two},${three} and the other Foods ${otherFood}`);


output:
-------
I love these foods burger,pizza,chicken and the other Foods Apple,Banana,Mango



                                                    Destructuring Mixed Content



const user={
    username:"moemen",
    city:"lebanon",
    skills:{
        html:'30%',
        css:'50%',
        js:['vuejs','angularjs','reactjs'],
    }
}

const{username,city,skills:{html,css,js:[one,two,three]}}= user;
 
console.log(`My name is ${username} and I live in ${city}.`);
console.log(`My html progress is ${html}, and css is ${css}`);
console.log(`I have knowledge in Js frameworks like ${one},${two} and ${three}`);


output
---------

My name is moemen and I live in lebanon.
My html progress is 30%, and css is 50%
I have knowledge in Js frameworks like vuejs,angularjs and reactjs

-------------------------------------------------------------------------

before
------
const user={
    username:"moemen",
    city:"lebanon",
    skills:{
        html:'30%',
        css:'50%',
        js:['vuejs','angularjs','reactjs'],
    }
}


function showMyinfo(user){

console.log(`My name is ${user.username} and I live in ${user.city}.`);
console.log(`My html progress is ${user.skills.html}, and css is ${user.skills.css}`);
console.log(`I have knowledge in Js frameworks like ${user.skills.js[0]},${user.skills.js[1]} and ${user.skills.js[2]}`);
}
showMyinfo(user);



after:
------

const user={
    username:"moemen",
    city:"lebanon",
    skills:{
        html:'30%',
        css:'50%',
        js:['vuejs','angularjs','reactjs'],
    }
};


function showMyinfo({username,city,skills:{html,css,js:[one,two,three]}}){

console.log(`My name is ${username} and I live in ${city}.`);
console.log(`My html progress is ${html}, and css is ${css}`);
console.log(`I have knowledge in Js frameworks like ${one},${two} and ${three}`);
}
showMyinfo(user);


output:
------
My name is moemen and I live in lebanon.
My html progress is 30%, and css is 50%
I have knowledge in Js frameworks like vuejs,angularjs and reactjs


                                                    Enhanced Object Literals


const myVarialble="key";

const myObject={

   myProperty:"Myvalue",
   [myVarialble]:"value",

};
console.log(myObject);

output;
-------
{myProperty: 'Myvalue', key: 'value'}


                                                       Set vs Array

let myBook =new Set([1,2,3,3]);
let myArray=[1,2,3,3];

console.log(myBook);      //  {1, 2, 3}
console.log(myArray);      // [1,2,3]

-------------------


let myArray=[1,2,3,4,4];

let myBook =new Set(myArray);

console.log(myBook);
console.log(myArray);

output:
-------
{1, 2, 3, 4}
 [1, 2, 3, 4, 4]


--------------------

let myArray=[1,2,3,3,4,4,2];

//we removed the repeated numbers

let myBook =new Set(myArray); we got in object {1,2,3,4}

//then we convert it to array
console.log([...myBook]);

*/
