const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    this.emit('message', {id : uuid.v4(), msg});
  }
}

const myLogger = new Logger();

myLogger.on('message', function (e) {
  console.log(e);
});

module.exports = myLogger;