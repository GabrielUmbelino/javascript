function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {

    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;
    
    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }

    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }


}

var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.
mangoFruit.nativeTo();
//Grown in:South America
// Grown in:Central America
// Grown in:West Africa

var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // This is a Pineapple.

// Prototype Pattern for Creating Objects

function FruitConstructor () {

}

FruitConstructor.prototype.color = "Yellow";
FruitConstructor.prototype.sweetness = 7;
FruitConstructor.prototype.fruitName = "Generic Fruit";
FruitConstructor.prototype.nativeToLand = "USA";

FruitConstructor.prototype.showName = function () {
    console.log("This is a " + this.fruitName);
}

FruitConstructor.prototype.nativeTo = function () {
    console.log("Grown in:" + this.nativeToLand);
}

var mango = new FruitConstructor();
mango.showName(); //
mango.nativeTo();
// This is a Generic Fruit
// Grown in:USA