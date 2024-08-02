function singleNumber(nums: number[]): number {
    let map: Map<number, number> = new Map();
    nums.forEach(element => {
        if (map.has(element)) {
            let cur: number = map.get(element)!;
            cur++;
            map.set(element, cur);
        }else{
            map.set(element, 1);
        }
    });
    for(let [key,value] of map){
        if(value == 1){
            return key;
    }
    }
    return 0;
};
console.log(singleNumber([2,2,1]));