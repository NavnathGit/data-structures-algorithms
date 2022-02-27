//not complete yet
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length

        }
        return hash;
    }
    set(key, value) {
        let address = this._hash(key);
        console.log(address)
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
            console.log(this.data);
        }
    }
}
const myHashTable = new HashTable(2);
myHashTable.set('grapese', 10000);
myHashTable.set('grapes', 10000);
