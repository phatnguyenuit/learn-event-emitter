// Unregistering events
const myEmitter = require('./event');

const c1 = () => console.log('Event one fired!');
myEmitter.on('eventOne', c1);

// Test
myEmitter.off('eventOne', c1);
myEmitter.emit('eventOne');
