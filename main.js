import LinkedList from './linkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('giraffe');
list.prepend('crocodile');

console.log(list.toString());
