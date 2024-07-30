function firstUniqChar(s: string): number {
    let map: Map<string, number[]> = new Map();
    for (let character of s) {
        if (map.has(character)) {
            let indexes = map.get(character) as number[];
            indexes.push(s.indexOf(character));
            map.set(character, indexes);
        } else {
            let indexes:number[] = [];
            indexes.push(s.indexOf(character));
            map.set(character, []);
        }
    }

    for (let [key, value] of map) {
        console.log(key);
        value.forEach(index => {
            console.log(index);
        });
    }
    return 1;
}
console.log(firstUniqChar("llooveed"));