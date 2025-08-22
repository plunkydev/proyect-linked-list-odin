class Node {
  constructor(value) {
    this.node = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
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

  at(index) {
    if (index < 0 || index >= this.#size) return null;
    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (this.#size === 0) return null;
    if (this.#size === 1) {
      const value = this.#head.node;
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
      return value;
    }

    let current = this.#head;
    for (let i = 0; i < this.#size - 2; i++) {
      current = current.nextNode;
    }
    const value = current.nextNode.node;
    current.nextNode = null;
    this.#tail = current;
    this.#size--;
    return value;
  }

  contains(value) {
    let current = this.#head;
    while (current) {
      if (current.node === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.#head;
    let index = 0;
    while (current) {
      if (current.node === value) return index;
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.#size) return false;
    if (index === 0) return this.prepend(value);
    if (index === this.#size) return this.append(value);
    const newNode = new Node(value);
    let current = this.#head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.#size++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#size) return null;
    if (index === this.#size - 1) return this.pop();
    if (index === 0) {
      const value = this.#head.node;
      this.#head = this.#head.nextNode;
      this.#size--;
      return value;
    }
    let current = this.#head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    const value = current.nextNode.node;
    current.nextNode = current.nextNode.nextNode;
    this.#size--;
    return value;
  }

  toString() {
    let current = this.#head;
    let result = '';
    while (current) {
      result += `(${current.node}) -> `;
      current = current.nextNode;
    }
    return result + 'null';
  }
}
