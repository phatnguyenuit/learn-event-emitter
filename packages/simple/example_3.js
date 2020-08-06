// Registering for the event with callback parameters
const myEmitter = require('./event');

myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));

// Test
myEmitter.emit('status', 200, 'ok');
