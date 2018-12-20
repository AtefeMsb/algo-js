/**
 * Given an array where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    let start = 0;
    let end = nums.length - 1;
    
    if (start > end) {
        return null;
    }

    let middle = Math.floor((end - start) / 2) + start;
    let root = new TreeNode(nums[middle]);

    let leftNums = nums.slice(0, middle);
    let rightNums = nums.slice(middle + 1);

    root.left = sortedArrayToBST(leftNums);
    root.right = sortedArrayToBST(rightNums);

    return root;
};