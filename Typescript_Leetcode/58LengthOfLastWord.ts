function lengthOfLastWord(s: string): number {
    let count = 0;
    s = s.trim();
    let char: string[] = s.split(/\s+/);
    console.log(char);
    return char[char.length - 1].length;
};
console.log(lengthOfLastWord("Hello     World"));