const { EventEmitter } = require('events');

// Create an event emitter instance and register a couple of callbacks
const myEmitter = new EventEmitter();

module.exports = myEmitter;
