// 46. Permutations



// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let results = []

    function helper(start, end){

        if (start === end) {
            results.push([...nums]);
            return;
        }

        for(let i = start; i < end; i++){

            [nums[start], nums[i]] = [nums[i], nums[start]];
            // Recurse for the next position
            helper(start + 1, end);
            // Backtrack (swap the elements back)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    helper(0, nums.length)
    return results
};
