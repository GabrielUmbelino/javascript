// #1 EXAMPLE 
//Note that the item in the click method's parameter is a function, not a variable.
//The item is a callback function
$("#btn_1").click(function () {
    alert("Btn 1 Clicked");
});


// #2 EXAMPLE 
var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachName, index) {
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});


// #3 EXAMPLE 
// global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    } else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

// A function that takes two parameters, the last one a callback function
// function getInput(options, callback) {
//     allUserData.push(options);
//     callback(options);

// }

function getInput(options, callback) {
    allUserData.push(options);

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
        callback(options);
    }
}


// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput({
    name: "Rich",
    speciality: "JavaScript"
}, logStuff);
//  name: Rich
// speciality: JavaScript

// #4 EXAMPLE 

// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
      this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);
}

getUserInput("Barack", "Obama", clientData.setUserName);

console.log(clientData.fullName);// Not Set

// The fullName property was initialized on the window object
console.log(window.fullName); // Barack Obama

//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput2(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply(callbackObj, [firstName, lastName]);
}

// We pass the clientData.setUserName method and the clientData object as parameters. The clientData object will be used by the Apply function to set the this object
getUserInput2("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log(clientData.fullName); // Barack Obama

