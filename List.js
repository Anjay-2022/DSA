var head
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
function printList()
{
    var n = head;
    while (n != null) {
        console.log(n.data + " ");
        n = n.next;
    }
}
// var head = new Node(1);  
// var second = new Node(2);
// var third = new Node(3);
// head.next = second;
// second.next = third; 
// printList()

function push(new_data)
{
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

function append(new_data)
{
    var new_node = new Node(new_data);
    if (head == null)
    {
        head = new Node(new_data);
        return;
    }
    new_node.next = null;
    var last = head; 
    while (last.next != null)
        last = last.next;
    last.next = new_node;
    return;
}
function insertAfter(prev_node , new_data) 
{ 
    temp = head
    found = false
    while(temp!=null){
        if(temp.data==prev_node){
            found = true
            var new_node = new Node(new_data);
            new_node.next = temp.next
            temp.next = new_node
        }
        temp = temp.next 
    }
        if(!found)
         console.log("Element not found")
}
function deleteNode(key) {
    var temp = head, prev = null;
    if (temp != null && temp.data == key) {
        head = temp.next;
        return;
    }
    while (temp != null && temp.data != key) {
        prev = temp;
        temp = temp.next;
    }
    if (temp == null)
        return;
    prev.next = temp.next;
}

function getCountRec(node) {
    if (node == null)
        return 0;
    return 1 + getCountRec(node.next);
}
 function getCount() {
    return getCountRec(head);
}
console.log("initial list",printList())
push(7);
push(1);
push(5);
console.log("after append 6",printList())
append(6);
console.log("after push 13",printList())
push(13);
console.log("insert 9 after 13",printList())
insertAfter(13, 9);
console.log("after delete 7",printList())
deleteNode(9)
printList()
console.log("length of list",getCount())



printList()
function detectLoop()
{
    let a = head, b = head;
    let flag = 0;let temp
    while (a != null && b != null && b.next != null)
    {
        a = a.next;
        b = b.next.next;
        if (a == b){
            flag = 1;
            console.log("Loop found");
            break;
        }
    }
    if (flag == 1){   
        a=head     
        if(a!=b){
            while (a.next != b.next) {
                a = a.next;
                b = b.next;
            }
            b.next = null;
        } else {
            while (b.next != a) {
                b= b.next;
            }
            b.next = null;
        }
        console.log("Loop removed");
    } else
        console.log("No Loop");
}
head.next.next.next.next.next = head
detectLoop();
printList()

