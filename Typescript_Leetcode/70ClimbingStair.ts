function climbStairs(n: number): number {
let count2Step:number = 0;
let count1Step:number = 0;
count2Step = Math.ceil(n/2);
count1Step = Math.round(n%2);
return (count2Step + count1Step);
};
console.log(climbStairs(3));