const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
console.log("===========================================");
console.log("NODE.JS EVENTEMITTER DEMONSTRATION");
console.log("===========================================");
console.log("Welcome to Full Stack Development Laboratory\n");
eventEmitter.on('welcome', () => {
    console.log("Event Listener Executed");
    console.log("Welcome to event-driven programming in Node.js");
});
eventEmitter.emit('welcome');
console.log('\nEvent "welcome" has been emitted successfully.');
console.log("\nProgram executed successfully.");


