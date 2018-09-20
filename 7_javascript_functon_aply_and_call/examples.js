// This data variable is a global variable
var data = [{
        name: "Samantha",
        age: 12
    },
    {
        name: "Alexis",
        age: 14
    }
]

var user = {
    // local data variable
    data: [{
            name: "T. Woods",
            age: 37
        },
        {
            name: "P. Mickelson",
            age: 43
        }
    ],
    showData: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1

        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign the showData method of the user object to a variable
var showDataVar = user.showData;

showDataVar(); // Samantha 12 (from the global data array, not from the local data array)

// Bind the showData method to the user object
var showDataVar = user.showData.bind(user);

// Now the we get the value from the user object because the this keyword is bound to the user object
showDataVar (); // P. Mickelson 43

 // Make a quick copy and save the results in a real array:
// First parameter sets the "this" value
var newArray = Array.prototype.slice.call (anArrayLikeObj, 0);

console.log (newArray); // ["Martin", 78, 67, Array[3]]

// Search for "Martin" in the array-like object
console.log (Array.prototype.indexOf.call (anArrayLikeObj, "Martin") === -1 ? false : true); // true

// Try using an Array method without the call () or apply ()
console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'

// Reverse the object:
console.log (Array.prototype.reverse.call (anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}

// Sweet. We can pop too:
console.log (Array.prototype.pop.call (anArrayLikeObj));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}

// What about push?
console.log (Array.prototype.push.call (anArrayLikeObj, "Jackie"));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}

function transitionTo (name) {
    // Because the arguments object is an array-like object
    // We can use the slice () Array method on it
    // The number "1" parameter means: return a copy of the array from index 1 to the end. Or simply: skip the first item

    var args = Array.prototype.slice.call (arguments, 1);

    // I added this bit so we can see the args value
    console.log (args);

    // I commented out this last line because it is beyond this example
    //doTransition(this, name, this.updateURL, args);
}

// Because the slice method copied from index 1 to the end, the first item "contact" was not returned
transitionTo ("contact", "Today", "20"); // ["Today", "20"]





var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
        {name:"Tommy", playerID:987, age:23},
        {name:"Paulo", playerID:87, age:33}
    ]
}

var appController = {
    scores  :[900, 845, 809, 950],
    avgScore:null,
    avg     :function () {

        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}

// Note that we are using the apply () method, so the 2nd argument has to be an array
appController.avg.apply(gameController);
console.log(gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log(appController.avgScore); // null
