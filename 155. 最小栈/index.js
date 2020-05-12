/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = []
  this.minIndex = []
  this.min = Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.push(x)
  if (this.min > x) {
    this.min = x
    this.minIndex.push(this.arr.length - 1)
  } else {
    let len = this.minIndex.length
    this.minIndex.push(this.minIndex[len - 1])
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop()
  this.minIndex.pop()
  if (this.arr.length === 0) {
    this.min = Infinity
  } else {
    this.min = this.arr[this.minIndex[this.minIndex.length - 1]]
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let len = this.minIndex.length
  return this.arr[this.minIndex[len - 1]]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 var obj = new MinStack();

 obj.push(-10)
 obj.push(14)
 obj.push(-20)
 obj.pop()
 obj.push(10)
 obj.push(-7)
 obj.push(-7)
 obj.pop()
 obj.getMin()




