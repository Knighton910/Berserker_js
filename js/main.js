// A matrix for Javascript learning & enjoyment!
console.log("< 🛡 Berserker is active ⚔️ >");

// refreshing knowledge on the call site - call stack
// function baz() {
//     console.log("baz");
//     bar();
// }
// function bar() {
//     console.log('bar');
//     foo();
// }
// function foo() {
//     console.log('foo');
//     boo();
// }
// function boo() {
//     debugger;
//     console.log('boo!');
// }
// baz();

// Custom code Test functionality code
function assert(value, desc) {
    let li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
window.onload = () => {
    assert(true, "The test suite is running.");
    assert(false, "Fail!");
} //  ----  end of testing section  ----


// Using a closure in a timer interval callback
function animateIt(elementId) {
    let el = document.getElementById(elementId);
    let tick = 0;
    let timer = setInterval(function() {
        if (tick < 100) {
            el.style.left = el.style.top = tick + "px";
            tick++;
        } else {
            clearInterval(timer);
            assert(tick === 100,
                "Tick accessed via a closure")
        }
    },10)
}
animateIt("box1");
animateIt("box2");
// Private vars are accessed through funcs, not through Objs
//(private vars caveat)
// function Ninja() {
//     let feints = 0;
//     this.getFeints = function () {
//         return feints;
//     };
//     this.feint = function () {
//         feints++;
//     };
// }
// let ninja1 = new Ninja();
// ninja1.feint();

// let imposter = {};
// imposter.getFeints = ninja1.getFeints;
// assert(imposter.getFeints() === 1,
//     "The imposter has access to the feints var!");

// Approximate private variables with closures
// function Ninja() {
//     let feints = 0;
//     this.getFeints = function() {
//         return feints;
//     };
//     this.feint = function() {
//         feints++;
//     };
// }
// let ninja1 = new Ninja();
// assert(ninja1.feints === undefined,
//     "And the private data is inaccessible to us.");
// ninja1.feint();
// assert(ninja1.getFeints() === 1,
//     "We're able to access the internal feint count.");
// let ninja2 = new Ninja();
// assert(ninja2.getFeints() === 0,
//     "The second ninja object gets its own feints variable.")

// Overriding function identifiers
// assert(typeof fun === "function",
//     "We access the function");
// let fun = 3;
// assert(typeof fun === "number",
//     "Now we access the number");
// function fun() {}
// assert(typeof fun === "number",
//     "Still a number");

// Accessing a function before its declaration
// assert(typeof fun === "function",
//     "fun is a function even though its definition isn't reached yet!");

// assert(typeof myFunExp === "undefined",
//     "But we cannot access function expressions");

// assert(typeof myArrow === "undefined", "Nor arrow functions");

// function fun() {}
// let myFunExpr = function() {};
// let myArrow = (x) => x;

// Using const and let keywords
// const GLOBAL_NINJA = "Yoshi";

// function reportActivity() {
//     const funcActivity = "jumping";

//     for(let i=1; i<3; i++) {
//         let forMsg = GLOBAL_NINJA + " " + funcActivity;
//         assert(forMsg === "Yoshi jumping", "Yoshi is jumping within the for block");
//         assert(i, "Current loop counter:" + i);
//     }

//     assert(typeof i === "undefined" && typeof forMsg === "undefined",
//         "Loop vars not accessible outside the loop");
// }
// reportActivity();
// assert(typeof funcActivity === "undefined" && typeof i === "undefined" && typeof forMsg === "undefined",
//     "We cannot see function vars outside of a func");

// Using the var keyword
// var globalNinja = "Yoshi";
//
// function reportActivity() {
//     var funcActivity = "jumping";
//
//     for(var i = 1; i < 3; i++) {
//         var forMsg = globalNinja + " " + funcActivity;
//         assert(forMsg === "Yoshi jumping", "Yoshi is jumping within the for block");
//         assert(i, "Current loop counter: " + i);
//     }
//
//     assert(i === 3 && forMsg === "Yoshi jumping", "Loop variables accessible outside of the loop");
// }
// reportActivity();
// assert(typeof funcActivity === "undefined" && typeof i === "undefined" && typeof forMsg === "undefined",
//     "We cannot see function variables outside of a function");

// The behaviour of const variables
// const firstConst = "samurai";
// assert(firstConst === "samurai", "firstConst is a samurai");
//
// try {
//     firstConst = "ninja";
//     fail("shouldn't be here");
// } catch (e) {
//     pass("An exception has occurred");
// }
//
// assert(firstConst === "samurai", "firstConst is still samurai");
// const secondConst = {};
// assert(secondConst.weapon === "wakashai", "we can add new props");
// const thirdConst = [];
// assert(thirdConst.length === 0, "No items in our array");
// thirdConst.push("Yoshi");
// assert(thirdConst.length === 1, "The array has changed!");

// The creation of execution contexts
// function skulk(ninja) {
//     report(ninja + ' skulking');
// }
// function report(msg) {
//     console.log(msg);
// }
// skulk('Kuma');
// skulk('Yoshi');

// Using a closure in a timer interval callback
// function animateIt (elementId) {
//     el = document.getElementById(elementId);
//     tick = 0;
//     let timer = setInterval(function() {
//         if (tick < 100) {
//             el.style.left = el.style.top = tick + 'px';
//             tick++;
//         } else {
//             clearInterval(timer);
//
//             assert(tick === 100,
//                 "tick accessed via a closure");
//             assert(el,
//                 "element also accessed via a closure");
//             assert(timer,
//                 "Timer reference also obtained via a closure");
//         }
//     }, 10);
// }
// animateIt('box1');

// Private vars
// function Ninja() {
//     let feints = 0;
//     this.getFeints = function() {
//         return feints;
//     };
//     this.feint = function() {
//         feints++;
//     };
// }
//
// let ninja1 = new Ninja();
// let ninja2 = new Ninja();
// ninja1.feint();
//
// assert(ninja1.feints === undefined,
//     "And the private data is inaccessible to us.");
// assert(ninja1.getFeints() === 1,
//     "We're able to access the internal feint count.");
// assert(ninja2.getFeints() === 0,
//     "The second ninja object gets its own feints var");

// Spicier closure example
// let outerVal = "samurai";
// let later;
//
// function outerFunc() {
//     let innerVal = "ninja";
//
//     function innerFunc() {
//         assert(outerVal === "samurai",
//             "I can see the samurai");
//         assert(innerVal === "ninja",
//             "I can see the ninja.");
//     }
//     later = innerFunc();
// }
// outerFunc();
// later();

// Basic closure example
// let outerValue = 'ninja';
// function outerFunc() {
//     assert(outerValue === 'ninja', 'I can see the ninja.');
//     console.log(outerValue);
// }
// outerFunc();

// function getMostCostEffectiveSolution (score, cost, highscore) {
//     var cost = 100;
//     var index;
//
//     for (var i = 0; i < scores.length; i++) {
//         if (score[i] == highscore) {
//             if (cost > score[i]) {
//                 i = score[i];
//                 cost = score[i];
//             }
//         }
//     }
// }
//
// console.log("dribble placeholder");


//  ---------- [[ April 10 lessons ]] ------------------- >>
// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
//
// var highScore = 0;
// var output;
//
// for (var i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + "score: " + scores[i];
//     console.log(output);
//
//     if (scores[i] > highScore) {
//         highScore = scores[i];
//     }
// }
//
// console.log("Bubble tests: " + scores.length);
// console.log("Highest Bubble score: " + highScore);
//
// var bestSolutions = [];
//
// for (var j = 0; j < scores.length; ++j) {
//     if (scores[j] == highScore) {
//         bestSolutions.push(i);
//     }
// }
//
// console.log("Solutions with the highest score: " + bestSolutions);


// function bake (degrees) {
//     var message;
//
//     if (degrees > 500) {
//         message = "Im not a nuclear reactor!";
//     } else if (degrees < 100) {
//         message = "Im not a refrigerator";
//     } else {
//         message = "It's a nice temperature for me";
//         setMode("bake");
//         setTemp(degrees);
//     }
//
//     return message;
// }
//
//
// function setMode(mode) {
//     console.log(mode);
// }
//
// function setTemp(temp) {
//     return temp;
// }
//
// var status = bake(350);
// console.log(status);

//  ---------- [[ Feb 27 lessons ]] ------------------- >>
// var nuCarModel = {
//     _name : "prototype SubZeroCoupe"
// };
//
// Object.defineProperty(nuCarModel, "name", {
//     get: function() {
//         console.log("Reading name");
//         return this._name;
//     },
//     set: function(value) {
//         console.log("Setting name to %s", value);
//         this._name = value;
//     },
//     enumerable: true,
//     configurable: true
// });
//
// var nuAirplaneModel = {};
//
// Object.defineProperties(nuAirplaneModel, {
//    _name : {
//        value : "JumboPremiumLinerXV-Tokyo",
//        enumerable : true,
//        configurable : true,
//        writable : true
//    },
//     name : {
//        get : function () {
//            console.log("Reading name");
//            return this._name;
//        },
//         set : function (value) {
//            console.log("Setting name to %s", value);
//            this._name = value;
//         },
//         enumerable : true,
//         configurable : true
//     }
// });

//  ---------- [[ Feb 26 lessons ]] ------------------- >>
// var myBooks = {};
//
// var mango = {
//     color: "yellow",
//     shape: "round",
//     sweetness: 8,
//
//     howSweetAmI: function() {
//         console.log("Hmm Hmm Good");
//     }
// };
//
// var banana = new Object();
// banana.color = "Yellow";
// banana.shape = "long & angular";
// banana.sweetness = 5;
// banana.howSweetAmI = function() {
//     console.log("Hmm Hmm decently so");
// };
//
// console.log("sweetness" in banana); //testing property operator

// var mangoFruit = {
// //     color: "yellow",
// //     sweetness: 8,
// //     fruitName: "Mango",
// //     nativeToLand: ["South America", "Central America"],
// //
// //     showName: function() {
// //         console.log("This is " + this.fruitName);
// //         },
// //     nativeTo: function() {
// //         this.nativeToLand.forEach(function(eachCountry) {
// //             console.log("Grown in: " + eachCountry);
// //         })
// //     }
// // };
// // mangoFruit.nativeTo();// // var mangoFruit = {
// //     color: "yellow",
// //     sweetness: 8,
// //     fruitName: "Mango",
// //     nativeToLand: ["South America", "Central America"],
// //
// //     showName: function() {
// //         console.log("This is " + this.fruitName);
// //         },
// //     nativeTo: function() {
// //         this.nativeToLand.forEach(function(eachCountry) {
// //             console.log("Grown in: " + eachCountry);
// //         })
// //     }
// // };
// // mangoFruit.nativeTo();
//
//
// function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {
//     this.color = theColor;
//     this.sweetness = theSweetness;
//     this.fruitName = theFruitName;
//     this.nativeToLand = theNativeToLand;
//
//     this.showName = function() {
//         console.log("This is a " + this.fruitName);
//     };
//
//     this.nativeTo = function() {
//       this.nativeToLand.forEach(function(eachCountry) {
//           console.log("Grown in: "+ eachCountry);
//       })
//     };
// }
//
// var mangoFruit = new Fruit("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
//
// mangoFruit.showName();
// mangoFruit.nativeTo();
//
// var pineapple = new Fruit("Yellow", 7, "Pineapple", ["United States"]);
// pineapple.showName();
//
// // Object Prototype Pattern
// function Car () {}
//
// Car.prototype.color = "Red";
// Car.prototype.safetyness = 8;
// Car.prototype.carName = "Bently Z";
// Car.prototype.factoryLocation = "Crewe, UK";
// Car.prototype.showName = function() {
//   console.log("This is a " + this.carName);
// };
// Car.prototype.location = function() {
//     console.log("Constructed in " + this.factoryLocation);
// };
//
// var nuModelX = new Car();
// nuModelX.showName();
// nuModelX.location();
//
// console.log(200+200);
//
// function returnMe() {
//     return 300 + 300;
// }
//
// console.log(returnMe());
//
// function Bike () {
//     var _gear = 0;
//     this.getGear = function() {
//         console.log(this._gear);
//         return "gear value is " + this._gear;
//     };
//     this.setGear = function(set) {
//         this._gear = set;
//         return "gear set";
//     };
// }
//
// var motorBike = new Bike();
//
// motorBike.setGear(3);
// motorBike.getGear();
//
//
// function User (theName, theEmail) {
//     this.name = theName;
//     this.email = theEmail;
//     this.quizScores = [];
//     this.currentScore = 0;
// }
//
// User.prototype = {
//   constructor: User,
//   saveScore: function(theScoreToAdd) {
//       this.quizScores.push(theScoreToAdd);
//   },
//   showNameAndScores: function() {
//       var scores = this.quizScores.length > 0 ? this.quizScores.join(","): "No Scores Yet";
//       return this.name + " Scores: " + scores;
//   },
//     changeEmail: function(newEmail) {
//       this.email = newEmail;
//       return "New Email Saved: " + this.email;
//     },
//     displayName: function() {
//       console.log(this.name);
//     }
// };
//
// firstUser = new User("Kelvin", "keltheceo@gmail.com");
// firstUser.changeEmail("keltheceo@hotmail.com");
// firstUser.saveScore(20);
// firstUser.saveScore(" A+ :A score of the highest order!");
//
// console.log(firstUser.showNameAndScores()); // Kelvin 20, A+ A score..
//
// secondUser = new User("Ericka", "EloquentLady@start.com");
// secondUser.saveScore("B+ :Meh room for improvement");
// secondUser.displayName();
//
// console.log(secondUser.showNameAndScores()); // Ericka B+ Meh room..
//
//
// if (typeof Object.create !== 'function') {
//     Object.create = function(o) {
//         function F() {}
//
//         F.prototype = o;
//         return new F();
//     };
// }
//
// var cars = {
//     type: "sedan",
//     wheels: 5
// };
//
// var toyota = new Object.create(cars);
// console.log(toyota.type);
//
// function inheritPrototype(childObj, parentObj) {
//     var copyOfParent = Object.create(parentObj.prototype);
//     copyOfParent.constructor = childObj;
//     childObj.prototype = copyOfParent;
// }
//
// function Question (theQuestion, theChoices, theAnswer) {
//     this.question = theQuestion;
//     this.choices = theChoices;
//     this.answer = theAnswer;
//     this.userAnswer = "";
//
//     var _newDate = new Date();
//     const _QuizCreatedDate = _newDate.toLocaleString();
// }
//
// Question.prototype = {
//     constructor: Question,
//     getCorrectAnswer: function() {
//         return this.answer;
//     },
//     getUserAnswer: function () {
//         return this.userAnswer;
//     },
//     displayQuestion: function () {
//         var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
//         choiceCounter = 0;
//
//         this.choices.forEach(function(eachChoice) {
//             questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
//             choiceCounter++;
//         });
//         questionToDisplay += "</ul>";
//
//         console.log(questionToDisplay)
//     }
// };
