// JavaScript does not have inbuilt stacks and queues
// Stacks can be created using Array's or Linked List 
// queues
// Matt -- Joy -- Samir -- Pavel 
//Arrays 
//Linked List 
//Test Pull request
class Node {
    constructor(value) {
        this.top = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return null;
        }
        else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        }
        else {
            const holdingPointer = this.top;
            this.top = holdingPointer.next;
        }
        this.length--;
        return this;

    }
}
const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');
myStack.push('Yahoo');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
