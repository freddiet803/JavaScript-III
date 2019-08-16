/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global scope window bind, which just returns a window and the objects contained within
 * 2. implicit , when an object invokes a method such as theObject.run(). this being used to access or manipulate
 *    would be referring to "theObject"
 * 3. new binding . new instance of a class is created, this refers to the instance or that newly created object
 * 4. explict bind , used to basically overwrite the values of the keys of an object
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const theObject = {
  thing: 'Table',
  color: 'Brown',
  describeMe: function(name) {
    console.log(`Hello, my name is ${name}, I am a ${this.thing}`);
    console.log(this);
  }
};

theObject.describeMe('Timmy');
// Principle 3

// code example for New Binding
function Person(myName, otherP) {
  this.name = myName;
  this.sayHi = 'Hi ';
  this.otherPerson = otherP;
  this.greet = function() {
    console.log(`Hey ${this.otherPerson}, I am ${this.name}`);
    console.log(this);
  };
}

const tom = new Person('Tom', 'Jerry');
const jerry = new Person('Jerry', 'Tom');
tom.greet();
jerry.greet();

// Principle 4

// code example for Explicit Binding
console.log('before call and apply');

tom.greet.call(jerry);
jerry.greet.apply(tom);
