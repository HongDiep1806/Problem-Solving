function searchInsert(nums: number[], target: number): number {
    let result: number = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == target) {
            return index;
        } else if (nums[index] < target) {
            result = index + 1;
        } else {
            return result;
        }
    }
    result = nums.length;
    return result;
};
console.log(searchInsert([1,3,5,6], 7));