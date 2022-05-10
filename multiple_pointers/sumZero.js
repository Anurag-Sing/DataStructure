function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;
    while( left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            console.log(arr[left],arr[right]);
            return;
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    } 
}

// return the combination of two item in arr whose sum is zero
// array should be in sorting order
sumZero([-4,-3,-2,1,2,3,5,6,7])

