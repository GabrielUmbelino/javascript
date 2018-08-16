 // The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

 var highValue = 200;
 var constantVal = 2;
 var myObj = {
     highValue: 20,
     constantVal: 5,
     calculateIt: function () {
         setTimeout(function () {
             console.log(this.constantVal * this.highValue);
         }, 2000);
     }
 }

 // The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.

 myObj.calculateIt(); // 400
 // This is an important point to remember.


 // variable hoisting

 function showName() {
     console.log("First Name: " + name);
     var name = "Ford";
     console.log("Last Name: " + name);
 }

 showName();
 // First Name: undefined
 // Last Name: Ford

 // The reason undefined prints first is because the local variable name was hoisted to the top of the function
 // Which means it is this local variable that get calls the first time.
 // This is how the code is actually processed by the JavaScript engine:

 function showName() {
     var name; // name is hoisted (note that is undefined at this point, since the assignment happens below)
     console.log("First Name: " + name); // First Name: undefined

     name = "Ford"; // name is assigned a value

     // now name is Ford
     console.log("Last Name: " + name); // Last Name: Ford
 }