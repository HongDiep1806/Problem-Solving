function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for (let index = 0; index < nums.length; index++) {
        if(nums[index]!= index){
            return index
        }
        
    }
    return nums.length;

};
console.log(missingNumber([0, 1]));