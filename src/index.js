import './styles.css';

class Node {
  constructor(value) {
    this.node = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let father = current;
      while (current) {
        father = current;
        current = current.nextNode;
      }
      current = newNode;
      father.nextNode = current;
      this.tail = newNode;
    }
    this.size++;
  }
}

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list);
