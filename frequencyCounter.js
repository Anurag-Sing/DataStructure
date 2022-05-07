// Used for comparison of two objects

function same(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        // checking the square of key is present in object
        if(!(key**2 in frequencyCounter2)) {
            return false;
        }
        // if ifirts point is valid check for the count of square value
        if( frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false; 
        }
    }
    return true;
}

same([1,2,3,2], [1,4,9,4])