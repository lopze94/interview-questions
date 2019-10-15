/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let left = 0, sum = 0, ans = Number.MAX_VALUE
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        while(sum >= s){
            ans = Math.min(ans, i + 1 - left)
            sum -= nums[left++]
        }
    }
    
    return (ans != Number.MAX_VALUE) ? ans : 0
};