// Example 1

// In a similar graceful manner, in JavaScript, we use the this keyword as
// a shortcut, a referent; it refers to an object; that is, the subject in context, or
// the subject of the executing code. Consider this example:

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        // Notice we use "this" just as we used "he" in the example sentence earlier?:
        console.log(this.firstName + " " + this.lastName);
        // We could have also written this:​
        console.log(person.firstName + " " + person.lastName);
    }
}

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.fullName(); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
    firstName: "Rohit",
    lastName: "Khan"
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.fullName.apply(anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method

// Example 2

// We have a simple object with a clickHandler method that we want to use when a button on the page is clicked
var user = {
    data: [{
            name: "T. Woods",
            age: 37
        },
        {
            name: "P. Mickelson",
            age: 43
        }
    ],
    clickHandler: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is printing a random person's name and age from the data array
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}

// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
// And the output will be undefined because there is no data property on the button object


// $ ("button").click (user.clickHandler); // Cannot read property '0' of undefined

$("button").click(user.clickHandler.bind(user)); // P. Mickelson 43


// EXAMPLE 3

// We have two objects. One of them has a method called avg () that the other doesn't have
// So we will borrow the (avg()) method
var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players: [{
            name: "Tommy",
            playerID: 987,
            age: 23
        },
        {
            name: "Pau",
            playerID: 87,
            age: 33
        }
    ]
}

var appController = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function () {

        var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}

//If we run the code below,
// the gameController.avgScore property will be set to the average score from the appController object "scores" array

// Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null
gameController.avgScore = appController.avg();

// Note that we are using the apply () method, so the 2nd argument has to be an array—the arguments to pass to the appController.avg () method.
appController.avg.apply(gameController, gameController.scores);

// The avgScore property was successfully set on the gameController object, even though we borrowed the avg () method from the appController object
console.log(gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log(appController.avgScore); // null

// Always remember that this is assigned the value of the object that invoked the this Function.