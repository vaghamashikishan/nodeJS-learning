const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('eventOne', () => {
    console.log('This is called for eventOne event');
})

customEmitter.emit('eventOne');