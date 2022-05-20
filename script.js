 /*
                                    EcmaScript 6 JS

var
let
const   



function hello() {
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
   console.log(i);
}
hello();


output:
 0
 1
 2
 3
 4
Uncaught ReferenceError: i is not defined
    at hello (script.js:14:16)
    at script.js:16:1

    -------------------------

    function hello() {
    for (const i = 0; i < 5; i++){
        console.log(i);
    }
}
hello();

output:
0
script.js:31 Uncaught TypeError: Assignment to constant variable.
    at hello (script.js:31:31)
    at script.js:35:1




                                              Objects

    const designer = {
     
    name: "Moemen",
    programs() { 
        console.log(`photoshop`);
    },
    skills() {
        console.log(`Graphic`);
    }
 }

console.log(designer.name);
designer.programs();
designer.skills();


output:
-----
Moemen
photoshop
Graphic



                                                       This keyword
                                                       

  const designer = {
     
    name: "Moemen",
    programs() { 
        console.log(`photoshop`);
    }
}
designer.programs();

output:
-------
photoshop

---------------------
   const designer = {
     
    name: "Moemen",
    programs() { 
        console.log(this);
    }
}
designer.programs();
const prog = designer.programs.bind(designer);
prog();

output:
------

{name: 'Moemen', programs: ƒ}
{name: 'Moemen', programs: ƒ}


                                                  Arrow function

Old method
-----------
const  square=function(n) {
    return n * n;
}
console.log(square(5));



EcmaS6
-------
const  square=n => n * n;
console.log(square(5));

---------------------------

old method
-----------
const freeDesigners = designers.filter(
    function (designer) {
        return designer.free;
    }
);

console.log(freeDesigners[0].name);

New method
------------

const designers = [
    { name: 'Nour', free: true },
    { name: 'Majed', free: false },
    { name: 'Anas', free: true },
];

const freeDesigners = designers.filter(designer=> designer.free);

console.log(freeDesigners[0].name);

-------------------------

const designer = {
    skills(){
        setTimeout(()=> {
            console.log("Designer:",this); 
        },1000)
    }
}
designer.skills();

output:
--------
Designer: {skills: ƒ}


                                                    Array.map

old method
----------
const names = ["Nour", "Majed", "Anas"];
for (i = 0; i < names.length; i++){
    console.log(`<li>` + names[i] + `</li>`);
}

output:
-------
<li>Nour</li>
<li>Majed</li>
<li>Anas</li>


-----------------

const names = ["Nour", "Majed", "Anas"];
const items = [];

for (i = 0; i < names.length; i++){
    let list = `<li>` + names[i] + `</li>`;
    items.push(list);
}
console.log(items);

output:
-------
['<li>Nour</li>', '<li>Majed</li>', '<li>Anas</li>']

----------------------
New methode
--------------
const names = ["Nour", "Majed", "Anas"];

const items = names.map(name =>`<li>${name}</li>`);
console.log(items);

                                            Object Destructuring

 old:
 -----
 const designer = {
    first_name:'Moemen',
    last_name:'Saade',
    position:'Designer'
 }

const first_name = designer.first_name;
const last_name = designer.last_name;
const position = designer.position;


New:
----
const designer = {
    first_name:'Moemen',
    last_name:'Saade',
    position:'Designer'
 }

const { first_name, last_name, position } = designer;
console.log(last_name);

output:
------- 
Saade

-------------
const designer = {
    first_name:'Moemen',
    last_name:'Saade',
    position:'Designer'
 }

const { first_name, last_name:ls, position:po } = designer;
console.log(ls);

output:
-------
Saade

                                                    Array Spread

old:
-----
const Array_1 = [1, 2, 3];
const Array_2 = [4, 5, 6];

const Arrays = Array_1.concat(Array_2);
console.log(Arrays);

[1, 2, 3, 4, 5, 6]


New
-----
const Array_1 = [1, 2, 3];
const Array_2 = [4, 5, 6];
const Arrays = [...Array_1,"Moemen",...Array_2];
console.log(Arrays);

output:
------
(7) [1, 2, 3, 'Moemen', 4, 5, 6]



--------------------
const Object_1 = { name:'Moemen'};
const Object_2 = { position: 'Designer' };

const Objects = { ...Object_1, ...Object_2 };
console.log(Objects);


output:
------
{name: 'Moemen', position: 'Designer'}----

                                                              Classes
  
  class Designer{
    constructor(name,skill){
        this.name = name;
        this.skill = skill;
    }
    skills() {
        console.log(this.skill);
    }
}

const designer1 = new Designer("Moemen","photoshop");
const designer2 = new Designer("Moemen","illustrator");

console.log(designer1.skills());
console.log(designer2.skills());


                                                        Class inheritance


 class Designer{
    constructor(name,skill){
        this.name = name;
        this.skill = skill;
    }
    skills() {
        console.log(this.skill);
    }
}

class WebDesigner extends Designer{
    programming(){
        console.log(`Js`);
    }
}

const Webdesigner = new WebDesigner("Moemen");
console.log(Webdesigner.name);

output:
------
Moemen

                                                                    Super

 class Designer{
    constructor(name){
        this.name = name;
    }
    skills() {
        console.log("JS");
    }
}

class WebDesigner extends Designer{
    constructor(name,location) {
        super(name);
        this.location = location;
    }
    programming(){
        console.log(`Js`);
    }
}

const Webdesigner = new WebDesigner("Moemen","Lebanon");
console.log(Webdesigner.name);
console.log(Webdesigner.location);

*/