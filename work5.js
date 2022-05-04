/*
                                        Modules - Part 1 Import & Export

      
import {a,myArray,sayHello} from './work4.js';
console.log(a);
console.log(myArray);
console.log(sayHello("Moemen"));

                                       Modules - Part 2 Import All And Aliases   
                                    
                                    

import * as all from  './work4.js';
console.log(all.myRank);
console.log(all.sayHello("Moemen"));
console.log(all.myArray);

                                       Modules - Part 3 Named Export Vs Default Export

/*
  Modules Part 3 Named Export vs Default Export

import defaultExp, { a, b } from './app.js';

console.log(a);
console.log(b);
console.log(defaultExp);
 

                                             Classes Part 1 Old and New Syntax

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Hello ${this.name} Your Age Is ${this.age}`);
  }
  getDays() {
    console.log(`You Lived For ${this.age * 365} Days`);
  }
}

const firstUser = new User("Osama", 36);

firstUser.getInfo();
firstUser.getDays();


                                            Classes Part 2 Extend Class From Another
                                     
class User{
     constructor(name,email){
         this.name=name;
         this.email=email;



     }
     getinfo(){
         console.log(`Hello ${this.name} Your email is ${this.email}`);
     }
     
}

export default User;


                                        Asynchronous vs Synchronous Programming

console.log("function to do something");
alert("Delay");
console.log("Do imprtant things, waiting is a big problem");



/*
  Promise Intro
  - Promise Is One Of The Best Features In ES6
  - Promise Make It Easy To Support Asynchronous Programming
  - Promise in JavaScript Is Like Promise in Real Life
  - Promise Is Something That Will Happen in The Future
  - Promise Is A Placeholder For A Future Value
  - You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
  - You Got Task To Do, U Promised Your Boss To Do The Task
  - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
  - You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive
  - Promise Is An Object
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
  - JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom
  - Promise Is One Of This States
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded
  [3] Rejected => Operation Failed


                                                 Create Your First Promise
const myPromise = new Promise((resolve, reject) => {
    // console.log("Welcome To My First Promise");
    /*
      Asynchronous Operation
      Fulfilled => resolve
      Rejected => reject

  
    let connect = true;
    if (connect) {
      resolve("Connection Established");
    } else {
      reject(Error("Connection Failed"));
    }
  }).then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
  );
  
  console.log(typeof myPromise);
  
  // Another Syntax
  
  const theResolved = (resolved) => console.log(resolved);
  const therejected = (rejected) => console.log(rejected);
  
  myPromise.then(theResolved, therejected);



                                                     Then And Catch And Training
// First Example

const myPromise = new Promise((resolve, reject) => {
    // Only One State Allowed
    // resolve("Resolved");
    // reject("Rejected"); // Ignored
  
    if (Math.random() * 100 < 50) {
      resolve("Good");
    } else {
      reject("Bad");
    }
  });
  
  myPromise.then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
  );
  
  // Other Syntax
  
  myPromise.then(null, (rejected) => console.log(rejected));
  myPromise.catch((rejected) => console.log(rejected));
  
  // Second Example
  
  firstRequest(function (response) {
    secondRequest(
      response,
      function (nextResponse) {
        thirdRequest(
          nextResponse,
          function (finalResponse) {
            console.log("Final response: " + finalResponse);
          },
          failureCallback
        );
      },
      failureCallback
    );
  }, failureCallback);
  
  firstRequest()
    .then((response) => secondRequest(response))
    .then((nextResponse) => thirdRequest(nextResponse))
    .then((finalResponse) => console.log("Final response: " + finalResponse))
    .catch(failureCallback);


                                            Promise And XMLHTTPRequest

      // Without Promise

function getFirstRepo(apiURL) {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      
        Ready State => The Status Of The Request
        [0] Request Not Initialized
        [1] Server Connection Established
        [2] Request Recieved
        [3] Processing Request
        [4] Request Is Finished And Response Is Ready
        Status => Response Status Code
        [200] Ok
        [404] Not Found
     
      // console.log(this.responseText);
      console.log(JSON.parse(this.responseText)[0].name);
    }
  };

  // XMLHttpRequest.open(Method, URL, Async, User, Pass)
  myRequest.open("GET", apiURL, true);

  // Send The Request
  myRequest.send();
}

getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos");

// With Promise

const getFirstRepo = (apiURL) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)[0].name);
      } else {
        reject(Error(this.statusText));
      }
    };
    myRequest.open("GET", apiURL, true);
    myRequest.send();
  });
};

getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos").then(
  (result) => {
    let newElement = document.createElement("div");
    let elementText = document.createTextNode(result);
    newElement.appendChild(elementText);
    document.body.appendChild(newElement);
  },
  (error) => console.log(error)
);
  

                                                 Ignoring The Pyramid Of Doom


const myPromise= new Promise((resolve,reject)=>{

  let thePosts=["A","B","C","D","E","F","G","H"];
 
  resolve(thePosts);
      })

      myPromise.then(
       result=>{
       console.log(`Total Number of posts is ${result.length} Posts`);
       return result;
         })
.then(
    result=>{
    console.log("#".repeat(25));
    console.log(`The First post is ${result[0]}`);
    return result;
    })
.then(
     result=>{
    console.log("#".repeat(25));
    console.log(`The Last post is ${result[result.length-1]}`);
     return result;
     })
     .then(
        result=>{
       console.log("#".repeat(25));
       console.log(`Every page has 2 Post`);
       console.log(`Application has ${result.length /2} Pages`);
     });
   

                                                    Promise - Fetch And Training

  fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((result) => {
    let allRepos = result.json();
    console.log(allRepos);
    return allRepos;
  })
  .then((repos) => {
    console.log(`Total Number Of Repos Is ${repos.length}`);
    return repos;
  })
  .then((repos) => {
    console.log(`First Repo Is ${repos[0].name}`);
    return repos;
  })
  .then((repos) => {
    console.log(`Last Repo Is ${repos[repos.length - 1].name}`);
    return repos;
  })
  .then((repos) => {
    for (let i = 0; i < repos.length; i++) {
      let newElement = document.createElement("div");
      let elementText = document.createTextNode(repos[i].name);
      newElement.appendChild(elementText);
      document.body.appendChild(newElement);
    }
  });

                                               Promise - All And Race
                                               
                                               
const myFirstPromise=new Promise((resolve,reject)=>{
   
     let connect=true;

     if(connect){
            resolve(`First Promise resolved`);
     }else{
        reject(`First Promise rejected`);
     }

});


const mySecondPromise=new Promise((resolve,reject)=>{
   
    let settings=true;

    if(settings){
           resolve(`Second Promise resolved`);
    }else{
       reject(`Second Promise rejected`);
    }


});

Promise.all([myFirstPromise,mySecondPromise]).then(   //the 2 promise must be resolved or never this 2 promise willnt work
    result=>{
        console.log(result);
    }
);

-----------------------------------------------------

const myFirstPromise=new Promise((resolve,reject)=>{
   
   window.setTimeout(()=>{
    resolve(`First Promise resolved`);
   },500)



});

const mySecondPromise=new Promise((resolve,reject)=>{
   
    window.setTimeout(()=>{
        resolve(`Second Promise resolved`);
       },100)
    

});

/*
myFirstPromise.then(result=>{
    console.log(result);
})

mySecondPromise.then(result=>{
    console.log(result);
})

Promise.race([myFirstPromise,mySecondPromise]).then(   // here it will get the fastest Promise
    result=>{
        console.log(result);
    }
);


    */
