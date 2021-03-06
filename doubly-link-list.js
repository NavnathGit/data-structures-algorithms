class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            previous: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        const previousNode = this.tail;
        this.tail.next = newNode;
        newNode.previous = previousNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }
    insert(index, value) {
        //Check Params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.previous = leader;
        follower.previous = newNode;
        this.length++;
        console.log(this);
        return this.printList();
    }
    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        //leader.next = this.traverseToIndex(index+1);
        const unWantedNode = leader.next;
        const nextNode = unWantedNode.next;
        leader.next = nextNode;
        nextNode.previous = leader;
        this.length--;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(20);
myLinkedList.prepend(25);
//myLinkedList.insert(2,99);
myLinkedList.insert(0, 33);
myLinkedList.remove(2);
myLinkedList.insert(4, 44);
  //myLinkedList.printList();
  //console.log(myLinkedList);

