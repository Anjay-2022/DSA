var head;
class Node { constructor(d) { this.data = d; this.next = null; this.prev = null; } }

function push(new_data) {
	var new_Node = new Node(new_data);
	new_Node.next = head;
	new_Node.prev = null;
	if (head != null)		 //head should exist 
		head.prev = new_Node;
	head = new_Node;
}

function InsertBefore(next_node, new_data) {
	if (next_node == null) {
		document.write("The given next node can not be NULL");
		return;
	}
	var new_node = new Node(new_data);
	new_node.prev = next_node.prev;
	next_node.prev = new_node;
	new_node.next = next_node;
	if (new_node.prev != null)
		new_node.prev.next = new_node;
	else
		head = new_node;
}

function InsertAfter(prev_Node, new_data) {
	if (prev_Node == null) {
		document.write("The given previous node cannot be NULL ");
		return;
	}
	var new_node = new Node(new_data);
	new_node.next = prev_Node.next;
	prev_Node.next = new_node;
	new_node.prev = prev_Node;
	if (new_node.next != null)
		new_node.next.prev = new_node;
}

function append(new_data) {
	var new_node = new Node(new_data);
	var last = head;
	new_node.next = null;
	if (head == null) {
		new_node.prev = null;
		head = new_node;
		return;
	}
	while (last.next != null)
		last = last.next;
	last.next = new_node;
	new_node.prev = last;
}

function printlist(node) {
	var last = null;
	console.log("<br/>Traversal in forward Direction<br/>");
	while (node != null) {
		console.log(node.data + " ");
		last = node;
		node = node.next;
	}
	console.log();
	console.log("<br/>Traversal in reverse direction<br/>");
	while (last != null) {
		console.log(last.data + " ");
		last = last.prev;
	}
}
function deleteNode(del) {
	if (head == null || del == null) {
		return;
	}
	if (head == del) {
		head = del.next;
	}
	if (del.next != null) {
		del.next.prev = del.prev;
	}
	if (del.prev != null) {
		del.prev.next = del.next;
	}
	return;
}

append(6);
push(7);
push(1);
append(4);
InsertAfter(head.next, 8);
InsertBefore(head.next.next, 5);

console.log("Created DLL is:<br/> ");
printlist(head);
console.log("------------")
push(2);
push(4);
push(8);
push(10);

console.log("Created DLL is: ");
printlist(head);
console.log("------------")
deleteNode(head);
deleteNode(head.next);
deleteNode(head.next);

console.log("Modified Linked list: ");
printlist(head);