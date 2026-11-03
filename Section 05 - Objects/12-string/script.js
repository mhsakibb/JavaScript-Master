
// String primitive
const message = ' This is my\' \n first message ';

// String object
const another = new String('hi');

console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.includes('not'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));

console.log(message.replace('first', 'second'));
console.log(message);
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimLeft());
console.log(message.split(' '));