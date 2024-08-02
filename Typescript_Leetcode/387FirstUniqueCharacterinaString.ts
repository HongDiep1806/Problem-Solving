function firstUniqChar(s: string): number {
    let map: Map<string, number[]> = new Map();
    for (let index = 0; index < s.length; index++) {
        let char = s.charAt(index);
        if (map.has(char)) {
            let indexes = map.get(char) as number[];
            indexes.push(index);
            map.set(char, indexes);
        } else {
            let indexes: number[] = [];
            indexes.push(index);
            map.set(char, indexes);
        }
    }
    console.log(map);
    for (let [key, value] of map) {
        if (value.length == 1) {
            return value[0];
        }
    }
    return -1;
}
console.log(firstUniqChar("llooveed"));