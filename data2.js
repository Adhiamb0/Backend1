class Queue {
    constructor() {
        this.items = [];
    }
    /**
     * Add new element to the queue
     * @param {*} element
     */
    enqueue(element) {
         this.items.push(element);
    }
    /**
     * Removed the first item in the queue
     * @returns {*} The first item in the queue
     */
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    /**
     * Returns the first item in the queue
     * @returns {*} The first item in the queue
     */
    first() {
        return this.items[this.items.length -1] 
    }
    /**
     * Checks if the queue is empty
     */
    isEmpty() {
        return this.items.length == 0;
    }
    /**
     * Returns the number of items in the queue
     */
    size() {
        return this.items.length;
    }
  }


  let queue = new Queue()
  queue.enqueue(23)
  queue.enqueue(34)
  queue.enqueue(89)

  queue.enqueue(78)
  console.log(queue.items)

  queue.dequeue()
  console.log(queue.dequeue())

  queue.first()
  console.log(queue.first())

  queue.isEmpty()
  console.log(queue.isEmpty())

  queue.size()
  console.log(queue.size())