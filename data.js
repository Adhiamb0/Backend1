class stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
      return  this.items.pop()
    }
    peek() {
       return this.items[this.items.length -1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
    clear(){
        this.items = [];
    }
    }

const data = new stack();
data.push(23)
data.push(34)
data.push(89)
console.log(data);

data.pop();
console.log(data.pop());

data.peek();
console.log(data.peek());

data.isEmpty();
console.log(data.isEmpty());

data.size();
console.log(data.size())

data.clear();
console.log(data);

data.queue();
console.log(data);