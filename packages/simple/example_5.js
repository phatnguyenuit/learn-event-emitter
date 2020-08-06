// Unregistering events
const myEmitter = require('./event');

const c1 = () => console.log('[c1] Event one fired!');
const c2 = () => console.log('[c2] Event one fired!');

myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);

// Test
console.log(myEmitter.listenerCount('eventOne'));
console.log(myEmitter.rawListeners('eventOne'));
