// Registering for the event to be fired only one time using once.
const myEmitter = require('./event');

myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));

// Test
myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');

// Logs
// eventOnce once fired
