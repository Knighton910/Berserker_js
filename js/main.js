// A matrix for Javascript learning & enjoyment!
console.log("< 🛡 Berserker is active ⚔️ >");

function getMostCostEffectiveSolution (score, cost, highscore) {
    var cost = 100;
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (score[i] == highscore) {
            if (cost > score[i]) {
                i = score[i];
                cost = score[i];
            }
        }
    }
}

console.log("dribble placeholder");


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
