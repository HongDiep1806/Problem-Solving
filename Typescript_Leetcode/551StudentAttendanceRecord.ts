function checkRecord(s: string): boolean {
    let countAbsent: number = 0;
    let countLate: number = 0;
    let streak = 0;


    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'A') {
            countAbsent++;
            if (countAbsent >= 2) {
                return false;
            }
        }
        if (s.charAt(i) === 'L') {
            countLate++;
        }
        if (countLate > streak) {
            streak = countLate;
            if(streak==3){
                return false;
            }
        } else {
            streak = 0;
            countLate = 0;
        }
    }
    return true;
};
console.log(checkRecord("LLLALL"));