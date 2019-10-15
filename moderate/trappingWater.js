/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1
    
    let l_max = 0, r_max = 0, ans = 0
    while(left < right){
        if(height[left] < height[right]){
            height[left] >= l_max ? 
                l_max = height[left] :
                ans += (l_max - height[left])
            left++
        } else {
            height[right] >= r_max ? 
                r_max = height[right] :
                ans += (r_max - height[right])
            right--
        }
    }
    
    return ans
};