function removeElement(nums: number[], val: number): number {
    let k:number = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != val) {
            nums[k] = nums[index];
            k++;
        }
    }
    console.log(nums);
    return k;
};
console.log(removeElement([0,1,2,2,3,4], 2));