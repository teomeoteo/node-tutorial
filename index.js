const Person = require('./person');
const pathDemo = require('./reference/path_demo');
const myLogger = require('./logger');
const person1 = new Person('John', 30);

person1.greeting();
pathDemo();

myLogger.log('Hi');