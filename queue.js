class Node {
    constructor(value) {
        this.top = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        console.log(this.first)
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (this.length === 0) {
            return null;
        }
        else if (this.length === 1) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}
const myQueue = new Queue();
myQueue.enqueue('google');
myQueue.enqueue('Udemy');
myQueue.enqueue('yahoo');
myQueue.enqueue('AWS')
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
//myQueue.peek();
console.log(myQueue);
