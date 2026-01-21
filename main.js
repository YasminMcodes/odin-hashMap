import {HashMap} from './hashmap.js';


const test = new HashMap();

console.log(test.loadFactor);
console.log(test.length());
console.log(test.capacity);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.loadFactor);
console.log(test.length())



test.set ('lion','yellow')
console.log(test.loadFactor);
console.log(test.length());
console.log(test.capacity);

test.set('moon','silver');
console.log(test.loadFactor);
console.log(test.length());
console.log(test.capacity);
test.set('moon','white');

console.log(test.entries());