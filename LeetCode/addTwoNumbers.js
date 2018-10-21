
/**
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
 Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // make a dummy node - l3 is a pointer that traverse the list.
    let l3 = new ListNode();
    // prehead always points at the dummy node at the begining
    let preHead = l3;
    
    let carry = 0;
    while (l1 || l2) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        
        let sum = l1Val + l2Val + carry;
        let result = sum % 10;
        carry = Math.floor(sum / 10);
        
        l3.next = new ListNode(result);
        l3 = l3.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    if (carry) {
        l3.next = new ListNode(carry);
    }
    
    return preHead.next;  
};

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3); 
let l1 = node1;
node1.next = node2;
node2.next = node3;

let node11 = new ListNode(5);
let node22 = new ListNode(6);
let node33 = new ListNode(4);
let l2 = node11;
node11.next = node22;
node22.next = node33;

console.log(addTwoNumbers(l1, l2));