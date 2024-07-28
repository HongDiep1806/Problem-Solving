function containsDuplicate(nums: number[]): boolean {
    let checkedNums: Set<number> = new Set();
    for (let num of nums) {
        let element = num;
        if (checkedNums.has(element)) {
            return true;
        } else {
            checkedNums.add(element);
        }
    }

    return false;
};

function containsDuplicate2(nums: number[]): boolean {
    let checkedNums: Set<number> = new Set();
    let hasDuplicate = false;
    nums.forEach(element => {
        if (checkedNums.has(element)) {
            hasDuplicate = true;
        } else {
            checkedNums.add(element);
        }
    });

    return hasDuplicate;
}
console.log(containsDuplicate2([1, 2, 3, 4]));