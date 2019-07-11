/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Global binding - in the global scope the value of "this" is the console.
* 2. Implicit binding - when called by a preceding dot, the object left of the dot gets "this".
* 3. New binding - When a constructor function is used, 'this' is the specific
    instance of the object that is created and returned by the constructor function.
* 4. Explicit binding - When JavaScript's call or apply method is used, 'this'
    is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

//code example for Global Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'Barbara',
    age: 28,
    favFood: 'kolachies',
    eat: function() {
        return `${this.name} likes to eat ${this.favFood}`;
    }
}

console.log(person.eat());

// Principle 3

// code example for New Binding
function Person(activity, name) {
    this.activity = activity;
    this.name = name;
    this.does = function() {
        return `${this.name} ${this.activity}`;
    }
}

const barbara = new Person('plays video games', 'Barbara');

console.log(barbara.does());

// Principle 4

// code example for Explicit Binding
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Game(name, price) {
    Product.call(this, name, price);
    this.category = 'game';
    console.log(`${this.name} for ${this.price}`);
    }

console.log(new Game('World of Warcraft', '$60').name);