const Person = require('./person');
const pathDemo = require('./reference/path_demo');

const person1 = new Person('John', 30);

person1.greeting();
pathDemo();