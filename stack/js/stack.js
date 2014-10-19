function Stack(maxZise) {
	this.elements = [];
	this.MAX_SIZE = maxZise || 50;
}

Stack.prototype.push = function(ele) {
	if (this.elements.length >= this.MAX_SIZE) {
		throw new RangeError("Stack overflow! ");
	}
	this.elements.push(ele);
}

Stack.prototype.peek = function() {
	return this.elements[this.elements.length - 1];
}
Stack.prototype.pop = function() {
	if (this.elements.length === 0) {
		throw new RangeError("Stack empty! ");
	}
	return this.elements.pop();

}
Stack.prototype.clear = function() {
	this.elements = [];
}
Stack.prototype.length = function() {
	return this.elements.length;
}

Stack.prototype.isEmpty = function() {
	return this.elements.length === 0;
}

/*
Demo :
var obj=new Stack();
console.log(obj.isEmpty());
obj.push(11);
console.log(obj.isEmpty());
obj.push(12);
console.log(obj.peek());
 */