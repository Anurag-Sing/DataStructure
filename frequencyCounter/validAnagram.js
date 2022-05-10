function validAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    
    for(let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        
        if( frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false; 
        }
    }
    return true;
}

function validAnagram2(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    let lookup = {};

    for(let val of str1) {
        let letter = str1[val];
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
    }
    
    for(let val of str2) {
        let letter = str2[val];
        if(!lookup[letter]) {
            console.log(false)
            return false
        } else{
            lookup[letter] -= 1;
        }
    }

    console.log(true)
    return true;
}

validAnagram('anurag', 'taruna');
validAnagram2('anurag', 'garuna');