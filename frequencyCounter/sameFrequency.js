function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of num1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1  
    }
    for(let val of num2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1  
    }
    for(let val in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false
          }
        if(frequencyCounter1[val] !== frequencyCounter2[val]) {
            return false
        }
    }
    return true;
}

sameFrequency('12334', '54321');
