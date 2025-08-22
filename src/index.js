import './styles.css';
// eslint-disable-next-line import/no-absolute-path
import LinkedList from '/animal-list/animalList.js';

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('horse');

console.log(list.size);
console.log(list.at(3));
console.log(list.pop());
console.log(list.head);
console.log(list.tail);
console.log(list.contains('elephant'));
console.log(list.find('horse'));
console.log(list.insertAt('elephant', 3));
console.log(list.removeAt(0));
console.log(list.toString());
