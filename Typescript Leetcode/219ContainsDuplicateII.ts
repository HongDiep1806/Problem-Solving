function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (map.has(num)) {
            let lastIndex = map.get(num)!;
            if (Math.abs(i - lastIndex) <= k) {
                return true;
            }
        }
        map.set(num, i);
    }

    return false;
}

