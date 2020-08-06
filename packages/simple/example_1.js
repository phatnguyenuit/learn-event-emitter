// Create an event emitter instance and register a couple of callbacks
const myEmitter = require('./event');

function c1() {
  console.log('[c1] an event occurred!');
}

function c2() {
  console.log('[c2] yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

// Test
myEmitter.emit('eventOne');
