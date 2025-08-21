import './styles.css';

class Node {
  constructor(value) {
    this.node = value;
    this.nextNode = null;
  }
}

class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;
  append(value) {
    const newNode = new Node(value);
    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.nextNode = newNode;
      this.#tail = newNode;
    }
    this.#size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.#head;
    this.#head = newNode;
    if (this.#tail === null) {
      this.#tail = newNode;
    }
    this.#size++;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('horse');

console.log(list.size);
console.log(list.head);
console.log(list.tail);
