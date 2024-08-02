function findTheDifference(s: string, t: string): string {
    let sortedS: string = s.split("").sort().join("");
    let sortedT: string = t.split("").sort().join("");
    for (let index = 0; index < sortedT.length; index++) {
        if (sortedS.charAt(index) == null) {
            return sortedT.charAt(sortedT.length - 1);
        } else {
            if (sortedS.charAt(index) != sortedT.charAt(index)) {
                return sortedT.charAt(index);
            }
        }

    }
    return "";
};
console.log(findTheDifference("", "aa"));