// Challenge https://leetcode.com/problems/middle-of-the-linked-list/description/
// Solution Reference https://www.youtube.com/watch?v=t97D5FbGnao&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=1

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};