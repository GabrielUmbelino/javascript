var myFriends = { name: "Pete" };

// To find the name property below, the search will begin directly on the myFriends object and will immediately find the name property
// because we defined the property name on the myFriend object.
// This could be thought of as a prototype chain with one link.
console.log(myFriends.name);

// In this example, the search for the toString() method will also begin on the myFriends’ object, but because we never created
//  a toString method on the myFriends object, the compiler will then search for it on the myFriends
// prototype (the object which it inherited its properties from).

// And since all objects created with the object literal inherits from Object.prototype, the toString method will be found on
// Object.prototype—see important note below for all properties inherited from Object.prototype.

myFriends.toString();

function People() {
  this.superstar = "Michael Jackson";
  this.littlePeople = "Decker";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";
// The search for superstar will first look for the superstar property on the famousPerson object, 
// and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s 
// superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain.
console.log(famousPerson.superstar); // Steve Jobs
console.log(famousPerson.littlePeople);

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), 
// since the athlete property was not defined on the famousPerson object itself.
console.log(famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, 
// from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log(famousPerson.toString()); // [object Object]
