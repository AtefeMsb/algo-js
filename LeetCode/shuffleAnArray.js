/**
 * constructor function
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};


/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
/*
Solution.prototype.shuffle = function() {

    // use a Set to make sure each index has been picked just once
    const set = new Set();
    const shuffledArray = [];
    for (let i = 0; i < this.nums.length; i++) {
        let index;

        // find random index that is not been picked before
        do {
            index = randomNumber(0, this.nums.length);
        } while (set.has(index));

        set.add(index);
        shuffledArray[i] = this.nums[index];
    }
  
    // returns a random permutation of the nums array
    return shuffledArray;
};
*/

/**
 * Fisher-Yates Shuffle Modern Algorithm 
 */
Solution.prototype.shuffle = function() {

	let shuffledArray = [];
	for (let num of this.nums) {
		shuffledArray.push(num);
	}
    let index;

    let i = this.nums.length - 1;
    while (i > 0) {

        index = randomNumber(0, i);

        // swap i position with index position
		
        let temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[index];
        shuffledArray[index] = temp;

    }
  
    // returns a random permutation of the nums array
    return shuffledArray;
};

/**
 * returns a random number between min - max
 * @return {integer}
 */
function randomNumber(min, max) {

    // 0 <= num < 1
    let num = Math.random();

    num = Math.floor(num * (max - min)) + min;
    return num;
}
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

 let nums = [1, 2, 3, 4, 5];
let solution = new Solution(nums);
console.log(solution.shuffle());
console.log(solution.reset());