/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name=name;
  this.age=age;
  this.stomach=[];
  
}
Person.prototype.eat = function(edible){
  if(this.stomach.length <10 ) {
    this.stomach.push(edible)
  }
}
Person.prototype.poop = function() {
  this.stomach = [];
}
Person.prototype.toString= function(){
  return `${this.name}, ${this.age}`;
}


const elijah = new Person('Elijah', 35);

// console.log(elijah.toString());
elijah.eat('salad');
elijah.eat('soup');
elijah.eat('pizza');
elijah.eat('almonds');
elijah.eat('grapes');
elijah.eat('juice');
elijah.eat('hamburger');
elijah.eat('Ice cream');
elijah.eat('cereal');
elijah.eat('crackers');
// console.log(elijah.stomach);

elijah.poop();
// console.log(elijah.stomach);
 
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model=model;
  this.milesPerGallon=milesPerGallon;
  this.tank = 0;
  this.odometer= 0;
}
Car.prototype.fill= function(gallons) {
  return this.tank= this.tank + gallons
}
Car.prototype.drive= function(distance){
  const maxDistance= this.milesPerGallon * this.tank;
  if(maxDistance> distance) {
    this.tank=0;
    this.odometer= this.odometer + maxDistance;
    return`I ran out of fuel at ${this.odometer} miles!`
  } else{
    this.odometer= this.odometer+ distance;
    this.tank= this.tank-(distance/this.milesPerGallon)
  }
}
 const babooshka = new Car('Fusion', 32)
 console.log(babooshka)
 babooshka.fill(5);
 console.log(babooshka)
babooshka.drive(100);
console.log(babooshka);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy= favoriteToy;
}
Baby.prototype= Object.create(Person.prototype);
Baby.prototype.play=function(){
  return `Playing with ${this.favoriteToy}`
}
const reginald= new Baby('Reginald', 3, 'Buzz Lightyear');

// console.log(reginald)

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. global- 'this' refers to the whole window: a massive amount of information that is unusable.
  2. implicit- 'this' initially has no concrete meaning. It is a variable without a home until a method is called. A method will use a period when it is called, and the object to the left of that period becomes the home/owner of 'this'.
  3. new binding- 'this' belongs to a constructor function, and is assigned to a variable through the use of a 'new' keyword 
  4. explicit- 'this' is spelled out by predetermined code. When we use that code we leave no doubt about what 'this' can be referring to.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}