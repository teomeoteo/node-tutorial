const EventEmitter = require('events');

// Create class

class MyEmitter extends EventEmitter {};

// init object

const myEmitter = new MyEmitter();

// Event Listener

myEmitter.on('event', () => console.log('Event fired!'));

// Init events

myEmitter.emit('event');