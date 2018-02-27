// A matrix for Javascript learning & enjoyment!

console.log("< 🛡 Berserker is active ⚔️ >");





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
var banana = new Object();
banana.color = "Yellow";
banana.shape = "long & angular";
banana.sweetness = 5;
banana.howSweetAmI = function() {
    console.log("Hmm Hmm decently so");
};

console.log("sweetness" in banana); //testing property operator

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
